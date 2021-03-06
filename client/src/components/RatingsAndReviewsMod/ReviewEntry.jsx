import React from 'react';
import Moment from 'moment';
import Stars from '../Stars';

const ReviewEntry = ({ review, modalHandler }) => {
  Moment.locale('en');
  const timeStamp = review.date;
  return (
    <article className="reviewEntry" style={{ color: 'grey' }}>
      <div className="TopMost">
        <div className="stars">
          <Stars rating={review.rating} />
        </div>
        <h4 className="DateandUser">
          {`${review.reviewer_name}, ${Moment(timeStamp).format(
            'MMM DD, YYYY',
          )}`}
        </h4>
      </div>
      <div id={review.review_id}>
        <h2 style={{ color: 'black' }}>
          <b>{review.summary}</b>
        </h2>
        <h4>{review.body}</h4>
      </div>
      {(review.photos.length !== 0) && (
        <span
          className="reviewImgBlock"
          onClick={(event) => {
            modalHandler([<img className="modalImg" key="modal" src={event.target.src} />]);
          }}
        >
          {review.photos.map((image) => <img key={image.id} className="reviewImg" src={image.url} alt="review stuff" />)}
        </span>
      )}
      {review.recommend && (
        <ul className="recommended">
          <b>
            <li>
              <span>I recommend this product</span>
            </li>
          </b>
        </ul>
      )}
      <hr />
    </article>
  );
};

export default ReviewEntry;
