import React from 'react';

const Answer = ({ answerId, answers }) => {
  var parsedAnswerId = parseInt(answerId);
  return <div>A: {answers[parsedAnswerId].body}</div>;
};

export default Answer;
