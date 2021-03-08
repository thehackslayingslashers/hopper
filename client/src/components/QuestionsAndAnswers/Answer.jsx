import React from 'react';
import axios from 'axios';
import AnswerPhotos from './AnswerPhotos.jsx';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  var currentAnswer = answers[parsedAnswerId];
  const formattedDate = new Date(currentAnswer.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const handleAnswerUpvote = (e) => {
    e.preventDefault();
    axios
      .put(`/qa/answers/${answerId}/helpful`)
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };

  const handleReportAnswer = (e) => {
    e.preventDefault();
    axios
      .put(`/qa/answers/${answerId}/report`)
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };
  return (
    <div className="answer-item">
      <div className="a-for-answer-and-answer-text">
        <div>A: </div>
        <div className="answer-text">{currentAnswer.body}</div>
        <div className="upvote-answer-button" onClick={handleAnswerUpvote}>
          Helpful?
        </div>
        <div className="small-divider-answer">|</div>
        <div className="report-answer-button" onClick={handleReportAnswer}>
          Report
        </div>
      </div>
      <div className="lower-answer-container">
        <div id="user-info-and-date">
          by {currentAnswer.answerer_name}, {formattedDate}
        </div>
        <AnswerPhotos currentAnswerPhotos={currentAnswer.photos} />
      </div>
    </div>
  );
};

export default Answer;
