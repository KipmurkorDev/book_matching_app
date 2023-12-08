import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#00b7eb" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ marginLeft: "40%" }}
            exact
          ></NavLink>
        </div>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <div className="navbar-nav mx-auto  mb-2 mb-lg-0 d-flex justify-content-start">
            <NavLink
              className="nav-link fs-1.1"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link fs-1.1"
              to="/discover"
              activeClassName="active"
            >
              Discover
            </NavLink>
            <NavLink
              className="nav-link fs-1.1"
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </div>

          <div className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <NavLink
              className="nav-link fs-1.1"
              to="/login"
              activeClassName="active"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
