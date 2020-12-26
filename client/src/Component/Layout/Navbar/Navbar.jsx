import React, { useState, useEffect } from "react";
import Auth_nav from "./Auth_nav";
import { connect } from "react-redux";
import { CheckLogin } from "../../../Action/AuthAction";

function Navbar({ CheckLogin, user }) {
  useEffect(() => {
    // CheckLogin();
  }, []);
  const logout = () => {
    localStorage.setItem("token", "");
  };
  const [isLogIn, setisLogIn] = useState(false);
  return (
    <nav>
      <span className="logo">The LOGO</span>
      {user ? <button onClick={logout}>Logout</button> : <Auth_nav />}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.Auth.user.userName,
  };
};

export default connect(mapStateToProps, { CheckLogin })(Navbar);
