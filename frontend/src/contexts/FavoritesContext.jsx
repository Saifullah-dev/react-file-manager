import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const FavoritesContext = createContext();

const MAX_RECENT_FILES = 20;

export const FavoritesProvider = ({
  children,
  onFavoriteToggle,
  onRecentFiles,
  initialFavorites = [],
}) => {
  const [favorites, setFavorites] = useState(() => new Set(initialFavorites));
  const [recentFiles, setRecentFiles] = useState([]);
  const isMountRef = useRef(true);

  // Notify parent when recents change (skip initial mount)
  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
      return;
    }
    onRecentFiles?.(recentFiles);
  }, [recentFiles]);

  const toggleFavorite = useCallback(
    (file) => {
      setFavorites((prev) => {
        const next = new Set(prev);
        const isFavorited = next.has(file.path);
        if (isFavorited) {
          next.delete(file.path);
        } else {
          next.add(file.path);
        }
        onFavoriteToggle?.(file, !isFavorited);
        return next;
      });
    },
    [onFavoriteToggle]
  );

  const isFavorite = useCallback(
    (filePath) => favorites.has(filePath),
    [favorites]
  );

  const addToRecent = useCallback((file) => {
    setRecentFiles((prev) => {
      // Remove existing entry with same path (deduplicate)
      const filtered = prev.filter((f) => f.path !== file.path);
      // Add to front with timestamp
      const entry = { ...file, accessedAt: Date.now() };
      const next = [entry, ...filtered];
      // Cap at max
      return next.slice(0, MAX_RECENT_FILES);
    });
  }, []);

  const clearRecents = useCallback(() => {
    setRecentFiles([]);
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites(new Set());
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        recentFiles,
        toggleFavorite,
        isFavorite,
        addToRecent,
        clearRecents,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
