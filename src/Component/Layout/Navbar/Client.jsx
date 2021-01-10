import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Logout } from "../../../Action/AuthAction";

function Client({ Logout }) {
  const handleClick = () => {
    Logout();
  };
  return (
    <ul>
      <li id="login" onClick={handleClick}>
        Logout
      </li>
    </ul>
  );
}

export default connect(null, { Logout })(Client);
