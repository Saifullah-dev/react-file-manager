import { useRef, useState, useCallback, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import { useSearch } from "../../contexts/SearchContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import FilterChips from "./FilterChips";
import PropTypes from "prop-types";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearchActive,
    isSearching,
    isRecursive,
    setIsRecursive,
    clearSearch,
  } = useSearch();
  const t = useTranslation();
  const inputRef = useRef(null);
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const debounceTimerRef = useRef(null);

  // Sync local query with context when context resets (e.g., path change)
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  // Auto-focus when search is activated (via Ctrl+F or toolbar button)
  useEffect(() => {
    if (isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchActive]);

  // Debounced search update (200ms)
  const updateSearch = useCallback(
    (query) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        if (onSearch) {
          onSearch(query);
        } else {
          setSearchQuery(query);
        }
      }, 200);
    },
    [onSearch, setSearchQuery]
  );

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      setLocalQuery(value);
      updateSearch(value);
    },
    [updateSearch]
  );

  const handleClear = useCallback(() => {
    setLocalQuery("");
    clearSearch();
    if (onSearch) {
      onSearch("");
    }
    inputRef.current?.focus();
  }, [clearSearch, onSearch]);

  const handleToggleRecursive = useCallback(() => {
    setIsRecursive((prev) => !prev);
  }, [setIsRecursive]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (localQuery) {
          handleClear();
        } else {
          inputRef.current?.blur();
        }
        e.stopPropagation();
      }
    },
    [localQuery, handleClear]
  );

  if (!isSearchActive) {
    return null;
  }

  return (
    <div className="search-bar-wrapper" role="search">
      <div className="search-bar-container">
        <div className={`search-input-wrapper ${isSearching ? "active" : ""}`}>
          <FiSearch className="search-icon" size={16} />
          <input
            ref={inputRef}
            type="text"
            className="search-bar-input"
            placeholder={t("searchPlaceholder")}
            aria-label={t("search")}
            value={localQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {isSearching && (
            <span className="search-result-count">
              {t("searchResults", { count: searchResults.length })}
            </span>
          )}
          {localQuery && (
            <button
              className="search-clear-btn"
              onClick={handleClear}
              aria-label={t("clearSearch")}
              type="button"
            >
              <MdClear size={18} />
            </button>
          )}
        </div>
        <button
          className={`search-recursive-btn ${isRecursive ? "active" : ""}`}
          onClick={handleToggleRecursive}
          aria-label={t("recursiveSearch")}
          aria-pressed={isRecursive}
          title={t("recursiveSearch")}
          type="button"
        >
          {t("recursiveSearch")}
        </button>
      </div>
      <FilterChips />
    </div>
  );
};

SearchBar.displayName = "SearchBar";

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
