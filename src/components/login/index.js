"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import "@/components/register/register.css";
import AuthForm from "@/components/organisms/loginForm";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      redirect("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="auth-page">
        <div className="register-content">
          <div className="register-grid">
            <AuthForm action="Log in" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
