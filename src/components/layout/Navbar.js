import React from "react";
// import ".././node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-warning">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            CRUD
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/user/add">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <Link className="ml-3 btn btn-outline-primary" to="/user/add">Add</Link> */}
      </nav>
    </div>
  );
}

export default Navbar;
