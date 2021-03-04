import React from 'react';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  return (
    <div className="answer-item">
      <div className="a-for-answer-and-answer-text">
        <div>A: </div>
        <div className="answer-text">{answers[parsedAnswerId].body}</div>
      </div>
      <div>username and date</div>
      <div className="upvote-answer-button">Helpful?</div>
      <div className="small-divider">|</div>
      <div className="report-answer-button">Report</div>
    </div>
  );
};

export default Answer;
