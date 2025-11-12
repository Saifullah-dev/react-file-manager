import "./ErrorTooltip.scss";

export type ErrorTooltipXPlacement = "left" | "right";
export type ErrorTooltipYPlacement = "top" | "bottom";

export interface ErrorTooltipProps {
  message?: string;
  xPlacement: ErrorTooltipXPlacement;
  yPlacement: ErrorTooltipYPlacement;
}

const ErrorTooltip = ({ message, xPlacement, yPlacement } : ErrorTooltipProps) => {
  return <p className={`error-tooltip ${xPlacement} ${yPlacement}`}>{message}</p>;
};

export default ErrorTooltip;
