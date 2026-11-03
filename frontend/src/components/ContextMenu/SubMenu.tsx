import { MouseEvent, ReactNode, RefObject } from "react";
import { FaCheck } from "react-icons/fa6";

export type SubMenuPosition = "left" | "right";

export interface SubMenuItem {
  title: string;
  // Leave out for action items; only lists with checkable items reserve space for the check mark
  selected?: boolean;
  icon: ReactNode;
  onClick: (event : MouseEvent<HTMLLIElement>) => void;
}

export interface SubMenuProps {
  subMenuRef: RefObject<HTMLUListElement | null>;
  list: SubMenuItem[];
  position: SubMenuPosition
}

const SubMenu = ({ subMenuRef, list, position = "right" } : SubMenuProps) => {
  const isCheckable = list.some((item) => item.selected !== undefined);

  return (
    <ul ref={subMenuRef} className={`sub-menu ${position}`}>
      {list?.map((item) => (
        <li key={item.title} onClick={item.onClick}>
          {isCheckable && (
            <span className="item-selected">{item.selected && <FaCheck size={13} />}</span>
          )}
          {item.icon}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
