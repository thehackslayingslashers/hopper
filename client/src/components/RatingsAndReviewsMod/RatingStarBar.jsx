import React from 'react';

const RatingStarBar = (props) => {
  const { percent } = props;
  return (
    <div className="outterBar">
      <div className="innerBar" style={{ width: `${percent}` }}>
        <span className="percentIndicator">{`${percent}`}</span>
      </div>
    </div>
  );
};

export default RatingStarBar;
