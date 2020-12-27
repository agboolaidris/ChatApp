import React, { useEffect } from "react";
//import { CheckLogin } from "../../Action/AuthAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard({ CheckLogin, auth }) {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <h2>Dashboard ..........</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.Auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
