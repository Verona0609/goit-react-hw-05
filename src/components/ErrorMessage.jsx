const ErrorMessage = ({ message }) => {
  return (
    <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
