import React from 'react';
import Stars from '../Stars';

const RatingsMod = ({ avg, currentItemRatingInfo, filteredUpdater }) => {
  let percent;
  if (currentItemRatingInfo.recommended) {
    percent = Math.ceil((Number(currentItemRatingInfo.recommended.true) / (Number(currentItemRatingInfo.recommended.true) + Number(currentItemRatingInfo.recommended.false))) * 100);
  } else {
    percent = 0;
  }

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
      <h3 style={{ margin: '0px 0px 7px' }}>
        {percent}
        % of reviews recommend this product
      </h3>
      <div style={{ fontSize: '25px' }}>
        <div className="starFilter">5 stars</div>
        <div className="starFilter">4 stars</div>
        <div className="starFilter">3 stars</div>
        <div className="starFilter">2 stars</div>
        <div className="starFilter">1 stars</div>
      </div>
    </section>
  );
};

export default RatingsMod;
