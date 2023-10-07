"use client";
import Register from "@/components/register";
import Header from "@/components/organisms/header";
import store from "@/redux/store";
import { Provider } from "react-redux";

const RegisterPage = () => {
  return (
    <Provider store={store}>
      <Header />
      <Register />
    </Provider>
  );
};

export default RegisterPage;
