"use client";
import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from "@/redux/answers/answers.slice";

import AnswerItem from "./answeritem";
import AnswerForm from "./answerform";
import ButtonGroup from "@/components/molecules/buttonGroup/buttonGroup.molecule";

import "./answer.css";
import Spinner from "@/assets/spinner";

const AnswerSection = ({ post_id }) => {
  const { answers, loading } = useSelector((state) => state.answers);

  console.log("hello->>", answers);
  const [sortType, setSortType] = useState("Newest");

  return (
    <>
      <div className="answer">
        <div className="answer-header fc-black-800">
          <div className=" flex justify-between ">
            <div className="ml-28">
              <h2>Answers</h2>
            </div>
            <div className="-mr-32">
              <ButtonGroup
                buttons={["Newest", "Oldest"]}
                selected={sortType}
                numberOfGrid={4}
                setSelected={setSortType}
              />
            </div>
          </div>
        </div>
        {loading === null ? (
          <Spinner />
        ) : answers.length != 0 ? (
          answers.map((answerItem, index) => (
            <div key={index} className="answers">
              <AnswerItem answer={answerItem} />
            </div>
          ))
        ) : (
          <h1 className="text-center text-lg text-white">No Answer found</h1>
        )}
        <div className="add-answer">
          <AnswerForm post_id={post_id} />
        </div>
      </div>
    </>
  );
};

export default AnswerSection;
