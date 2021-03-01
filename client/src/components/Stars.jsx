import React from 'react';

const Stars = ({rating}) => {
  let newRating = Math.floor(rating * 20);
  let newWidth = {
    width: `${newRating}%`
  };

  return (<div className="emptystars">
  <div className="filledstars" style={newWidth}></div>
</div>)
}

export default Stars;