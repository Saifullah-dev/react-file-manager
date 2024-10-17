import { useEffect, useRef } from "react";

export const useKeyPress = (keys, callback) => {
  const lastKeyPressed = useRef(new Set([]));

  const handleKeyDown = (e) => {
    if (e.repeat) return; // To prevent this function from triggering on key hold e.g. Ctrl hold

    const keysSet = new Set(keys);
    lastKeyPressed.current.add(e.key);

    if (keysSet.isSubsetOf(lastKeyPressed.current)) {
      e.preventDefault();
      callback(e);
      return;
    }
  };

  const handleKeyUp = (e) => {
    lastKeyPressed.current.delete(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys, callback]);
};
