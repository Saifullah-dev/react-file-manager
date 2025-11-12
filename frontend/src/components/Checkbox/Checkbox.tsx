import { ChangeEvent, MouseEvent } from "react";
import "./Checkbox.scss";

export interface CheckboxProps {
  id?: string;
  name?: string
  checked?: boolean;
  onClick?: (event : MouseEvent) => void;
  onChange?: (event : ChangeEvent) => void;
  className?: string;
  title?: string;
  disabled?: boolean;
}
const Checkbox = ({ name, id, checked, onClick, onChange, className = "", title, disabled = false } : CheckboxProps) => {
  return (
    <input
      className={`fm-checkbox ${className}`}
      type="checkbox"
      name={name}
      id={id}
      checked={checked}
      onClick={onClick}
      onChange={onChange}
      title={title}
      disabled={disabled}
    />
  );
};

export default Checkbox;
