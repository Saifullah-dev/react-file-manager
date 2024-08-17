import "./Button.scss";

const Button = ({ onClick, type = "primary", padding = "0.4rem 0.8rem", children }) => {
  return (
    <button
      onClick={onClick}
      className={`fm-button fm-button-${type}`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default Button;
