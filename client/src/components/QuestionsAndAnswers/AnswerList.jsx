import React from 'react';

const AnswerList = (props) => {
  const answers = props.answers;
  return (
    <div>
      {answers.map((answer) => (
        <div>{answers.body}</div>
      ))}
    </div>
  );
};

export default AnswerList;
