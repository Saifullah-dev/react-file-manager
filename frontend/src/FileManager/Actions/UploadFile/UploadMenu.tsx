import { KeyboardEvent, RefObject } from "react";
import { MdOutlineDriveFolderUpload, MdOutlineUploadFile } from "react-icons/md";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./UploadMenu.scss";

export interface UploadMenuProps {
  onUploadFiles: () => void;
  onUploadFolder: () => void;
  onClose: () => void;
  // Element that toggles the menu. Clicks on it are left to its own handler.
  anchorRef?: RefObject<HTMLElement | null>;
  className?: string;
}

const UploadMenu = ({
  onUploadFiles,
  onUploadFolder,
  onClose,
  anchorRef,
  className = "",
}: UploadMenuProps) => {
  const menuRef = useDetectOutsideClick<HTMLDivElement>((e) => {
    if (e.target instanceof Node && anchorRef?.current?.contains(e.target)) return;
    onClose();
  });
  const t = useTranslation();

  const options = [
    {
      key: "files",
      name: t("uploadFiles"),
      icon: <MdOutlineUploadFile size={18} />,
      onSelect: onUploadFiles,
    },
    {
      key: "folder",
      name: t("uploadFolder"),
      icon: <MdOutlineDriveFolderUpload size={18} />,
      onSelect: onUploadFolder,
    },
  ];

  // The picker must open inside this click, so select first and close after
  const handleSelect = (onSelect: () => void) => {
    onSelect();
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent, onSelect: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(onSelect);
    } else if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
    }
  };

  return (
    <div ref={menuRef.ref} className={`fm-upload-menu ${className}`}>
      <ul role="menu" aria-orientation="vertical">
        {options.map((option, index) => (
          <li
            role="menuitem"
            key={option.key}
            tabIndex={0}
            autoFocus={index === 0}
            onClick={() => handleSelect(option.onSelect)}
            onKeyDown={(e) => handleKeyDown(e, option.onSelect)}
          >
            {option.icon}
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadMenu;
