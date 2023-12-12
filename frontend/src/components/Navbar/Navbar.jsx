import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_main">
      <div>Logo</div>
      <div>
        <Link to={"/signup"}>Signup</Link>{" "}
      </div>
    </div>
  );
};

export default Navbar;
