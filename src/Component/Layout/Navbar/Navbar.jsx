import React from "react";
import { Link } from "react-router-dom";
import Client from "./Client";

function Navbar() {
  return (
    <nav>
      <Link className="logo" to="/">
        The Logo
      </Link>
      <Client />
    </nav>
  );
}

export default Navbar;
