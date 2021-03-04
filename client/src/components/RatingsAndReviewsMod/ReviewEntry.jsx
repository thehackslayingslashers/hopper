import React from 'react';
import Moment from 'moment';
import Stars from '../Stars';


const ReviewEntry = ({ review }) => {
  Moment.locale('en');
  let timeStamp = review.date;
  return (
    <article className="reviewEntry" style={{color:`grey`}}>
      <div className='TopMost'>
        <Stars rating={review.rating}/>
        <h4>{`${review.reviewer_name}, ${Moment(timeStamp).format('MMM DD, YYYY')}`}</h4>
      </div>
      <div id={review.review_id}>
        <h2 style={{color:`black`}}><b>{review.summary}</b></h2>
        <h4>{review.body}</h4>
      </div>
      {review.recommend && (
        <ul className="recommended">
          <b><li><span>I recommend this product</span></li></b>
        </ul>
      )}
      <hr />
    </article>
  );
};

export default ReviewEntry;
