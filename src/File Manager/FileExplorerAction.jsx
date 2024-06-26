// import { Modal } from "react-bootstrap"
// import { MdClose } from "react-icons/md"

const FileExplorerAction = ({
  children,
  show,
  setShow,
  heading,
  dialogClassName,
  contentClassName = "",
}) => {
  return (
    <></>
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
