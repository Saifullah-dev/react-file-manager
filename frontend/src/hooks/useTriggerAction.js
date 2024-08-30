import { useState } from "react";

export const useTriggerAction = () => {
  const [isActive, setIsActive] = useState(false);
  const [actionType, setActionType] = useState(null);

  const show = (type) => {
    setIsActive(true);
    setActionType(type);
  };

  const close = () => {
    setIsActive(false);
    setActionType(null);
  };

  return {
    isActive,
    actionType,
    show,
    close,
  };
};
