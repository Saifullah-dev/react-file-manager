import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useFiles } from "./FilesContext";
import { useFileNavigation } from "./FileNavigationContext";

const SearchContext = createContext();

// File type categories mapping
const FILE_TYPE_CATEGORIES = {
  Images: [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"],
  Documents: [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".txt", ".rtf"],
  Videos: [".mp4", ".avi", ".mov", ".mkv", ".webm"],
  Audio: [".mp3", ".wav", ".ogg", ".flac", ".aac"],
  Code: [".js", ".jsx", ".ts", ".tsx", ".py", ".java", ".cpp", ".c", ".html", ".css", ".scss", ".json", ".xml", ".yaml", ".yml", ".md"],
  Archives: [".zip", ".rar", ".7z", ".tar", ".gz"],
};

/**
 * Get the file extension from a file name (lowercase, with dot).
 * @param {string} name - The file name.
 * @returns {string} The lowercase extension with dot, or empty string.
 */
const getExtension = (name) => {
  if (!name || typeof name !== "string") return "";
  const dotIndex = name.lastIndexOf(".");
  return dotIndex > 0 ? name.substring(dotIndex).toLowerCase() : "";
};

/**
 * Check if a file matches any of the given active type filter categories.
 * @param {object} file - The file object.
 * @param {string[]} activeFilters - Array of active filter names (e.g., ["Images", "Documents"]).
 * @returns {boolean}
 */
const matchesTypeFilters = (file, activeFilters) => {
  // Filter out "This Week" since it's handled separately
  const typeFilters = activeFilters.filter((f) => f !== "This Week");
  if (typeFilters.length === 0) return true;
  if (file.isDirectory) return false;

  const ext = getExtension(file.name);
  return typeFilters.some((filterName) => {
    const extensions = FILE_TYPE_CATEGORIES[filterName];
    return extensions ? extensions.includes(ext) : false;
  });
};

/**
 * Check if a file was updated within the last 7 days.
 * @param {object} file - The file object.
 * @returns {boolean}
 */
const matchesThisWeekFilter = (file) => {
  if (!file.updatedAt) return false;

  const fileDate = new Date(file.updatedAt);
  if (isNaN(fileDate.getTime())) return false;

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return fileDate >= sevenDaysAgo;
};

/**
 * Fuzzy match: case-insensitive partial name match.
 * Also supports matching without extension.
 * @param {string} fileName - The file name.
 * @param {string} query - The search query.
 * @returns {boolean}
 */
const fuzzyMatch = (fileName, query) => {
  if (!query) return true;
  const lowerName = fileName.toLowerCase();
  const lowerQuery = query.toLowerCase();

  // Match against full name
  if (lowerName.includes(lowerQuery)) return true;

  // Match against name without extension
  const dotIndex = lowerName.lastIndexOf(".");
  if (dotIndex > 0) {
    const nameWithoutExt = lowerName.substring(0, dotIndex);
    if (nameWithoutExt.includes(lowerQuery)) return true;
  }

  return false;
};

export const SearchProvider = ({ children, onSearch }) => {
  const { files } = useFiles();
  const { currentPath, currentPathFiles } = useFileNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [isRecursive, setIsRecursive] = useState(false);

  const isSearching = searchQuery.length > 0 || activeFilters.length > 0;

  // Toggle a filter chip on/off
  const toggleFilter = useCallback((filterName) => {
    setActiveFilters((prev) => {
      if (prev.includes(filterName)) {
        return prev.filter((f) => f !== filterName);
      }
      return [...prev, filterName];
    });
  }, []);

  // Clear all search state
  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setActiveFilters([]);
    setIsSearchActive(false);
    setIsRecursive(false);
  }, []);

  // Determine the source file list based on recursive flag
  const sourceFiles = useMemo(() => {
    if (isRecursive) {
      return Array.isArray(files) ? files : [];
    }
    return Array.isArray(currentPathFiles) ? currentPathFiles : [];
  }, [isRecursive, files, currentPathFiles]);

  // Compute search results
  const searchResults = useMemo(() => {
    if (!isSearching) return currentPathFiles || [];

    return sourceFiles.filter((file) => {
      const matchesQuery = fuzzyMatch(file.name, searchQuery);
      const matchesType = matchesTypeFilters(file, activeFilters);
      const hasThisWeek = activeFilters.includes("This Week");
      const matchesDate = hasThisWeek ? matchesThisWeekFilter(file) : true;
      return matchesQuery && matchesType && matchesDate;
    });
  }, [sourceFiles, searchQuery, activeFilters, isSearching, currentPathFiles]);

  // Clear search when navigating to a different path
  useEffect(() => {
    clearSearch();
  }, [currentPath]);

  // Notify onSearch callback when search changes
  useEffect(() => {
    if (onSearch && isSearching) {
      onSearch(searchQuery, activeFilters);
    }
  }, [searchQuery, activeFilters]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        isSearchActive,
        setIsSearchActive,
        isSearching,
        activeFilters,
        toggleFilter,
        clearSearch,
        isRecursive,
        setIsRecursive,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
