const Button = ({ label, type = "primary", onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`btn btn-${type}`}>
        {label}
      </button>
    </>
  );
};

export default Button;
