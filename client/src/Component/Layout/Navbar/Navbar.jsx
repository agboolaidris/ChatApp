import React, { useState, useEffect } from "react";
import Auth_nav from "./Auth_nav";
import { connect } from "react-redux";

function Navbar({ CheckLogin, token, logout }) {
  useEffect(() => {
    //  CheckLogin();
  }, []);
  const Logout = () => {};

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

export default connect(mapStateToProps, {})(Navbar);
