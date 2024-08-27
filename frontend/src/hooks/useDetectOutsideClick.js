import { useEffect, useRef } from "react";

export const useDetectOutsideClick = (handleOutsideClick) => {
  const ref = useRef(null);

  const handleClick = (event) => {
    if (!ref.current?.contains(event.target)) {
      handleOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, []);

  return ref;
};
