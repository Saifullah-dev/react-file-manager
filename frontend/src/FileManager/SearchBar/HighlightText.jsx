import { useMemo } from "react";
import PropTypes from "prop-types";

/**
 * HighlightText renders text with matched portions wrapped in <mark> tags.
 * Matching is case-insensitive.
 *
 * @param {string} text - The full text to display.
 * @param {string} highlight - The query string to highlight within the text.
 */
const HighlightText = ({ text, highlight }) => {
  const parts = useMemo(() => {
    if (!highlight || !highlight.trim()) {
      return null;
    }

    // Escape special regex characters in the highlight string
    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");

    // When splitting by a capturing group, matched portions appear at odd indices
    const splitParts = text.split(regex);

    return splitParts
      .filter((part) => part !== "")
      .map((part, index) => ({
        text: part,
        isMatch: part.toLowerCase() === highlight.toLowerCase(),
      }));
  }, [text, highlight]);

  if (!parts) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, index) =>
        part.isMatch ? (
          <mark key={index} className="search-highlight">
            {part.text}
          </mark>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
};

HighlightText.displayName = "HighlightText";

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
  highlight: PropTypes.string,
};

HighlightText.defaultProps = {
  highlight: "",
};

export default HighlightText;
