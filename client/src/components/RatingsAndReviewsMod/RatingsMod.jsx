import React from 'react';
import Stars from '../Stars';

const RatingsMod = ({ avg, currentItemRatingInfo }) => (
  <section className="ratings">
    <h2>
      {`${avg} `}
    </h2>
    <Stars rating={avg} />
  </section>
);

export default RatingsMod;
