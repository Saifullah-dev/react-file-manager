import "./Checkbox.scss";

const Checkbox = ({ name, id, checked, onClick, onChange, className = "" }) => {
  return (
    <input
      className={`fm-checkbox ${className}`}
      type="checkbox"
      name={name}
      id={id}
      checked={checked}
      onClick={onClick}
      onChange={onChange}
    />
  );
};

export default Checkbox;
