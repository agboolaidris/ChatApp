import React, { useEffect } from "react";
import { CheckLogin } from "../../Action/AuthAction";
import { connect } from "react-redux";

function Dashboard({ CheckLogin }) {
  useEffect(() => {
    CheckLogin();
  }, []);
  return (
    <div>
      <h1>Welcome Guest</h1>
      <h2>Dashboard ..........</h2>
    </div>
  );
}

export default connect(null, { CheckLogin })(Dashboard);
