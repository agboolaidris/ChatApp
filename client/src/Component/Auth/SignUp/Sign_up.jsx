import React, { useEffect, useState } from "react";
import svg from "../../../img/form-svg.svg";
import useSignUp from "../../../CustomHook/Signup_hook";
import { Link, useHistory } from "react-router-dom";
import { Register } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import Validation from "./Val_SignUp";
import { clearError } from "../../../Action/ErrorAction";

function Sign_up({ Register, Error, clearError, isAuthenticated }) {
  const { handleChange, state, handleSubmit, error } = useSignUp(
    Register,
    Validation,
    clearError,
    isAuthenticated
  );
  const [serverError, setserverError] = useState("");

  useEffect(() => {
    if (Error.id === "RESGISTRATION FAIL") {
      setserverError(Error.mssg.mssg);
    } else {
      setserverError("");
    }
  }, [Error]);

  return (
    <div className="signup-wrapper">
      <div className="img-wrapper">
        <div className="img">
          <img src={svg} alt="" />
        </div>
      </div>
      <div className="form-wrapper">
        <h2>
          Get started with us today! create an Account by filling out the form
          below.
        </h2>

        <div className="social-auth">
          <button className="facebook">Facebook</button>
          <button className="twitter">Twitter</button>
        </div>

        <form onSubmit={handleSubmit}>
          <span className="span">
            {error.mssg ? error.mssg : serverError && serverError}
          </span>
          <div>
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              required
              placeholder="enter your username"
              value={state.userName}
              id="userName"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              placeholder="enter your email"
              id="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="pasword">Password</label>
            <input
              type="password"
              required
              placeholder="enter your password"
              value={state.password}
              id="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="pasword2">Confirm Password</label>
            <input
              type="password"
              required
              placeholder="confirm your password"
              id="password2"
              value={state.password2}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="checkbox" className="checkbox" required />
            <span>I agree with the terms and condition </span>
          </div>
          <button>Submit</button>
        </form>

        <div className="forget-password">
          <p>
            Already have an account <Link to="/login">SignIn</Link>
          </p>
          <p>
            <Link to="/">forget Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Error: state.Error,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { Register, clearError })(Sign_up);
