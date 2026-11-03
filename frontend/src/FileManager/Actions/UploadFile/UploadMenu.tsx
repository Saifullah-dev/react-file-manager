import { KeyboardEvent, RefObject, useEffect } from "react";
import { MdOutlineDriveFolderUpload, MdOutlineUploadFile, MdOutlineChecklist } from "react-icons/md";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./UploadMenu.scss";

export interface UploadMenuProps {
  onUploadFiles: () => void;
  onUploadFolder: () => void;
  onClose: () => void;
  // Shows the upload dialog, e.g. to check on uploads running in the background
  onShowUploads?: () => void;
  // Element that toggles the menu. Clicks on it are left to its own handler.
  anchorRef?: RefObject<HTMLElement | null>;
  className?: string;
}

const UploadMenu = ({
  onUploadFiles,
  onUploadFolder,
  onClose,
  onShowUploads,
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
    ...(onShowUploads
      ? [
          {
            key: "uploads",
            name: t("viewUploads"),
            icon: <MdOutlineChecklist size={18} />,
            onSelect: onShowUploads,
          },
        ]
      : []),
  ];

  const getMenuItems = () =>
    Array.from(menuRef.ref.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);

  // Move focus into the menu so it can be used from the keyboard
  useEffect(() => {
    getMenuItems()[0]?.focus();
  }, []);

  const close = (restoreFocus = false) => {
    onClose();
    if (!restoreFocus) return;
    // The anchor may be a wrapper around the button that opened the menu
    const anchor = anchorRef?.current;
    const button = anchor?.matches("button") ? anchor : anchor?.querySelector("button");
    button?.focus();
  };

  // The picker must open inside this click, so select first and close after
  const handleSelect = (onSelect: () => void) => {
    onSelect();
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent, onSelect: () => void) => {
    const items = getMenuItems();
    const index = items.indexOf(e.currentTarget as HTMLElement);

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(onSelect);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      items[(index + step + items.length) % items.length]?.focus();
    } else if (e.key === "Escape") {
      // Keep Escape from also closing the upload dialog this menu may be in. preventDefault stops
      // the browser closing the native <dialog> on its own, which React wouldn't know about.
      e.preventDefault();
      e.stopPropagation();
      close(true);
    } else if (e.key === "Tab") {
      close();
    }
  };

  return (
    <div ref={menuRef.ref} className={`fm-upload-menu ${className}`}>
      <ul role="menu" aria-orientation="vertical">
        {options.map((option) => (
          <li
            role="menuitem"
            key={option.key}
            tabIndex={-1}
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
