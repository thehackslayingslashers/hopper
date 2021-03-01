import React from 'react';
import axios from 'axios';

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
    <div className="LModule">All the Reviews:{this.state.allReviews.map((oneReview) => {
      return(
        <div key={oneReview.review_id}>
          <h4>Summary:{oneReview.summary}</h4>
          <h5>Body:{oneReview.body}</h5>
        </div>
      )
    })}</div>
    );
  }
}

export default LMod;
