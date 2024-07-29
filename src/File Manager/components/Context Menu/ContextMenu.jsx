import { useState } from "react";

const ContextMenu = ({
  children,
  triggerRef,
  content,
  visible,
  setVisible,
}) => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setVisible(true);
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = 112;
    const rootH = 82;
    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      setLeft(`${clickX + 5}px`);
    } else if (left) {
      setLeft(`${clickX - rootW - 5}px`);
    }

    if (top) {
      setTop(`${clickY + 5}px`);
    } else if (bottom) {
      setTop(`${clickY - rootH - 5}px`);
    }
  };

  return (
    <div onContextMenu={handleContextMenu} onClick={(e) => setVisible(false)}>
      {children}
      {visible && (
        <div
          ref={triggerRef}
          style={{
            position: "absolute",
            left: left,
            top: top,
            backgroundColor: "white",
            border: "1px solid #c6c6c6",
            borderRadius: "5px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
