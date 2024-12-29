import "./Checkbox.scss";

const Checkbox = ({ name, id, checked, onClick, onChange, className = "", title, disabled = false }) => {
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
