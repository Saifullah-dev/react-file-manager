import { useCallback } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./FilterChips.scss";

const TYPE_CHIPS = [
  { key: "Images", labelKey: "filterImages" },
  { key: "Documents", labelKey: "filterDocuments" },
  { key: "Videos", labelKey: "filterVideos" },
  { key: "Audio", labelKey: "filterAudio" },
  { key: "Code", labelKey: "filterCode" },
  { key: "Archives", labelKey: "filterArchives" },
];

const FilterChips = () => {
  const { activeFilters, toggleFilter } = useSearch();
  const t = useTranslation();

  const handleChipClick = useCallback(
    (filterKey) => {
      toggleFilter(filterKey);
    },
    [toggleFilter]
  );

  return (
    <div
      className="filter-chips-container"
      role="toolbar"
      aria-label={t("search")}
    >
      <div className="filter-chips-group" role="group" aria-label={t("search")}>
        {TYPE_CHIPS.map((chip) => (
          <button
            key={chip.key}
            className={`filter-chip ${activeFilters.includes(chip.key) ? "active" : ""}`}
            onClick={() => handleChipClick(chip.key)}
            aria-pressed={activeFilters.includes(chip.key)}
            type="button"
          >
            {t(chip.labelKey)}
          </button>
        ))}
      </div>

      <div className="filter-chips-separator" aria-hidden="true" />

      <div className="filter-chips-group" role="group" aria-label={t("filterThisWeek")}>
        <button
          className={`filter-chip ${activeFilters.includes("This Week") ? "active" : ""}`}
          onClick={() => handleChipClick("This Week")}
          aria-pressed={activeFilters.includes("This Week")}
          type="button"
        >
          {t("filterThisWeek")}
        </button>
      </div>
    </div>
  );
};

FilterChips.displayName = "FilterChips";

export default FilterChips;
