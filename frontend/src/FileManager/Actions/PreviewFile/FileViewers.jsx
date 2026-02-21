import { useEffect, useState, useMemo } from "react";

// =============================================================================
// CodeViewer
// =============================================================================

const codeViewerStyles = {
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "#1e1e1e",
    borderRadius: "4px",
    fontFamily: "'Courier New', Consolas, Monaco, monospace",
    fontSize: "13px",
    lineHeight: "1.5",
  },
  lineNumbers: {
    padding: "12px 8px",
    textAlign: "right",
    color: "#858585",
    backgroundColor: "#1e1e1e",
    borderRight: "1px solid #333",
    userSelect: "none",
    minWidth: "40px",
    flexShrink: 0,
  },
  lineNumber: {
    display: "block",
    paddingRight: "8px",
  },
  code: {
    padding: "12px",
    margin: 0,
    color: "#d4d4d4",
    whiteSpace: "pre",
    flex: 1,
    overflow: "visible",
  },
};

const CodeViewer = ({ content, filePreviewPath, filePath }) => {
  const [text, setText] = useState(content || "");
  const [loading, setLoading] = useState(!content && !!filePreviewPath);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (content) {
      setText(content);
      return;
    }
    if (filePreviewPath && filePath) {
      setLoading(true);
      fetch(`${filePreviewPath}${filePath}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
          return res.text();
        })
        .then((data) => {
          setText(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [content, filePreviewPath, filePath]);

  const lines = text.split("\n");

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#cc0000" }}>{error}</div>;
  }

  return (
    <div style={codeViewerStyles.container}>
      <div style={codeViewerStyles.lineNumbers}>
        {lines.map((_, i) => (
          <span key={i} style={codeViewerStyles.lineNumber}>
            {i + 1}
          </span>
        ))}
      </div>
      <pre style={codeViewerStyles.code}>
        <code>{text}</code>
      </pre>
    </div>
  );
};

// =============================================================================
// MarkdownViewer
// =============================================================================

const markdownViewerStyles = {
  container: {
    padding: "16px 24px",
    width: "100%",
    height: "100%",
    overflow: "auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  },
};

/**
 * Simple regex-based markdown to HTML converter.
 * Supports: headers, bold, italic, code blocks, inline code, links, unordered/ordered lists.
 */
const convertMarkdownToHtml = (md) => {
  let html = md;

  // Fenced code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<pre style="background:#f4f4f4;padding:12px;border-radius:4px;overflow-x:auto;font-family:monospace;font-size:13px;line-height:1.4"><code>${escaped}</code></pre>`;
  });

  // Split into lines for block-level processing
  const lines = html.split("\n");
  const processed = [];
  let inList = false;
  let listType = null; // "ul" or "ol"

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Check for unordered list items
    const ulMatch = line.match(/^(\s*)[-*+]\s+(.+)/);
    // Check for ordered list items
    const olMatch = line.match(/^(\s*)\d+\.\s+(.+)/);

    if (ulMatch) {
      if (!inList || listType !== "ul") {
        if (inList) processed.push(`</${listType}>`);
        processed.push("<ul>");
        inList = true;
        listType = "ul";
      }
      processed.push(`<li>${ulMatch[2]}</li>`);
      continue;
    } else if (olMatch) {
      if (!inList || listType !== "ol") {
        if (inList) processed.push(`</${listType}>`);
        processed.push("<ol>");
        inList = true;
        listType = "ol";
      }
      processed.push(`<li>${olMatch[2]}</li>`);
      continue;
    } else if (inList) {
      processed.push(`</${listType}>`);
      inList = false;
      listType = null;
    }

    // Headers
    if (line.match(/^#{1,6}\s/)) {
      const level = line.match(/^(#{1,6})\s/)[1].length;
      const text = line.replace(/^#{1,6}\s+/, "");
      const sizes = { 1: "2em", 2: "1.5em", 3: "1.25em", 4: "1.1em", 5: "1em", 6: "0.9em" };
      processed.push(
        `<h${level} style="font-size:${sizes[level]};margin:0.8em 0 0.4em 0;font-weight:600">${text}</h${level}>`
      );
      continue;
    }

    // Horizontal rule
    if (line.match(/^(---|\*\*\*|___)\s*$/)) {
      processed.push('<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>');
      continue;
    }

    // Blockquote
    if (line.match(/^>\s/)) {
      const text = line.replace(/^>\s+/, "");
      processed.push(
        `<blockquote style="border-left:3px solid #ddd;padding-left:12px;color:#666;margin:8px 0">${text}</blockquote>`
      );
      continue;
    }

    processed.push(line);
  }

  if (inList) {
    processed.push(`</${listType}>`);
  }

  html = processed.join("\n");

  // Inline formatting (applied after block-level processing)
  // Bold (** or __)
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic (* or _) - careful not to match bold markers
  html = html.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>");
  html = html.replace(/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, "<em>$1</em>");

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code style="background:#f4f4f4;padding:2px 6px;border-radius:3px;font-family:monospace;font-size:0.9em">$1</code>'
  );

  // Links [text](url)
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#0366d6;text-decoration:none">$1</a>'
  );

  // Images ![alt](url)
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2" style="max-width:100%;border-radius:4px" />'
  );

  // Paragraphs: wrap standalone text lines
  html = html
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      // Skip lines that are already block elements
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("</ul") ||
        trimmed.startsWith("</ol") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<blockquote")
      ) {
        return line;
      }
      return `<p style="margin:0.5em 0">${line}</p>`;
    })
    .join("\n");

  return html;
};

