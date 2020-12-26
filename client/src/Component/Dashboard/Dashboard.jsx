import React, { useEffect } from "react";
import { CheckLogin } from "../../Action/AuthAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Dashboard({ CheckLogin }) {
  useEffect(() => {
    CheckLogin();
  }, []);
  const token = localStorage.getItem("token");
  return (
    <div>
      {!token ? (
        <Redirect to="/login" />
      ) : (
        <>
          <h1>Welcome Guest</h1>
          <h2>Dashboard ..........</h2>
        </>
      )}
    </div>
  );
}

export default connect(null, { CheckLogin })(Dashboard);
