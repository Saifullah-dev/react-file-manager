import "./ErrorTooltip.scss";

const ErrorTooltip = ({ message, xPlacement, yPlacement }) => {
  return <p className={`error-tooltip ${xPlacement} ${yPlacement}`}>{message}</p>;
};

export default ErrorTooltip;
