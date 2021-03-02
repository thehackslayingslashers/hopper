import React from 'react';
import axios from 'axios';
import ReviewsMod from './ReviewsMod';
import RatingsMod from './RatingsMod';

class LMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  getAllReviews(id, count) {
    let reviewObj = {id: id, count: count}
    axios.post(`/reviewsList`, reviewObj).then((results) => {
      this.setState({
        allReviews: results.data.results,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentItemId, currentItemRatingInfo } = this.props;
    let total = 0;
    for (let keys in currentItemRatingInfo.ratings) {
      total += Number(currentItemRatingInfo.ratings[keys]);
    }

    if (this.props !== prevProps) {
      this.getAllReviews(currentItemId, total);
    }
  }

  render() {
    const { currentItemId, currentItemRatingInfo, currentItemAverageRating } = this.props;

    return (
      <div className="LModule" id="reviews">
        <RatingsMod avg={currentItemAverageRating} currentItemRatingInfo={currentItemRatingInfo} />
        <ReviewsMod reviews={this.state.allReviews} />
      </div>
    );
  }
}

export default LMod;
