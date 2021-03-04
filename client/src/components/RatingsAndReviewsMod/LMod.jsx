import React from 'react';
import axios from 'axios';
import ReviewsMod from './ReviewsMod';
import RatingsMod from './RatingsMod';

class LMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      sortedBy: 'relevent',
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentItemId, numberOfReviews } = this.props;

    if (this.props !== prevProps) {
      this.getAllReviews(currentItemId, numberOfReviews, this.state.sortedBy);
    }
  }

  getAllReviews(id, count, sort) {
    const reviewObj = { id, count, sort };
    axios.post('/reviewsList', reviewObj).then((results) => {
      this.setState({
        allReviews: results.data.results,
        sortedBy: sort,
      });
    });
  }

  updateSortBy(sortBy) {
    const { currentItemId, numberOfReviews } = this.props;
    this.getAllReviews(currentItemId, numberOfReviews, sortBy);
  }

  render() {
    const { currentItemId, currentItemRatingInfo, currentItemAverageRating } = this.props;

    return (
      <div className="LModule" id="reviews">
        <RatingsMod avg={currentItemAverageRating} currentItemRatingInfo={currentItemRatingInfo} />
        <ReviewsMod reviews={this.state.allReviews} sortedBy={this.state.sortedBy} selectHandler={this.updateSortBy}/>
      </div>
    );
  }
}

export default LMod;
