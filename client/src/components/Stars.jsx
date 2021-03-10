import React from 'react';

const Stars = ({ rating }) => {
  const newRating = Math.floor(rating * 20);
  const newWidth = {
    width: `${newRating}%`,
  };
  return (
    <div className="emptystars">
      <div className="filledstars" style={newWidth}>
        <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
      </div>
    </div>
  );
};

export default Stars;
