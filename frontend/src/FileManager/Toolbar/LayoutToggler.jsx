import { BsGridFill } from "react-icons/bs";
import { FaCheck, FaListUl } from "react-icons/fa6";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useLayout } from "../../contexts/LayoutContext";
import {injectIntl} from "react-intl";

const LayoutToggler = ({ setShowToggleViewMenu, onLayoutChange, intl }) => {
  const toggleViewRef = useDetectOutsideClick(() => {
    setShowToggleViewMenu(false);
  });
  const { activeLayout, setActiveLayout } = useLayout();

  const layoutOptions = [
    {
      key: "grid",
      name: intl.formatMessage({id: `grid`}),
      icon: <BsGridFill size={18} />,
    },
    {
      key: "list",
      name: intl.formatMessage({id: `list`}),
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

export default injectIntl(LayoutToggler);
