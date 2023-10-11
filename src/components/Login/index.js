import { AUTHORIZE_URL } from "../../constants";

const Login = () => {
  const handleClick = () => {
    window.location.assign(AUTHORIZE_URL);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Click login button to login or signup</h1>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
