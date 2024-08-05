import { useState } from "react";
import "./ContextMenu.scss";

const ContextMenu = ({
  children,
  contextMenuRef,
  content,
  visible,
  setVisible,
}) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setVisible(true);

    // Click position
    const clickX = e.clientX;
    const clickY = e.clientY;

    // Screen size
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // Context menu size i.e. 112 x 82 px hardcoded
    // Todo: Refactor this to get dynamic size
    // Context menu ref is null here as it is not rendered yet
    // Otherwise, we can get the size of the context menu using its ref
    const rootW = 112;
    const rootH = 82;

    // Check if there is enough space at the right for the context menu
    // screenW - clickX gives the remaining space on the right
    const right = screenW - clickX > rootW;
    const left = !right;

    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      // Location: 5px gap from cursor position i.e. right side
      setLeft(`${clickX + 5}px`);
    } else if (left) {
      // Location: -width of the context menu from cursor's position i.e. left side
      setLeft(`${clickX - rootW - 5}px`);
    }

    if (top) {
      setTop(`${clickY + 5}px`);
    } else if (bottom) {
      setTop(`${clickY - rootH - 5}px`);
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
