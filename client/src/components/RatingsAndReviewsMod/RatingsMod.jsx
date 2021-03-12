import React from 'react';
import Stars from '../Stars';

const RatingsMod = ({ avg, currentItemRatingInfo, filteredUpdater }) => {

  let recommendedPercent;
  if (currentItemRatingInfo.recommended) {
    recommendedPercent = Math.ceil((Number(currentItemRatingInfo.recommended.true) / (Number(currentItemRatingInfo.recommended.true) + Number(currentItemRatingInfo.recommended.false))) * 100);
  } else {
    recommendedPercent = 0;
  }

  const ratingPercent = (number) => {
    if (currentItemRatingInfo.ratings) {
      let value = currentItemRatingInfo.ratings[`${number}`];
      if (!value) {
        value = 0;
      }
      let total = 0;
      const ratings = Object.keys(currentItemRatingInfo.ratings);
      for (let i = 0; i < ratings.length; i++) {
        total += Number(currentItemRatingInfo.ratings[ratings[i]]);
      }
      return `${Math.ceil((value / total) * 100)}%`;
    }
    return 0;
  };

  return (
    <section className="ratings" onClick={(event) => { filteredUpdater(Number(event.target.innerText[0])); }}>
      <div className="AvgStar" style={{ margin: '5px 0px' }}>
        <div style={{ fontSize: '60px', fontWeight: 'bold' }}>
          {(avg !== 'NaN') && (
            `${Number(avg).toFixed(1)} `
          )}
        </div>
        &nbsp;&nbsp;
        <Stars rating={avg} />
      </div>
      <h4 style={{ margin: '0px 0px 13px' }}>
        {recommendedPercent}
        % of reviews recommend this product
      </h4>
      <div className="filterContainer" style={{ fontSize: '25px' }}>
        <div className="starFilter">
          5 stars:&nbsp;
          {ratingPercent(5)}
        </div>
        <div className="starFilter">
          4 stars:&nbsp;
          {ratingPercent(4)}
        </div>
        <div className="starFilter">
          3 stars:&nbsp;
          {ratingPercent(3)}
        </div>
        <div className="starFilter">
          2 stars:&nbsp;
          {ratingPercent(2)}
        </div>
        <div className="starFilter">
          1 stars:&nbsp;
          {ratingPercent(1)}
        </div>
      </div>
    </section>
  );
};

export default RatingsMod;
