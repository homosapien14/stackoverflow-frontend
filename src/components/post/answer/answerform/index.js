"use client";
import React, { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "@/redux/answers/answers.slice";
import { loadUser } from "@/redux/auth/auth.slice";

import LinkButton from "@/components/molecules/linkButton/linkButton.molecule";
import MarkdownEditor from "@/components/organisms/markdowneditor";

import "./answerform.css";

const AnswerForm = ({ post_id }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.posts.post);

  const [formData, setFormData] = useState({
    text: "",
  });

  const markdownEditorRef = useRef(null);

  const { text } = formData;
  // console.log(post_id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addAnswer({ post_id, formData }));
    setFormData({
      text: "",
    });
  };

  const updateConvertedContent = (htmlConvertedContent) => {
    setFormData({ ...formData, text: htmlConvertedContent });
  };

  return (
    <>
      {!auth.loading && auth.isAuthenticated ? (
        <>
          <form
            className="answer-form mt-10 mb-16 border-1 border-white rounded"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="answer-grid">
              <label className=" fc-black-800">Your Answer</label>
              <div className="s-textarea rich-text-editor-container">
                <MarkdownEditor onChange={updateConvertedContent} />
              </div>
              <button className="bg-blue-800 hover:bg-blue-600 rounded p-2 text-white">
                Post Your Answer
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center mt-8">
          <LinkButton
            text={"You need to login to add an answer"}
            link={"/login"}
            type={"s-btn__outlined"}
            marginTop={"12px"}
          />
        </div>
      )}
    </>
  );
};

export default AnswerForm;
