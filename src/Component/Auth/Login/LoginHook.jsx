import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useLogin = (Login, error, clearError, isAuthenticated) => {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const [Error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
    clearError();
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error.id === "LOGIN FAIL") {
      setError(error.msg);
    } else {
      setError("");
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(state);
  };

  return { state, handleChange, handleSubmit, Error };
};

export default useLogin;
