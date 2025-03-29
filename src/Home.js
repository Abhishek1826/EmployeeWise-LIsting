import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem("username"));

  useEffect(() => {
    // Re-check login state whenever the route changes
    setIsLoggedIn(!!sessionStorage.getItem("username"));
  }, [location.pathname]);  

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {/* ✅ Bootstrap Styled Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(90deg, #1e3c72, #2a5298)" }}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Employee Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/dashboard">Dashboard</Link>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white fw-semibold" to="/register">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white fw-semibold" to="/login">Login</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-danger btn-sm fw-semibold" onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Welcome Section (Only on Home Page & Hidden After Login) */}
      {location.pathname === "/" && !isLoggedIn && (
        <div className="container text-center mt-5">
          <h1 className="display-4 fw-bold text-primary">Welcome to Employee Lists</h1>
          <p className="lead text-secondary">
            Manage and track your employees efficiently with our system.
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
