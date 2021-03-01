import React from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({ question }) => {
  return (
    <div>
      <div>{question.question_body}</div>
      <AnswerList answers={question.answers} />
    </div>
  );
};

export default Question;
