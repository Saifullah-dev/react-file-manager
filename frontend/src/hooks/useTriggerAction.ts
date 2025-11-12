import { useState } from "react";

export type TriggerActionType = "createFolder" | "uploadFile" | "rename" | "delete"

export interface TriggerAction {
  isActive: boolean;
  actionType?: TriggerActionType;
  show: (type: TriggerActionType) => void;
  close: () => void;
}

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
