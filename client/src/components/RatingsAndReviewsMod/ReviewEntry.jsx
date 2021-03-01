import React from 'react';
import Stars from './Stars';

const ReviewEntry = ({ review }) => {
  return (
    <article className="reviewEntry">
      <Stars rating={review.rating}/>
      <div id={review.review_id}>
        <h4>Summary: {review.summary}</h4>
        <h5>Body: {review.body}</h5>
      </div>
      <hr />
    </article>
  );
};

export default ReviewEntry;
