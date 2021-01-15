import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { resetpassword } from "../../../Action/AuthAction";
import { connect } from "react-redux";
import { clearError } from "../../../Action/ErrorAction";
import { clearSuccess } from "../../../Action/SuccessfulAction";

function RestPassword({
  resetpassword,
  isLoading,
  Error,
  Success,
  clearError,
  clearSuccess,
}) {
  const [state, setstate] = useState({
    password: "",
    password2: "",
  });

  const [Err, setErr] = useState("");
  const [success, setsuccess] = useState("");
  const [times, settimes] = useState(false);

  useEffect(() => {
    if (Error.id === "PASSWORD RESET ERROR") {
      setErr(Error.msg);
      settimes(true);
    } else {
      setErr("");
      settimes(false);
    }
  }, [Error]);

  useEffect(() => {
    if (Success.id === "PASSWORD RESET SUCCESS") {
      setsuccess(Success.msg);
      settimes(true);
    } else {
      settimes(false);
      setsuccess("");
    }
  }, [Success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    resetpassword(state);
  };
  const handleClick = () => {
    clearError();
    clearSuccess();
  };

  return (
    <>
      <div className={isLoading ? "loading" : "loading-none"}>
        <span></span>
      </div>
      <div
        className={
          isLoading ? "resetpassword loading-opacity " : "resetpassword"
        }
      >
        <form onSubmit={handleSubmit}>
          <span className={Err ? "error" : success && "success"}>
            {Err ? Err : success && success}{" "}
            <span
              onClick={handleClick}
              className={times ? "times" : "times-none"}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </span>
          <div className="text">
            <h2>Reset Password</h2>
            <p>
              Pls! enter the email address you register your account with, we
              will send the reset password confirmation to this email
            </p>
          </div>
          <div className="div">
            <label>
              <FontAwesomeIcon icon={faKey} />
            </label>
            <input
              type="password"
              placeholder="enter your new password"
              value={state.password}
              onChange={(e) => setstate({ ...state, password: e.target.value })}
            />
          </div>
          <div className="div">
            <label>
              <FontAwesomeIcon icon={faKey} />
            </label>
            <input
              type="password"
              placeholder="confirm your new password"
              value={state.passwords}
              onChange={(e) =>
                setstate({ ...state, password2: e.target.value })
              }
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

export default connect(mapStateToProps, {
  resetpassword,
  clearSuccess,
  clearError,
})(RestPassword);
