import React from "react";
import { Link } from "react-router-dom";

function Right_page() {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>To keep connected with us pls login with your personal info</p>
      <button>
        <Link to="/register">REGISTER</Link>
      </button>
    </div>
  );
}

export default Right_page;
