import { NavLink, Outlet } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li className="link-item">
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </nav>
  );
};

export default Navbar;
