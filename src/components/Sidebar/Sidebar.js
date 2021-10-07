import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* partial:partials/_sidebar.html */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Dashboard"
            >
              <i className="mdi mdi-home menu-icon" />
              <span className="menu-title">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Appointment"
            >
              <i className="mdi mdi-file-document menu-icon" />
              <span className="menu-title">Appointment</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/6103f172ef6ebe0359c9e411"
            >
              <i className="mdi mdi-hotel menu-icon" />
              <span className="menu-title">Patient</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Expense"
            >
              <i className="mdi mdi-cash-multiple menu-icon" />
              <span className="menu-title">Expenses</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Commission"
            >
              <i className="mdi mdi-cash menu-icon" />
              <span className="menu-title">Commission</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Account"
            >
              <i class="far fa-user"></i>
              <span className="menu-title">Account</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Productlist"
            >
              <i className="mdi mdi-package menu-icon" />
              <span className="menu-title">Product</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Services"
            >
              <i className="mdi mdi-settings-box menu-icon" />
              <span className="menu-title">Services</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Prescription"
            >
              <i className="mdi mdi-file-document-box menu-icon" />
              <span className="menu-title">Prescription</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Laboratory"
            >
              <i className="mdi mdi-hospital-building menu-icon" />
              <span className="menu-title">Laboratory</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/Designation"
            >
              <i class="far fa-address-card"></i>
              <span className="menu-title">Designation</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/Login">
              <i className="mdi mdi-power menu-icon" />
              <span className="menu-title">Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* partial */}
    </div>
  );
};

export default Sidebar;
