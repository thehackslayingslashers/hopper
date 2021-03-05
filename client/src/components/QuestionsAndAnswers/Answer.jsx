import React from 'react';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  var currentAnswer = answers[parsedAnswerId];
  const formattedDate = new Date(currentAnswer.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="answer-item">
      <div className="a-for-answer-and-answer-text">
        <div>A: </div>
        <div className="answer-text">{currentAnswer.body}</div>
        <div className="upvote-answer-button">Helpful?</div>
        <div className="small-divider-answer">|</div>
        <div className="report-answer-button">Report</div>
      </div>
      <div className="lower-answer-container">
        <div id="user-info-and-date">
          by {currentAnswer.answerer_name}, {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default Answer;
