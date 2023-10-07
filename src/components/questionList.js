import React from 'react';

// dummyData.js
const questions = [
  {
    id: 1,
    title: 'How to use Next.js with Tailwind CSS?',
    votes: 5,
    answers: 3,
    views: 100,
  },
  {
    id: 2,
    title: 'How to use Next.js with Tailwind CSS?',
    votes: 5,
    answers: 3,
    views: 100,
  },
  {
    id: 3,
    title: 'How to use Next.js with Tailwind CSS?',
    votes: 5,
    answers: 3,
    views: 100,
  },
  {
    id: 4,
    title: 'How to use Next.js with Tailwind CSS?',
    votes: 5,
    answers: 3,
    views: 100,
  },
  // Add more dummy questions
];

const QuestionList = () => {
  return (
    <div className="container mx-auto mt-6">
      {questions.map((question) => (
        <div key={question.id} className="bg-white p-4 mb-4 shadow">
          <h2 className="text-lg font-semibold">{question.title}</h2>
          <div className="flex justify-between mt-2">
            <div className="text-gray-600">
              {question.votes} votes | {question.answers} answers | {question.views} views
            </div>
            <div className="text-blue-500">Posted by: John Doe</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
