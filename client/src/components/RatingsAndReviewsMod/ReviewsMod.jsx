import React from 'react';
import ReviewEntry from './ReviewEntry';

const ReviewsMod = ({reviews}) => {
  return (
    <section className="reviewsList">
      <h3>Reviews Module</h3>
      <h3>{reviews.length} Reviews:</h3>
      {reviews.map((oneReview) => {
        return (<ReviewEntry review={oneReview} key={oneReview.review_id}/>);
      })}
      <button className="LModButton">More Reviews</button>
      <button className="LModButton">Add Review</button>
    </section>
  );
};

export default ReviewsMod;
