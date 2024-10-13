import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/" style={{ paddingRight: "10px" }}>
        Home
      </NavLink>
      <NavLink to="/courses" style={{ paddingRight: "10px" }}>
        Courses
      </NavLink>
      <NavLink to="/about" style={{ paddingRight: "10px" }}>
        About Us
      </NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
}

export default NavBar;
