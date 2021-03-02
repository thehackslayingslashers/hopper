import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({ answers }) => {
  const keyArray = Object.keys(answers);
  return (
    <div id="answers-container">
      {keyArray.map((answerId, index) => (
        <div key={index}>
          <Answer answerId={answerId} answers={answers} />
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
