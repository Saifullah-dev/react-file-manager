import { createContext, useCallback, useContext, useMemo, useState } from "react";

const TagsContext = createContext();

const DEFAULT_TAG_COLORS = [
  { name: "Red", color: "#ef4444" },
  { name: "Orange", color: "#f97316" },
  { name: "Yellow", color: "#eab308" },
  { name: "Green", color: "#22c55e" },
  { name: "Blue", color: "#3b82f6" },
  { name: "Purple", color: "#a855f7" },
  { name: "Gray", color: "#6b7280" },
];

export const TagsProvider = ({ children, availableTags, onTagChange }) => {
  // fileTags: Map of filePath -> Set of tag names
  const [fileTags, setFileTags] = useState(new Map());

  const tags = useMemo(
    () => availableTags || DEFAULT_TAG_COLORS,
    [availableTags]
  );

  const getFileTags = useCallback(
    (filePath) => {
      const tagNames = fileTags.get(filePath);
      if (!tagNames || tagNames.size === 0) return [];
      return tags.filter((t) => tagNames.has(t.name));
    },
    [fileTags, tags]
  );

  const addTag = useCallback(
    (file, tagName) => {
      setFileTags((prev) => {
        const next = new Map(prev);
        const existing = next.get(file.path) || new Set();
        const updated = new Set(existing);
        updated.add(tagName);
        next.set(file.path, updated);
        return next;
      });
      onTagChange?.(file, tagName, "add");
    },
    [onTagChange]
  );

  const removeTag = useCallback(
    (file, tagName) => {
      setFileTags((prev) => {
        const next = new Map(prev);
        const existing = next.get(file.path);
        if (!existing) return prev;
        const updated = new Set(existing);
        updated.delete(tagName);
        if (updated.size === 0) {
          next.delete(file.path);
        } else {
          next.set(file.path, updated);
        }
        return next;
      });
      onTagChange?.(file, tagName, "remove");
    },
    [onTagChange]
  );

  const toggleTag = useCallback(
    (file, tagName) => {
      const existing = fileTags.get(file.path);
      if (existing && existing.has(tagName)) {
        removeTag(file, tagName);
      } else {
        addTag(file, tagName);
      }
    },
    [fileTags, addTag, removeTag]
  );

  const hasTag = useCallback(
    (filePath, tagName) => {
      const existing = fileTags.get(filePath);
      return existing ? existing.has(tagName) : false;
    },
    [fileTags]
  );

  const value = useMemo(
    () => ({ tags, fileTags, getFileTags, addTag, removeTag, toggleTag, hasTag }),
    [tags, fileTags, getFileTags, addTag, removeTag, toggleTag, hasTag]
  );

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};

export const useTags = () => useContext(TagsContext);
