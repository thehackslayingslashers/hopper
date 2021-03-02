import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({ question }) => {
  return (
    <div id="question-and-answer-item-container">
      <div id="question-item-container">Q: {question.question_body}</div>
      <AnswerList answers={question.answers} />
    </div>
  );
};

export default Question;
