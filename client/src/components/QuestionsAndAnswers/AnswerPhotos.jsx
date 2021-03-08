import React from 'react';

const AnswerPhotos = ({ currentAnswerPhotos }) => {
  return (
    <div className="answerer-photos">
      {currentAnswerPhotos.map((photo, index) => (
        <img key={index} className="answer-photo" src={photo} />
      ))}
    </div>
  );
};

export default AnswerPhotos;
