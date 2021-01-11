import React from "react";
import Left_page from "./Left_page";
import Right_page from "./Right_page";
import { connect } from "react-redux";

function Register({ isloading }) {
  return (
    <>
      <div className={isloading ? "loading" : "loading-none"}>
        <span></span>
      </div>
      <div className={isloading ? "loading-opacity register" : "register"}>
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

export default connect(mapStateToProps)(Register);
