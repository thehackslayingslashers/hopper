import React from 'react';
import axios from 'axios';
import ReviewsMod from './ReviewsMod';
import RatingsMod from './RatingsMod';

class LMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: []
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  getAllReviews(id) {
    axios.get(`/reviewsList/${id}`)
    .then((results) => {
      this.setState({
        allReviews: results.data.results
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      currentItemId
    } = this.props;

    if (this.props !== prevProps) {
      this.getAllReviews(currentItemId);
    }
  }

  render() {
    const {
      currentItemId,
      currentItemRatingInfo,
      currentItemAverageRating
    } = this.props;

    return (
      <div className="LModule">
        <RatingsMod
        avg={currentItemAverageRating}
        currentItemRatingInfo={currentItemRatingInfo}
        />
        <ReviewsMod reviews={this.state.allReviews}/>
      </div>
    );
  }
}

export default LMod;
