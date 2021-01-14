import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { forgetpassword } from "../../../Action/AuthAction";
import { connect } from "react-redux";

function ForgetPassword({ forgetpassword, isLoading, Error, Success }) {
  console.log(Error);
  console.log(Success);
  const [state, setstate] = useState({
    email: "",
  });

  const [Err, setErr] = useState("");

  useEffect(() => {
    if (Error.id === "FORGET PASSWORD FAIL") {
      setErr(Error.msg);
    }
  }, [Error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    forgetpassword(state);
  };

  return (
    <>
      <div className={isLoading ? "loading" : "loading-none"}>
        <span></span>
      </div>
      <div
        className={
          isLoading ? "forgetpassword loading-opacity " : "forgetpassword"
        }
      >
        <form onSubmit={handleSubmit}>
          <span className="error">{Err && Err}</span>
          <div>
            <label>
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              type="email"
              placeholder="enter your email adress"
              value={state.email}
              onChange={(e) => setstate({ ...state, email: e.target.value })}
            />
          </div>
          <button>Submit</button>

          <span>
            Login here <Link to="login">Click</Link>
          </span>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    Error: state.Error,
    isLoading: state.Auth.isLoading,
    Success: state.Success,
  };
};

export default connect(mapStateToProps, { forgetpassword })(ForgetPassword);
