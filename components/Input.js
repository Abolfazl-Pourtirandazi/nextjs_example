const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  small,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />
      {small ? (
        <small id={name} className="form-text text-muted">
          {small}
        </small>
      ) : (
        false
      )}
    </div>
  );
};
export default Input;
