import React, { useState, useEffect } from "react";
import Auth_nav from "./Auth_nav";
import { connect } from "react-redux";
import { logout } from "../../../Action/AuthAction";

function Navbar({ auth, logout }) {
  const Logout = () => {
    logout();
  };
  const { isAuthenticated, user } = auth;
  console.log(isAuthenticated);

  return (
    <nav>
      <span className="logo">The LOGO</span>
      {isAuthenticated ? (
        <>
          <button onClick={Logout}>Logout</button>
          <span>{user.userName && user.userName}</span>
        </>
      ) : (
        <Auth_nav />
      )}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.Auth,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
