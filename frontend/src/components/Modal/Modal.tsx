import { MdClose } from "react-icons/md";
import { KeyboardEvent, ReactNode, useEffect, useRef } from "react";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./Modal.scss";

export interface ModalProps {
  children: ReactNode;
  show: boolean;
  setShow: (show : boolean) => void;
  heading: string;
  dialogWidth?: string;
  closeButton?: boolean;
}

const Modal = ({
  children,
  show,
  setShow,
  heading,
  dialogWidth = "25%",
  closeButton = true,
} : ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const t = useTranslation();

  const handleKeyDown = (e : KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      const dialog = modalRef.current;
      dialog?.showModal();
      // showModal() focuses the first focusable element. When that's an iframe (the text and PDF
      // previews), key presses go to the iframe's page and Escape never reaches this dialog.
      if (document.activeElement instanceof HTMLIFrameElement && dialog?.contains(document.activeElement)) {
        dialog.focus();
      }
    } else {
      modalRef.current?.close();
    }
  }, [show]);

  return (
    <dialog
      ref={modalRef}
      className={`fm-modal dialog`}
      style={{ width: dialogWidth }}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      // The browser can close the dialog by itself (e.g. Escape). Keep `show` in sync so it can open again.
      onClose={() => show && setShow(false)}
    >
      <div className="fm-modal-header">
        <span className="fm-modal-heading">{heading}</span>
        {closeButton && (
          <MdClose
            size={18}
            onClick={() => setShow(false)}
            className="close-icon"
            title={t("close")}
          />
        )}
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
