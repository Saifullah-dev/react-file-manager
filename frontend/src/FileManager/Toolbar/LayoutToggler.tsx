import { BsGridFill } from "react-icons/bs";
import { FaCheck, FaListUl } from "react-icons/fa6";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useLayout } from "../../contexts/LayoutContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import { OnLayoutChange } from "../../types/FileManagerFunctions";
import { Layout } from "../../types/Layout";

export interface LayoutTogglerProps {
  setShowToggleViewMenu: (value : boolean) => void;
  onLayoutChange: OnLayoutChange;
}

const LayoutToggler = ({ setShowToggleViewMenu, onLayoutChange } : LayoutTogglerProps) => {
  const toggleViewRef = useDetectOutsideClick<HTMLDivElement>(() => {
    setShowToggleViewMenu(false);
  });
  const { activeLayout, setActiveLayout } = useLayout();
  const t = useTranslation();

  const layoutOptions = [
    {
      key: "grid",
      name: t("grid"),
      icon: <BsGridFill size={18} />,
    },
    {
      key: "list",
      name: t("list"),
      icon: <FaListUl size={18} />,
    },
  ];

  const handleSelection = (key : Layout) => {
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
            onClick={() => handleSelection(option.key as Layout)}
            onKeyDown={() => handleSelection(option.key as Layout)}
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
