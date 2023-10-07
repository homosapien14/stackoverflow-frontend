"use client";
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "@/redux/posts/posts.slice";
import LinkButton from "@/components/molecules/linkButton/linkButton.molecule";
import AnswerSection from "./answer";
import QuestionSection from "./question";
import Spinner from "@/assets/spinner";
import { getAnswers } from "@/redux/answers/answers.slice";
import Link from "next/link";
import { redirect } from "next/navigation";

const Post = ({ id }) => {
  const dispatch = useDispatch();

  const { post, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getAnswers(id));
  }, [dispatch]);

  if (error == false && !post) {
    alert("could not find a post with given id , redirecting you to homepage");
    redirect("/");
  }
  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <div id="mainbar" className="post  p-4 mx-16 mt-24 flex flex-col">
        <div className="question-header flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">{post.title}</h1>
          <div>
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </div>
        <div className="question-date text-white mt-4">
          <div className="grid-cell">
            <span className="text-white">Asked: </span>
            <time dateTime={moment(post.createdAt).fromNow(true)}>
              {moment(post.createdAt).fromNow(true)} ago
            </time>
          </div>
        </div>
        <div className="question-main mt-6">
          <QuestionSection />
          <AnswerSection post_id={id} />
        </div>
      </div>
    </>
  );
};

export default Post;
