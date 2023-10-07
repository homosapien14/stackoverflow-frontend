"use client";
import PostForm from "@/components/postForm";
import store from "@/redux/store";
import { Provider } from "react-redux";

const Question = () => {
  return (
    <Provider store={store}>
      <PostForm />
    </Provider>
  );
};

export default Question;
