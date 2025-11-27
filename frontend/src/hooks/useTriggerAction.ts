import { useState } from "react";
import { TriggerAction, TriggerActionType } from "../types/TriggerAction";

export const useTriggerAction = () : TriggerAction => {
  const [isActive, setIsActive] = useState(false);
  const [actionType, setActionType] = useState<TriggerActionType | undefined>(undefined);

  const show = (type : TriggerActionType) => {
    setIsActive(true);
    setActionType(type);
  };

  const close = () => {
    setIsActive(false);
    setActionType(undefined);
  };

  return {
    isActive,
    actionType,
    show,
    close,
  };
};
