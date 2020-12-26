import React, { useState } from "react";
import { login } from "../../../Action/AuthAction";
import { connect } from "react-redux";

function Login({ login }) {
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

export default connect(null, { login })(Login);
