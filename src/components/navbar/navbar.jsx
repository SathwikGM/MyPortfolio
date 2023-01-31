import { NavLink, Outlet } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="logo-container">
          <div className="logo">
            <img
              className="profile-img"
              src="https://media.licdn.com/dms/image/C5603AQHiA2Qk92dD0w/profile-displayphoto-shrink_100_100/0/1659107958429?e=1680739200&v=beta&t=OgU0pPKBQGIPHjiTjOcaBYLl9hz4Er2RroEo7jyeQvI"
              alt="profile"
            />
          </div>
          <span className="logo-sub">Sathwik G M</span>
        </div>
        <div className="nav-link-container">
          <ul className="nav-links">
            <li className="link-item">
              <NavLink className="link" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/skills">
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
