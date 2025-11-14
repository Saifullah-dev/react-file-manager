import { RefObject, useEffect, useRef, useState } from "react";

export const useDetectOutsideClick = <T extends HTMLElement = HTMLElement> (
  handleOutsideClick : (event : MouseEvent, ref: RefObject<T | null>) => void) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<T>(null);

  const handleClick = (event : MouseEvent) => {
    if (ref.current && event.target instanceof Node && !ref.current?.contains(event.target)) {
      setIsClicked(true);
      handleOutsideClick(event, ref);
    } else {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, []);

  return { ref, isClicked, setIsClicked };
};
