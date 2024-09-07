import { useEffect, useState } from "react";
import "./ContextMenu.scss";

const ContextMenu = ({ children, filesViewRef, contextMenuRef, content, visible, setVisible }) => {
  const [clickPosition, setClickPosition] = useState({ clickX: 0, clickY: 0 });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setClickPosition({ clickX: e.clientX, clickY: e.clientY });
    setVisible(true);
  };

  const contextMenuPosition = () => {
    const { clickX, clickY } = clickPosition;

    const container = filesViewRef.current;
    const containerRect = container.getBoundingClientRect();
    const scrollBarWidth = container.offsetWidth - container.clientWidth;

    // Context menu size
    const contextMenuContainer = contextMenuRef.current.getBoundingClientRect();
    const menuWidth = contextMenuContainer.width;
    const menuHeight = contextMenuContainer.height;

    // Check if there is enough space at the right for the context menu
    const leftToCursor = clickX - containerRect.left;
    const right = containerRect.width - (leftToCursor + scrollBarWidth) > menuWidth;
    const left = !right;

    const topToCursor = clickY - containerRect.top;
    const top = containerRect.height - topToCursor > menuHeight;
    const bottom = !top;

    if (right) {
      setLeft(`${leftToCursor}px`);
    } else if (left) {
      // Location: -width of the context menu from cursor's position i.e. left side
      setLeft(`${leftToCursor - menuWidth}px`);
    }

    if (top) {
      setTop(`${topToCursor + container.scrollTop}px`);
    } else if (bottom) {
      setTop(`${topToCursor + container.scrollTop - menuHeight}px`);
    }
  };

  useEffect(() => {
    if (visible && contextMenuRef.current) {
      contextMenuPosition();
    } else {
      setTop(0);
      setLeft(0);
    }
  }, [visible]);

  return (
    <div onContextMenu={handleContextMenu} onClick={(e) => setVisible(false)}>
      {children}
      {visible && (
        <div
          ref={contextMenuRef}
          className={`fm-context-menu ${top ? "visible" : "hidden"}`}
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
