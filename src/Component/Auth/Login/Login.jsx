import React from "react";
import Left_page from "./Left_Page";
import Right_page from "./Right_page";

function Login() {
  return (
    <div className="login">
      <div className="col-1">
        <Left_page />
      </div>
      <div className="col-2">
        <Right_page />
      </div>
    </div>
  );
}

export default Login;