const MarkdownViewer = ({ content, filePreviewPath, filePath }) => {
  const [text, setText] = useState(content || "");
  const [loading, setLoading] = useState(!content && !!filePreviewPath);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (content) {
      setText(content);
      return;
    }
    if (filePreviewPath && filePath) {
      setLoading(true);
      fetch(`${filePreviewPath}${filePath}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
          return res.text();
        })
        .then((data) => {
          setText(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [content, filePreviewPath, filePath]);

  const htmlContent = useMemo(() => convertMarkdownToHtml(text), [text]);

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#cc0000" }}>{error}</div>;
  }

  return (
    <div
      style={markdownViewerStyles.container}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

// =============================================================================
// CSVViewer
// =============================================================================

const csvViewerStyles = {
  container: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    padding: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "13px",
  },
  th: {
    padding: "8px 12px",
    backgroundColor: "#f0f0f0",
    borderBottom: "2px solid #d0d0d0",
    border: "1px solid #d0d0d0",
    fontWeight: 600,
    textAlign: "left",
    whiteSpace: "nowrap",
    position: "sticky",
    top: 0,
  },
  td: {
    padding: "6px 12px",
    border: "1px solid #e0e0e0",
    whiteSpace: "nowrap",
  },
  evenRow: {
    backgroundColor: "#fafafa",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
};

/**
 * Parse a CSV string into rows of fields.
 * Handles basic quoting (fields enclosed in double quotes).
 */
const parseCSV = (csvText) => {
  const rows = [];
  let currentRow = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        // Escaped quote
        currentField += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        currentRow.push(currentField.trim());
        currentField = "";
      } else if (char === "\n" || (char === "\r" && nextChar === "\n")) {
        currentRow.push(currentField.trim());
        if (currentRow.length > 0 && currentRow.some((f) => f !== "")) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentField = "";
        if (char === "\r") i++; // skip \n after \r
      } else {
        currentField += char;
      }
    }
  }

  // Handle last field/row
  currentRow.push(currentField.trim());
  if (currentRow.length > 0 && currentRow.some((f) => f !== "")) {
    rows.push(currentRow);
  }

  return rows;
};

const CSVViewer = ({ content, filePreviewPath, filePath }) => {
  const [text, setText] = useState(content || "");
  const [loading, setLoading] = useState(!content && !!filePreviewPath);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (content) {
      setText(content);
      return;
    }
    if (filePreviewPath && filePath) {
      setLoading(true);
      fetch(`${filePreviewPath}${filePath}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load file: ${res.statusText}`);
          return res.text();
        })
        .then((data) => {
          setText(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [content, filePreviewPath, filePath]);

  const rows = useMemo(() => parseCSV(text), [text]);

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#cc0000" }}>{error}</div>;
  }

  if (rows.length === 0) {
    return <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>No data</div>;
  }

  const headers = rows[0];
  const dataRows = rows.slice(1);

  return (
    <div style={csvViewerStyles.container}>
      <table style={csvViewerStyles.table}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} style={csvViewerStyles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? csvViewerStyles.evenRow : csvViewerStyles.oddRow}>
              {headers.map((_, colIndex) => (
                <td key={colIndex} style={csvViewerStyles.td}>
                  {row[colIndex] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CodeViewer, MarkdownViewer, CSVViewer };
