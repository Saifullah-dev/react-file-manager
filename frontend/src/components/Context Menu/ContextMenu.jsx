import { useState } from "react";
import "./ContextMenu.scss";

const ContextMenu = ({ children, filesViewRef, contextMenuRef, content, visible, setVisible }) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setVisible(true);

    // Click position
    const clickX = e.clientX;
    const clickY = e.clientY;

    const container = filesViewRef.current;
    const containerRect = container.getBoundingClientRect();

    // Files Viewer's Screen size
    const screenW = containerRect.width;
    const screenH = containerRect.height;

    // Context menu size i.e. 112 x 82 px hardcoded
    // Todo: Refactor this to get dynamic size
    // Context menu ref is null here as it is not rendered yet
    // Otherwise, we can get the size of the context menu using its ref
    const rootW = 135;
    const rootH = 242;

    // Check if there is enough space at the right for the context menu
    // screenW - clickX gives the remaining space on the right
    const leftToCursor = clickX - containerRect.left;
    const right = containerRect.width - leftToCursor > rootW;
    const left = !right;

    const topToCursor = clickY - containerRect.top;
    const top = containerRect.height - topToCursor > rootH;
    const bottom = !top;

    if (right) {
      // Location: 5px gap from cursor position i.e. right side
      setLeft(`${clickX - containerRect.left + 10}px`);
    } else if (left) {
      // Location: -width of the context menu from cursor's position i.e. left side
      setLeft(`${clickX - containerRect.left - rootW}px`);
    }

    if (top) {
      setTop(`${clickY - containerRect.top + 10}px`);
    } else if (bottom) {
      setTop(`${clickY - containerRect.top - rootH + 20}px`);
    }
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={(e) => setVisible(false)}>
      {children}
      {visible && (
        <div
          ref={contextMenuRef}
          className="fm-context-menu"
          style={{
            top: top,
            left: left,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
