import { MouseEvent, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import SubMenu, { SubMenuItem, SubMenuPosition } from "./SubMenu";
import "./ContextMenu.scss";
import { ClickPosition } from "../../FileManager/FileList/useFileList";

export interface MenuItem {
  title?: string;
  selected?: boolean;
  icon?: ReactNode;
  className?: string;
  hidden?: boolean;
  children?: SubMenuItem[];
  divider?: boolean;
  onClick?: (event : MouseEvent<HTMLLIElement>) => void;
}

export interface ContextMenuProps {
  filesViewRef: RefObject<HTMLDivElement | null>;
  contextMenuRef: RefObject<HTMLDivElement | null>;
  menuItems: MenuItem[];
  visible: boolean;
  setVisible?: (visible : boolean) => void; 
  clickPosition: ClickPosition
}

const ContextMenu = ({ filesViewRef, contextMenuRef, menuItems, visible, clickPosition } : ContextMenuProps) => {
  const [left, setLeft] = useState<string>("0");
  const [top, setTop] = useState<string>("0");
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState<number | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState<SubMenuPosition>("right");

  const subMenuRef = useRef<HTMLUListElement>(null);

  const contextMenuPosition = () => {
    const { clickX, clickY } = clickPosition;

    const container = filesViewRef.current;
    const containerRect = container!.getBoundingClientRect();
    const scrollBarWidth = container!.offsetWidth - container!.clientWidth;

    // Context menu size
    const contextMenuContainer = contextMenuRef.current!.getBoundingClientRect();
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
      setSubMenuPosition("right");
    } else if (left) {
      // Location: -width of the context menu from cursor's position i.e. left side
      setLeft(`${leftToCursor - menuWidth}px`);
      setSubMenuPosition("left");
    }

    if (top) {
      setTop(`${topToCursor + container!.scrollTop}px`);
    } else if (bottom) {
      setTop(`${topToCursor + container!.scrollTop - menuHeight}px`);
    }
  };

  const handleContextMenu = (e : MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseOver = (index : number) => {
    setActiveSubMenuIndex(index);
  };

  useEffect(() => {
    if (visible && contextMenuRef.current) {
      contextMenuPosition();
    } else {
      setTop("0");
      setLeft("0");
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
                const activeSubMenu = activeSubMenuIndex === index && hasChildren;
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
                          {activeSubMenu && (
                            <SubMenu
                              subMenuRef={subMenuRef}
                              list={item.children ?? []}
                              position={subMenuPosition}
                            />
                          )}
                        </>
                      )}
                    </li>
                    {item.divider &&
                      index !== menuItems.filter((item) => !item.hidden).length - 1 && (
                        <div className="divider"></div>
                      )}
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
  
  return null;
};

export default ContextMenu;
