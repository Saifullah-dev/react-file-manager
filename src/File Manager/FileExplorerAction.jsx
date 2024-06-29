// import { Modal } from "react-bootstrap"
import { MdClose } from "react-icons/md";

import { useEffect, useRef } from "react";

const FileExplorerAction = ({
  children,
  show,
  setShow,
  heading,
  dialogClassName,
  contentClassName = "",
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [show]);

  return (
    <dialog ref={modalRef} className={`fm-modal ${dialogClassName}`}>
      <div
        className="modal-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #e9ecef",
          padding: "0.50rem 1rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            margin: "0",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {heading}
        </span>
        <MdClose
          size={18}
          onClick={() => setShow(false)}
          className="close-icon"
          title="Close"
        />
      </div>
      {children}
    </dialog>
    // <Modal
    //   show={show}
    //   backdrop={true}
    //   centered
    //   contentClassName={`rounded ${contentClassName}`}
    //   dialogClassName={dialogClassName}
    // >
    //   <Modal.Header className="modal-header border-bottom pb-2 d-flex justify-content-between">
    //     <h6 className="mb-0 fw-bold text-dark">{heading}</h6>
    //     <MdClose
    //       size={25}
    //       onClick={() => setShow(false)}
    //       className="close-icon"
    //       title="Close"
    //     />
    //   </Modal.Header>
    //   <Modal.Body>{children}</Modal.Body>
    // </Modal>
  );
};

export default FileExplorerAction;
