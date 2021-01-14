import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { forgetpassword } from "../../../Action/AuthAction";

function ForgetPassword() {
  const [state, setstate] = useState({
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    forgetpassword(state);
  };

  return (
    <div className="forgetpassword">
      <form onSubmit={handleSubmit}>
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
  );
}

export default ForgetPassword;
