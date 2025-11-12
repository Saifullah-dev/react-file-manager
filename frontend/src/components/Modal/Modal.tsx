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
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [show]);

  return (
    <dialog
      ref={modalRef}
      className={`fm-modal dialog`}
      style={{ width: dialogWidth }}
      onKeyDown={handleKeyDown}
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
