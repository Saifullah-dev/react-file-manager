export type TriggerActionType = "createFolder" | "uploadFile" | "rename" | "delete"

export interface TriggerAction {
  isActive: boolean;
  actionType?: TriggerActionType;
  show: (type: TriggerActionType) => void;
  close: () => void;
}