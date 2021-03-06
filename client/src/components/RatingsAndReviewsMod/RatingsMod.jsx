import React from 'react';
import Stars from '../Stars';

const RatingsMod = ({ avg, currentItemRatingInfo }) => (
  <section className="ratings">
    <h3>
      Rating of
      {` ${avg}`}
      {' '}
      Stars
    </h3>
    <Stars rating={avg} />
  </section>
);

export default RatingsMod;
