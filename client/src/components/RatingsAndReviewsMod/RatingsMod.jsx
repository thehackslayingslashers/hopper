import React from 'react';
import Stars from '../Stars';

const RatingsMod = ({ avg, currentItemRatingInfo }) => (
  <section className="ratings">
    <h2>
      {(avg !== 'NaN') && (
        `${avg} `
      )}
    </h2>
    <Stars rating={avg} />
    <div>5 stars</div>
    <div>4 stars</div>
    <div>3 stars</div>
    <div>2 stars</div>
    <div>1 stars</div>
  </section>
);

export default RatingsMod;
