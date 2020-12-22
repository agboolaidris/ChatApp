import React from "react";
import svg from "../../../img/form-svg.svg";
import useSignUp from "../../../CustomHook/Signup_hook";
function Sign_up() {
  const { handleChange, state } = useSignUp();
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
        <form action="">
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              required
              placeholder="enter your username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" required placeholder="enter your email" />
          </div>
          <div>
            <label htmlFor="pasword">Password</label>
            <input type="password" required placeholder="enter your password" />
          </div>
          <div>
            <label htmlFor="pasword2">Confirm Password</label>
            <input
              type="password"
              required
              placeholder="confirm your password"
            />
          </div>
          <div>
            <input type="checkbox" className="checkbox" required />
            <span>I agree with the terms and condition </span>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Sign_up;
