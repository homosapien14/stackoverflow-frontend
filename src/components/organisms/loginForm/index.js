"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "@/redux/auth/auth.slice";
import LogoGlyphMd from "@/assets/LogoGlyphMd";
import Link from "next/link";
import "./loginForm.css";

const AuthForm = ({ action }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "Sign up") {
      console.log("yes");
      dispatch(register({ username, password }));
    } else {
      dispatch(login({ username, password }));
    }
  };

  return (
    <div className=" form-container mx-auto bg-gray-100  ">
      <div className="text-center ">
        <LogoGlyphMd />
      </div>
      <div className="w-full px-4 py-8 rounded shadow-lg">
        <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label className="block text-white">Username</label>
            <input
              className="form-input w-full p-2 rounded-md"
              type="text"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
              id="username"
              required
            />
          </div>
          <div>
            <label className="block text-white">Password</label>
            <input
              className="form-input w-full p-2 rounded-md "
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              id="password"
              required
            />
          </div>
          <div className=" text-center bg-blue-700 w-1/3 mx-auto rounded-md p-2 text-center text-white">
            <button className="" id="submit-button" name="submit-button">
              {action}
            </button>
          </div>
        </form>
      </div>
      <div className="mt-6 text-gray-500 text-center">
        {action === "Sign up" ? (
          <>
            <span>Already have an account? </span>
            <Link className="text-blue-600" href="/login" name="login">
              Log in
            </Link>
          </>
        ) : (
          <>
            <span>Don't have an account?</span>

            <Link className="text-blue-600" href="/register" name="register">
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
