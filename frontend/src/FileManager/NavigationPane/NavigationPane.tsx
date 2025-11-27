import { useEffect, useState } from "react";
import FolderTree from "./FolderTree";
import { getParentPath } from "../../utils/getParentPath";
import { useFiles } from "../../contexts/FilesContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./NavigationPane.scss";
import { OnFileOpen } from "../../types/FileManagerFunctions";
import { ExtendedFileItem } from "../../types/File";

export interface NavigationPaneProps {
  onFileOpen: OnFileOpen;
}

const NavigationPane = ({ onFileOpen } : NavigationPaneProps) => {
  const [foldersTree, setFoldersTree] = useState<ExtendedFileItem[]>([]);
  const { files } = useFiles();
  const t = useTranslation();

  const createChildRecursive = (
    path: string, 
    foldersStruct: Partial<Record<string, ExtendedFileItem[]>>
  ): ExtendedFileItem[] => {
    if (!foldersStruct[path]) return []; // No children for this path (folder)

    return foldersStruct[path]!.map((folder) => {
      return {
        ...folder,
        subDirectories: createChildRecursive(folder.path, foldersStruct),
      };
    });
  };

  useEffect(() => {
    if (Array.isArray(files)) {
      const folders = files.filter((file) => file.isDirectory);
      // Grouping folders by parent path
      const foldersStruct = Object.groupBy(folders, ({ path }) => getParentPath(path));
      setFoldersTree(() => {
        const rootPath = "";
        return createChildRecursive(rootPath, foldersStruct as Record<string, ExtendedFileItem[]>);
      });
    }
  }, [files]);

  return (
    <div className="sb-folders-list">
      {foldersTree?.length > 0 ? (
        <>
          {foldersTree?.map((folder, index) => {
            return <FolderTree key={index} folder={folder} onFileOpen={onFileOpen} />;
          })}
        </>
      ) : (
        <div className="empty-nav-pane">{t("nothingHereYet")}</div>
      )}
    </div>
  );
};

NavigationPane.displayName = "NavigationPane";

export default NavigationPane;
