import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Rompecabezas
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRompecabezas"
            aria-controls="navbarRompecabezas"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarRompecabezas">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Link
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
