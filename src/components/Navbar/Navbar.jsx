 import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div
        className="navbar-logo"
        onClick={() => navigate("/home")}
      >
        <div className="logo-icon">B</div>
        <span>BlogVerse</span>
      </div>

      <div className="navbar-links">

        <button onClick={() => navigate("/home")}>
          Home
        </button>

        <button onClick={() => navigate("/login")}>
          Blogs
        </button>

        <button onClick={() => navigate("/login")}>
          Create Post
        </button>

        <button onClick={() => navigate("/login")}>
          Profile
        </button>

      </div>

      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

    </nav>
  );
}

export default Navbar;