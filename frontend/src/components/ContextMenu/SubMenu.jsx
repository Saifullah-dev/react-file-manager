import { FaCheck } from "react-icons/fa6";

const SubMenu = ({ list }) => {
  return (
    <ul className="sub-menu">
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
