import React from "react";
import "../style/NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Premier Dining
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Entrées</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">CockTails</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add">Add</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/delete">Delete</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;