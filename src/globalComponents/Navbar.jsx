import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        Dogs<span>Adoption</span>
      </h2>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/my-wish-list">
          <li>My WishList</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
