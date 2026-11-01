export type TriggerActionType = "createFolder" | "uploadFile" | "rename" | "delete" | "previewFile"

export interface TriggerAction {
  isActive: boolean;
  actionType?: TriggerActionType;
  show: (type: TriggerActionType) => void;
  close: () => void;
}