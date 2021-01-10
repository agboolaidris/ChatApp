import React from "react";
import { Link } from "react-router-dom";
function Left_page() {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>To keep connected with us pls login with your personal info</p>
      <button>
        <Link to="/login">SIGN IN</Link>
      </button>
    </div>
  );
}

export default Left_page;
