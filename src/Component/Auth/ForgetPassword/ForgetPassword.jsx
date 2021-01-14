import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="forgetpassword">
      <form>
        <div>
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input type="email" placeholder="enter your email adress" />
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
