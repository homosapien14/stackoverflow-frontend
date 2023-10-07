"use client";
import Login from "@/components/login";
import Header from "@/components/organisms/header";
import store from "@/redux/store";
import { Provider } from "react-redux";

const LoginPage = () => {
  return (
    <Provider store={store}>
      <Header />
      <Login />
    </Provider>
  );
};

export default LoginPage;