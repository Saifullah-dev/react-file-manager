import { ChangeEvent, KeyboardEvent, MouseEvent, RefObject } from "react";
import "./NameInput.scss";

export interface NameInputProps {
  nameInputRef?: RefObject<HTMLTextAreaElement | null>;
  id?: string;
  maxLength?: number;
  value?: string;
  onChange?: (event : ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event : KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick?: (event : MouseEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const NameInput = ({ nameInputRef, id, maxLength, value, onChange, onKeyDown, onClick, rows } : NameInputProps) => {
  return (
    <textarea
      ref={nameInputRef}
      id={id}
      className="rename-file"
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      rows={rows}
    />
  );
};

export default NameInput;
