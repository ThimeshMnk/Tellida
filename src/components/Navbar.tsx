import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Tellida
        </NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Careers
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/case-study"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Case Study
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
