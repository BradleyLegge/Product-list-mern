import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Nav />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
