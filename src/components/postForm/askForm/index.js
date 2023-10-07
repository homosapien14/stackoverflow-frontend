"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "@/redux/posts/posts.slice";
import MarkdownEditor from "@/components/organisms/markdowneditor";

import "./askform.css";
import { redirect } from "next/navigation";

const AskForm = ({ user_id }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  if (localStorage?.post) {
    redirect(`/questions/${localStorage.post}`);
  }
  const { title, body } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body, user_id }));
  };

  const updateConvertedContent = (htmlConvertedContent) => {
    setFormData({ ...formData, body: htmlConvertedContent });
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="question-form  ">
          <div className="question-layout">
            <div className="title-grid">
              <label className=" text-white">
                Title
                <p className="title-desc ">
                  Be specific and imagine you’re asking a question to another
                  person
                </p>
              </label>
              <input
                className="title-input s-input"
                type="text"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
                id="title"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                required
              />
            </div>
            <div className="body-grid">
              <label className=" text-white">
                Body
                <p className="body-desc ">
                  Include all the information someone would need to answer your
                  question
                </p>
              </label>
              <div className="s-textarea rich-text-editor-container">
                <MarkdownEditor onChange={updateConvertedContent} />
              </div>
            </div>
          </div>
        </div>
        <div className="post-button ">
          <button className="" id="submit-button" name="submit-button">
            Post your question
          </button>
        </div>
      </form>
    </>
  );
};

export default AskForm;
