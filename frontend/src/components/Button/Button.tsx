import { KeyboardEvent, MouseEvent, ReactNode } from "react";
import "./Button.scss";

export interface ButtonProps {
  onClick?: (event : MouseEvent) => void;
  onKeyDown?: (event : KeyboardEvent) => void;
  type?: "primary" | "secondary" | "danger";
  padding?: string;
  children: ReactNode;
}

const Button = ({ onClick, onKeyDown, type = "primary", padding = "0.4rem 0.8rem", children } : ButtonProps) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`fm-button fm-button-${type}`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;
