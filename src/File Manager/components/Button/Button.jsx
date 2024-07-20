import "./Button.scss";

const Button = ({ onClick, type = "primary", children }) => {
  return (
    <button onClick={onClick} className={`fm-button fm-button-${type}`}>
      {children}
    </button>
  );
};

export default Button;
