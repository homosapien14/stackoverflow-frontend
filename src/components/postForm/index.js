"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
// import Spinner from "../../components/molecules/Spinner/Spinner.component";
import AskWidget from "./askWidget";
import AskForm from "./askForm";

import "./postform.css";
import { loadUser } from "@/redux/auth/auth.slice";
import Spinner from "../molecules/spinner";

const PostForm = () => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  if (!localStorage?.token) {
    redirect("/login");
  }

  return loading === true ? (
    <Spinner />
  ) : (
    <>
      <div className="post-form-container mb-52">
        <div className="post-form-content">
          <div className="post-form-header">
            <div className="post-form-headline text-white">
              Ask a public question
            </div>
          </div>
          <div className="post-form-section">
            <div className="postform">
              <AskForm user_id={user.id} />
            </div>
            <aside>
              <div className="right-panel">
                <AskWidget />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
