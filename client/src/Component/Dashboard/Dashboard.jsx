import React, { useEffect } from "react";
import { CheckLogin } from "../../Action/AuthAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Dashboard({ CheckLogin, token }) {
  useEffect(() => {
    CheckLogin();
  }, []);

  const history = useHistory();
  useEffect(() => {
    console.log(token);
    if (!token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div>
      <>
        <h1>Welcome Guest</h1>
        <h2>Dashboard ..........</h2>
      </>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.Auth.token,
  };
};

export default connect(mapStateToProps, { CheckLogin })(Dashboard);
