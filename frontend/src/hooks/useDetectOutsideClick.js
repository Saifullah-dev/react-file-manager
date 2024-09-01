import { useEffect, useRef, useState } from "react";

export const useDetectOutsideClick = (handleOutsideClick = () => {}) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    if (!ref.current?.contains(event.target)) {
      setIsClicked(true);
      handleOutsideClick();
    } else {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, []);

  return { ref, isClicked };
};
