import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const isLoggedIn = false; // Connect to auth context later
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkStyle = "nav-link text-dark fw-medium px-3 py-2";

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm px-3 py-3 position-relative">
        <div className="container-fluid">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand fw-bold text-primary fs-3">
            Study <span className="text-dark">Hubb</span>
          </NavLink>

          {/* Hamburger */}
          <button
            className="d-md-none border-0 bg-transparent"
            type="button"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex ms-auto align-items-center gap-3">
            <NavLink to="/discover" className={navLinkStyle}>
              Find Tutors
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
              About
            </NavLink>
            {isLoggedIn ? (
              <NavLink to="/profile" className="nav-link fw-semibold text-primary px-3 py-2">
                My Profile
              </NavLink>
            ) : (
              <>
                <NavLink to="/login" className={navLinkStyle}>
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="btn btn-primary fw-semibold px-4 py-2 rounded-pill"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`mobile-menu position-fixed top-0 start-0 h-100 bg-white shadow p-4 ${menuOpen ? "slide-in" : "slide-out"
          }`}
        style={{
          width: "75%",
          maxWidth: "280px",
          zIndex: 1050,
          transition: "transform 0.3s ease-in-out",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/discover" className={navLinkStyle} onClick={toggleMenu}>
              Find Tutors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={navLinkStyle} onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <NavLink to="/profile" className={navLinkStyle} onClick={toggleMenu}>
                My Profile
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className={navLinkStyle} onClick={toggleMenu}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink
                  to=" /signup"
                  className="btn btn-primary w-100 fw-semibold"
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div >

      {/* Optional overlay to darken background */}
      {
        menuOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1040,
            }}
            onClick={toggleMenu}
          />
        )
      }
    </>
  );
};

export default Navbar;
