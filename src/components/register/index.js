import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import AuthForm from "@/components/organisms/loginForm";

import "./register.css";

const Register = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="auth-page">
      <div className="register-content">
        <div className="register-grid">
          <AuthForm action={"Sign up"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
