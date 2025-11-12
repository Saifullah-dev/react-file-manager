import { useEffect, useMemo, useRef } from "react";

const normalizeKey = (key : string) => {
  return key.toLowerCase();
};

export const useKeyPress = (keys : string[], callback: (event : KeyboardEvent) => void, disable = false) => {
  const lastKeyPressed = useRef<Set<string>>(new Set([]));
  const keysSet = useMemo(() => {
    return new Set(keys.map((key) => normalizeKey(key)));
  }, [keys]);

  const handleKeyDown = (e : KeyboardEvent) => {
    if (e.repeat) return; // To prevent this function from triggering on key hold e.g. Ctrl hold

    lastKeyPressed.current.add(normalizeKey(e.key));

    if (keysSet.isSubsetOf(lastKeyPressed.current) && !disable) {
      e.preventDefault();
      callback(e);
      return;
    }
  };

  const handleKeyUp = (e : KeyboardEvent) => {
    lastKeyPressed.current.delete(normalizeKey(e.key));
  };

  const handleBlur = () => {
    lastKeyPressed.current.clear();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [keysSet, callback, disable]);
};
