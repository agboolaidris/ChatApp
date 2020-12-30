import React, { useState, useEffect } from "react";
import { login } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

function Login({ login, isAuthenticated }) {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={state.email}
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            value={state.password}
            id="password"
            onChange={handleChange}
            required
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isloading: state.Auth.isloading,
  };
};

export default connect(mapStateToProps, { login })(Login);
