import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo → Navigate to Home */}
      <NavLink to="/" className="logo">
        Zentrixa Technologies
      </NavLink>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
