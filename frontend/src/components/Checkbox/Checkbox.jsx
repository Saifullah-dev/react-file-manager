import "./Checkbox.scss";

const Checkbox = ({ name, id, checked, onClick, onChange, className = "", title }) => {
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
    />
  );
};

export default Checkbox;
