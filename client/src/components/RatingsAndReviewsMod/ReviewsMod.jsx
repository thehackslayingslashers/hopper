import React from 'react';
import ReviewEntry from './ReviewEntry';
import SortingHeader from './SortingHeader';

const ReviewsMod = ({reviews, sortedBy, selectHandler}) => {
  return (
    <section className="reviewsList">
      <h3>Reviews Module</h3>
      <SortingHeader reviewsLength={reviews.length} sortedBy={sortedBy} selectHandler={selectHandler}/>
      {reviews.map((oneReview) => {
        return (<ReviewEntry review={oneReview} key={oneReview.review_id}/>);
      })}
      <button className="LModButton">More Reviews</button>
      <button className="LModButton">Add Review</button>
    </section>
  );
};

export default ReviewsMod;
