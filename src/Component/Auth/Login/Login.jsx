import React from "react";
import Left_page from "./Left_Page";
import Right_page from "./Right_page";
import { connect } from "react-redux";

function Login({ isloading }) {
  return (
    <>
      <div className={isloading ? "loading" : "loading-none"}>
        <span></span>
      </div>
      <div className={isloading ? "login loading-opacity" : "login"}>
        <div className="col-1">
          <Left_page />
        </div>
        <div className="col-2">
          <Right_page />
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isloading: state.Auth.isLoading,
  };
};

export default connect(mapStateToProps)(Login);
