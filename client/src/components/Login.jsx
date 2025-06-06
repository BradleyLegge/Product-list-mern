import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container padding spacing">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login btn">Log-in</button>
      </form>
      <div className="need-account">
        <p>Don't have an account?</p>
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
