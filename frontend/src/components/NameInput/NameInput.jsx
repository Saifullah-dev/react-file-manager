import "./NameInput.scss";

const NameInput = ({ nameInputRef, id, maxLength, value, onChange, onKeyDown, onClick, rows }) => {
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
