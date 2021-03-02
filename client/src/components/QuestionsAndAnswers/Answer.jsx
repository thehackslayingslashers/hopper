import React from 'react';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  return (
    <div className="a-for-answer-and-answer-text">
      <div>A: </div>
      <div className="answer-text">{answers[parsedAnswerId].body}</div>
    </div>
  );
};

export default Answer;
