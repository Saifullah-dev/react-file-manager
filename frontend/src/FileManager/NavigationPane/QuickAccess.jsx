import React, { useState, useMemo } from "react";
import { MdStar, MdAccessTime, MdKeyboardArrowDown } from "react-icons/md";
import { FaRegFile, FaRegFolderOpen } from "react-icons/fa6";
import { useFavorites } from "../../contexts/FavoritesContext";
import { useFiles } from "../../contexts/FilesContext";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import { getParentPath } from "../../utils/getParentPath";
import "./QuickAccess.scss";

const getTimeLabel = (accessedAt, t) => {
  const now = new Date();
  const accessed = new Date(accessedAt);

  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - startOfToday.getDay());

  if (accessed >= startOfToday) {
    return t("today");
  } else if (accessed >= startOfYesterday) {
    return t("yesterday");
  } else if (accessed >= startOfWeek) {
    return t("thisWeek");
  }
  return t("earlier");
};

const QuickAccess = ({ onFileOpen }) => {
  const [favoritesOpen, setFavoritesOpen] = useState(true);
  const [recentsOpen, setRecentsOpen] = useState(true);
  const { favorites, recentFiles } = useFavorites();
  const { files } = useFiles();
  const { setCurrentPath, onFolderChange } = useFileNavigation();
  const t = useTranslation();

  // Resolve favorite paths to file objects
  const favoriteFiles = useMemo(() => {
    if (!files || favorites.size === 0) return [];
    return files.filter((file) => favorites.has(file.path));
  }, [files, favorites]);

  const handleItemClick = (file) => {
    if (file.isDirectory) {
      // Navigate to the folder
      onFileOpen(file);
      setCurrentPath(file.path);
      onFolderChange?.(file.path);
    } else {
      // Navigate to parent folder and select the file
      const parentPath = getParentPath(file.path);
      setCurrentPath(parentPath);
      onFolderChange?.(parentPath);
      onFileOpen(file);
    }
  };

  return (
    <div className="quick-access-container">
      {/* Favorites Section */}
      <div className="quick-access-section">
        <div
          className="section-header"
          onClick={() => setFavoritesOpen((prev) => !prev)}
          role="button"
          aria-expanded={favoritesOpen}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFavoritesOpen((prev) => !prev);
            }
          }}
        >
          <span className="section-header-left">
            <span className="section-icon">
              <MdStar size={16} />
            </span>
            {t("quickAccess")}
          </span>
          <span className={`collapse-toggle ${!favoritesOpen ? "collapsed" : ""}`}>
            <MdKeyboardArrowDown size={18} />
          </span>
        </div>
        {favoritesOpen && (
          <div className="section-items">
            {favoriteFiles.length > 0 ? (
              favoriteFiles.map((file) => (
                <div
                  key={file.path}
                  className="quick-access-item"
                  onClick={() => handleItemClick(file)}
                  title={file.name}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleItemClick(file);
                    }
                  }}
                >
                  <span className="item-star">
                    <MdStar size={14} />
                  </span>
                  <span className="item-icon">
                    {file.isDirectory ? (
                      <FaRegFolderOpen size={14} />
                    ) : (
                      <FaRegFile size={14} />
                    )}
                  </span>
                  <span className="item-name">{file.name}</span>
                </div>
              ))
            ) : (
              <div className="empty-state">{t("noFavorites")}</div>
            )}
          </div>
        )}
      </div>

      {/* Recent Section */}
      <div className="quick-access-section">
        <div
          className="section-header"
          onClick={() => setRecentsOpen((prev) => !prev)}
          role="button"
          aria-expanded={recentsOpen}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setRecentsOpen((prev) => !prev);
            }
          }}
        >
          <span className="section-header-left">
            <span className="section-icon recent-icon">
              <MdAccessTime size={16} />
            </span>
            {t("recent")}
          </span>
          <span className={`collapse-toggle ${!recentsOpen ? "collapsed" : ""}`}>
            <MdKeyboardArrowDown size={18} />
          </span>
        </div>
        {recentsOpen && (
          <div className="section-items">
            {recentFiles.length > 0 ? (
              recentFiles.map((file) => (
                <div
                  key={file.path}
                  className="quick-access-item"
                  onClick={() => handleItemClick(file)}
                  title={file.name}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleItemClick(file);
                    }
                  }}
                >
                  <span className="item-icon">
                    {file.isDirectory ? (
                      <FaRegFolderOpen size={14} />
                    ) : (
                      <FaRegFile size={14} />
                    )}
                  </span>
                  <span className="item-name">{file.name}</span>
                  <span className="item-time-label">
                    {getTimeLabel(file.accessedAt, t)}
                  </span>
                </div>
              ))
            ) : (
              <div className="empty-state">{t("noRecentFiles")}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

QuickAccess.displayName = "QuickAccess";

export default QuickAccess;
