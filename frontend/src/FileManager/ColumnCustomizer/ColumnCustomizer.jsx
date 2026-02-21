import { useState, useCallback, useMemo } from "react";
import { MdDragIndicator, MdCheck, MdSettings } from "react-icons/md";
import { useTranslation } from "../../contexts/TranslationProvider";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import "./ColumnCustomizer.scss";

const ALL_COLUMNS = [
  { key: "name", label: "name", required: true },
  { key: "modified", label: "modified" },
  { key: "size", label: "size" },
  { key: "type", label: "type" },
  { key: "tags", label: "tags" },
  { key: "path", label: "path" },
];

const DEFAULT_VISIBLE = ["name", "modified", "size"];

export const useColumnConfig = (initialColumns, onColumnConfigChange) => {
  const [visibleColumns, setVisibleColumns] = useState(
    initialColumns || DEFAULT_VISIBLE
  );
  const [columnOrder, setColumnOrder] = useState(
    initialColumns || DEFAULT_VISIBLE
  );

  const toggleColumn = useCallback(
    (key) => {
      if (key === "name") return; // name is always visible
      setVisibleColumns((prev) => {
        const next = prev.includes(key)
          ? prev.filter((k) => k !== key)
          : [...prev, key];
        onColumnConfigChange?.(next);
        return next;
      });
      setColumnOrder((prev) => {
        if (prev.includes(key)) return prev;
        return [...prev, key];
      });
    },
    [onColumnConfigChange]
  );

  const reorderColumn = useCallback(
    (fromIndex, toIndex) => {
      setColumnOrder((prev) => {
        const next = [...prev];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        return next;
      });
    },
    []
  );

  const orderedVisibleColumns = useMemo(
    () => columnOrder.filter((key) => visibleColumns.includes(key)),
    [columnOrder, visibleColumns]
  );

  return {
    visibleColumns,
    orderedVisibleColumns,
    toggleColumn,
    reorderColumn,
    allColumns: ALL_COLUMNS,
  };
};

const ColumnCustomizer = ({ visibleColumns, allColumns, toggleColumn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useDetectOutsideClick(() => setIsOpen(false));
  const t = useTranslation();

  return (
    <div className="fm-column-customizer">
      <button
        className="fm-column-customizer-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        title={t("customizeColumns") || "Customize columns"}
        aria-label={t("customizeColumns") || "Customize columns"}
      >
        <MdSettings size={14} />
      </button>
      {isOpen && (
        <div ref={popoverRef.ref} className="fm-column-customizer-menu">
          <div className="fm-column-customizer-title">
            {t("columns") || "Columns"}
          </div>
          {allColumns.map((col) => (
            <label
              key={col.key}
              className={`fm-column-option ${col.required ? "fm-column-required" : ""}`}
            >
              <span className="fm-column-check">
                {visibleColumns.includes(col.key) && <MdCheck size={14} />}
              </span>
              <input
                type="checkbox"
                checked={visibleColumns.includes(col.key)}
                disabled={col.required}
                onChange={() => toggleColumn(col.key)}
                className="fm-column-checkbox-hidden"
              />
              <span className="fm-column-drag">
                {!col.required && <MdDragIndicator size={14} />}
              </span>
              <span>{t(col.label) || col.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

ColumnCustomizer.displayName = "ColumnCustomizer";

export default ColumnCustomizer;
