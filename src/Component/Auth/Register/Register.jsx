import React from "react";
import Left_page from "./Left_page";
import Right_page from "./Right_page";

function Register() {
  return (
    <div className="register">
      <div className="col-1">
        <Left_page />
      </div>
      <div className="col-2">
        <Right_page />
      </div>
    </div>
  );
}

export default Register;
