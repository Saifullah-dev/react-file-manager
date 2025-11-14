import { MouseEvent, ReactNode, RefObject } from "react";
import { FaCheck } from "react-icons/fa6";

export type SubMenuPosition = "left" | "right";

export interface SubMenuItem {
  title: string;
  selected: boolean;
  icon: ReactNode;
  onClick: (event : MouseEvent<HTMLLIElement>) => void;
}

export interface SubMenuProps {
  subMenuRef: RefObject<HTMLUListElement | null>;
  list: SubMenuItem[];
  position: SubMenuPosition
}

const SubMenu = ({ subMenuRef, list, position = "right" } : SubMenuProps) => {
  return (
    <ul ref={subMenuRef} className={`sub-menu ${position}`}>
      {list?.map((item) => (
        <li key={item.title} onClick={item.onClick}>
          <span className="item-selected">{item.selected && <FaCheck size={13} />}</span>
          {item.icon}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
