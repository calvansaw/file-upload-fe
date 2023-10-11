import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const handleClick = () => {
    localStorage.clear();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "32px", padding: "40px" }}>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/">Upload</Link>
          </button>
          <button>
            <Link to="/files">All Images</Link>
          </button>
          <button>
            <Link to="/public">Public Images</Link>
          </button>
        </div>
        <div style={{ display: "flex", gap: "32px", padding: "40px" }}>
          <button onClick={handleClick}>
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
