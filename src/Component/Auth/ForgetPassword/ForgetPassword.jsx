import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ForgetPassword() {
  return (
    <form>
      <div>
        <label>
          <FontAwesomeIcon icon={faEnvelope} />
        </label>
        <input type="email" />
      </div>
    </form>
  );
}

export default ForgetPassword;
