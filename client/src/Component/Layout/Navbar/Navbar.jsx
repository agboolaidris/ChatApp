import React, { useState, useEffect } from "react";
import Auth_nav from "./Auth_nav";
import { connect } from "react-redux";
import { CheckLogin, logout } from "../../../Action/AuthAction";

function Navbar({ CheckLogin, token, logout }) {
  console.log(token);
  useEffect(() => {
    CheckLogin();
  }, []);
  const Logout = () => {
    logout();
    localStorage.setItem("token", "");
  };

  return (
    <nav>
      <span className="logo">The LOGO</span>
      {token ? <button onClick={Logout}>Logout</button> : <Auth_nav />}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.Auth.token,
  };
};

export default connect(mapStateToProps, { CheckLogin, logout })(Navbar);
