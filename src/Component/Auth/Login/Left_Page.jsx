import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./LoginHook";
import { Login } from "../../../Action/AuthAction";
import { clearError } from "../../../Action/ErrorAction";
import { connect } from "react-redux";
import {
  faGooglePlusSquare,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Left_Page({ clearError, Login, error, isAuthenticated }) {
  const { state, handleChange, handleSubmit, Error } = useLogin(
    Login,
    error,
    clearError,
    isAuthenticated
  );
  return (
    <div className="div">
      <h1>SIGN IN</h1>
      <div className="icon">
        <a>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faGooglePlusSquare} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </div>
      <p> or use your email for registration</p>
      <form onSubmit={handleSubmit}>
        <span className="error">{Error && Error}</span>
        <div className="input">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={state.email}
            id="email"
          />
        </div>
        <div className="input">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input
            type="password"
            placeholder=" Password"
            onChange={handleChange}
            value={state.password}
            id="password"
          />
        </div>

        <button>LOG IN</button>
        <div className="register-link">
          <span>
            don't have an account <Link to="/register">Register</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.Error,
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { Login, clearError })(Left_Page);
