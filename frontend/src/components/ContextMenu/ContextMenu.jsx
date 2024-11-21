import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import SubMenu from "./SubMenu";
import "./ContextMenu.scss";

const ContextMenu = ({ filesViewRef, contextMenuRef, menuItems, visible, clickPosition }) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

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

  const handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseOver = (index) => {
    setActiveSubMenuIndex(index);
  };

  useEffect(() => {
    if (visible && contextMenuRef.current) {
      contextMenuPosition();
    } else {
      setTop(0);
      setLeft(0);
      setActiveSubMenuIndex(null);
    }
  }, [visible]);

  if (visible) {
    return (
      <div
        ref={contextMenuRef}
        onContextMenu={handleContextMenu}
        onClick={(e) => e.stopPropagation()}
        className={`fm-context-menu ${top ? "visible" : "hidden"}`}
        style={{
          top: top,
          left: left,
        }}
      >
        <div className="file-context-menu-list">
          <ul>
            {menuItems
              .filter((item) => !item.hidden)
              .map((item, index) => {
                const hasChildren = item.hasOwnProperty("children");
                const activeSubMenu = activeSubMenuIndex === index;
                return (
                  <div key={item.title}>
                    <li
                      onClick={item.onClick}
                      className={`${item.className ?? ""} ${activeSubMenu ? "active" : ""}`}
                      onMouseOver={() => handleMouseOver(index)}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      {hasChildren && (
                        <>
                          <FaChevronRight size={14} className="list-expand-icon" />
                          {activeSubMenu && <SubMenu list={item.children} />}
                        </>
                      )}
                    </li>
                    {item.divider && <div className="divider"></div>}
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
};

export default ContextMenu;
