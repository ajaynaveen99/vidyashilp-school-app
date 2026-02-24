import "./Header.css";
import logo from "../../assets/images/logo.avif";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {

  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  /* 🔥 Close dropdown on route change */
  useEffect(() => {
    setAboutOpen(false);
  }, [location]);

  return (
    <header className="header">

      <div className="topbar">
        <div className="contact">
          <span>📞 +91 9480696169</span>
          <span>✉ vidya@vidyashilphaveri.in</span>
        </div>
      </div>

      <div className="navbar">

        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <ul className="nav-links">

          <li>
            <NavLink to="/" end>HOME</NavLink>
          </li>

          {/* ABOUT DROPDOWN */}
          <li className="dropdown">

            <div className="dropdown-toggle" onClick={toggleAbout}>
              <NavLink to="/about-1">About Us</NavLink>

              {aboutOpen ? (
                <FaChevronUp className="arrow-icon" />
              ) : (
                <FaChevronDown className="arrow-icon" />
              )}
            </div>

            {aboutOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/about-school">
                    About the School
                  </NavLink>
                </li>
               <li><NavLink to="/quality-policy">Quality Policy</NavLink></li>
               <li><NavLink to="/principal-speak">Principal Speak</NavLink></li>
                <li><a href="#">Board of Directors</a></li>
              </ul>
            )}

          </li>

          <li><a href="#">Academics</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">MANDATORY DISCLOSURE</a></li>
          <li><a href="#">CONTACT</a></li>

        </ul>

      </div>
    </header>
  );
};

export default Header;