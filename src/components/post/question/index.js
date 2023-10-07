import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import VoteCell from "./vote";
import PostCell from "./post";

const QuestionSection = () => {
  const post = useSelector((state) => state.posts.post);
  const { numberOfAnswers } = post || {};

  return (
    <div className="grid grid-cols-[max-content,1fr] text-black">
      <VoteCell answerCount={numberOfAnswers} commentCount={0} />
      <PostCell post={post} />
    </div>
  );
};

export default QuestionSection;
