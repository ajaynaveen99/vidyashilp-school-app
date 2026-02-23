import "./Header.css";
import logo from "../../assets/images/logo.avif";

const Header = () => {
  return (
    <header className="header">
      <div className="topbar">
        <div className="contact">
          <span>📞 +91 9480696169</span>
          <span>✉ vidya@vidyashilphaveri.in</span>
        </div>
      </div>

      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <ul className="nav-links">
          <li>HOME</li>
          <li>About Us</li>
          <li>Academics</li>
          <li>Admissions</li>
          <li>MANDATORY DISCLOSURE</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;