import { MdCheck } from "react-icons/md";
import { useTags } from "../../contexts/TagsContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./TagMenu.scss";

const TagMenu = ({ file }) => {
  const { tags, toggleTag, hasTag } = useTags();
  const t = useTranslation();

  if (!tags || tags.length === 0) return null;

  return (
    <div className="fm-tag-menu">
      <div className="fm-tag-menu-title">{t("tags") || "Tags"}</div>
      {tags.map((tag) => {
        const isActive = hasTag(file.path, tag.name);
        return (
          <button
            key={tag.name}
            className={`fm-tag-option ${isActive ? "fm-tag-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleTag(file, tag.name);
            }}
          >
            <span
              className="fm-tag-color-dot"
              style={{ backgroundColor: tag.color }}
            />
            <span className="fm-tag-name">{tag.name}</span>
            {isActive && (
              <span className="fm-tag-check">
                <MdCheck size={14} />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export const TagBadges = ({ file }) => {
  const { getFileTags } = useTags();
  const fileTags = getFileTags(file.path);

  if (fileTags.length === 0) return null;

  return (
    <div className="fm-tag-badges">
      {fileTags.map((tag) => (
        <span
          key={tag.name}
          className="fm-tag-badge"
          style={{ backgroundColor: tag.color }}
          title={tag.name}
        />
      ))}
    </div>
  );
};

TagMenu.displayName = "TagMenu";

export default TagMenu;
