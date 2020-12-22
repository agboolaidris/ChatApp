import React, { useState } from "react";
import Auth_nav from "./Auth_nav";

function Navbar() {
  const [isLogIn, setisLogIn] = useState(false);
  return (
    <nav>
      <span className="logo">The LOGO</span>
      {isLogIn ? <h1>Login</h1> : <Auth_nav />}
    </nav>
  );
}

export default Navbar;
