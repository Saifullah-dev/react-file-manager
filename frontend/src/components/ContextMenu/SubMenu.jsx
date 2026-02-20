import { FaCheck } from "react-icons/fa6";

const SubMenu = ({ subMenuRef, list, position = "right" }) => {
  return (
    <ul ref={subMenuRef} className={`sub-menu ${position}`} role="menu">
      {list?.map((item) => (
        <li key={item.title} role="menuitem" onClick={item.onClick}>
          <span className="item-selected">{item.selected && <FaCheck size={13} />}</span>
          {item.icon}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
