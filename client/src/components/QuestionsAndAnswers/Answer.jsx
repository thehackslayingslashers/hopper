import React from 'react';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  var currentAnswer = answers[parsedAnswerId];
  return (
    <div className="answer-item">
      <div className="a-for-answer-and-answer-text">
        <div>A: </div>
        <div className="answer-text">{currentAnswer.body}</div>
      </div>
      <div>
        by {currentAnswer.answerer_name}, {currentAnswer.date}
      </div>
      <div className="upvote-answer-button">Helpful?</div>
      <div className="small-divider">|</div>
      <div className="report-answer-button">Report</div>
    </div>
  );
};

export default Answer;
