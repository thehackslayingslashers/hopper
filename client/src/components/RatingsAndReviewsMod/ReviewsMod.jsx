import React from 'react';
import ReviewEntry from './ReviewEntry';
import SortingHeader from './SortingHeader';

const ReviewsMod = ({
  reviews, sortedBy, selectHandler, modalHandler,
}) => (
  <section className="reviewsList">
    <h3>Reviews Module</h3>
    <SortingHeader
      reviewsLength={reviews.length}
      sortedBy={sortedBy}
      selectHandler={selectHandler}
    />
    {reviews.map((oneReview) => (
      <ReviewEntry
        review={oneReview}
        key={oneReview.review_id}
        modalHandler={modalHandler}
      />
    ))}

    <button className="LModButton" type="button">More Reviews</button>
    <button className="LModButton" type="button">Add Review</button>
  </section>
);

export default ReviewsMod;
