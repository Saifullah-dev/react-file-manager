import { BsGridFill } from "react-icons/bs";
import { FaCheck, FaListUl } from "react-icons/fa6";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useLayout } from "../../contexts/LayoutContext";

const LayoutToggler = ({ setShowToggleViewMenu, onLayoutChange }) => {
  const toggleViewRef = useDetectOutsideClick(() => {
    setShowToggleViewMenu(false);
  });
  const { activeLayout, setActiveLayout } = useLayout();

  const layoutOptions = [
    {
      key: "grid",
      name: "Grid",
      icon: <BsGridFill size={18} />,
    },
    {
      key: "list",
      name: "List",
      icon: <FaListUl size={18} />,
    },
  ];

  const handleSelection = (key) => {
    setActiveLayout(key);
    onLayoutChange(key);
    setShowToggleViewMenu(false);
  };

  return (
    <div ref={toggleViewRef.ref} className="toggle-view" role="dropdown">
      <ul role="menu" aria-orientation="vertical">
        {layoutOptions.map((option) => (
          <li
            role="menuitem"
            key={option.key}
            onClick={() => handleSelection(option.key)}
            onKeyDown={() => handleSelection(option.key)}
          >
            <span>{option.key === activeLayout && <FaCheck size={13} />}</span>
            <span>{option.icon}</span>
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayoutToggler;
