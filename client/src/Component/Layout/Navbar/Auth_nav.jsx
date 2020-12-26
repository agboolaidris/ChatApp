import React from "react";
import { Link } from "react-router-dom";

function Auth_nav() {
  return (
    <ul className="auth-nav">
      <li className="signup">
        <Link to="/register">SignUp</Link>
      </li>
      <li className="signin">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}

export default Auth_nav;
