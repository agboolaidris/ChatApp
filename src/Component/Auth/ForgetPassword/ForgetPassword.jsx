import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      </form>
    </div>
  );
}

export default ForgetPassword;
