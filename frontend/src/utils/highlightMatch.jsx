/**
 * highlightMatch takes a text string and a search query, and returns a React
 * element with <mark> tags wrapping the matched portions. Matching is
 * case-insensitive and highlights all occurrences.
 *
 * @param {string} text - The full text to display.
 * @param {string} query - The search query to highlight within the text.
 * @returns {React.ReactElement} The text with highlighted matches.
 */
const highlightMatch = (text, query) => {
  if (!query || !query.trim() || !text) {
    return <>{text}</>;
  }

  // Escape special regex characters in the query string
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  // Split by capturing group so matched portions appear in the resulting array
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={index} className="search-highlight">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export default highlightMatch;
