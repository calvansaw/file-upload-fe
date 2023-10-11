import logo from "./logo.svg";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { token } from "./services/auth";
import Upload from "./components/Upload";

const checkParams = (params = "") => {
  return params.includes("code");
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const login = () => {
      const queryParams = new URLSearchParams(location.search);
      localStorage.setItem("authCode", queryParams.get("code"));
      localStorage.setItem("loggedIn", "true");
      token().then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        console.log("res: ");
        console.log(res);
      });
    };
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (checkParams(location.search) && !isLoggedIn) {
      login();
    } else if (isLoggedIn && location.search) {
      window.history.replaceState({}, "", location.pathname);
    } else if (!isLoggedIn) {
      navigate("/login");
    }
  }, [location.search]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Upload />
    </div>
  );
};

export default App;
