import React from 'react';
import axios from 'axios';
import ReviewsMod from './ReviewsMod';
import RatingsMod from './RatingsMod';
import Modal from './Modal';

class LMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      sortedBy: 'relevent',
      modalContent: [],
      showModal: false,
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentItemId, numberOfReviews } = this.props;
    const { sortedBy } = this.state;

    if (this.props !== prevProps) {
      this.getAllReviews(currentItemId, numberOfReviews, sortedBy);
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

  modalHandler(modalContent) {
    const { showModal } = this.state;
    this.setState({
      modalContent,
      showModal: !showModal,
    });
  }

  submitHandler() {
    console.log('it happened!!');
  }

  render() {
    const { currentItemRatingInfo, currentItemAverageRating, numberOfReviews } = this.props;
    const {
      sortedBy, allReviews, showModal, modalContent,
    } = this.state;

    return (
      <>
        <h1>Ratings & Reviews</h1>
        <div className="LModule" id="reviews">
          <RatingsMod
            avg={currentItemAverageRating}
            currentItemRatingInfo={currentItemRatingInfo}
          />
          <ReviewsMod
            reviews={allReviews}
            sortedBy={sortedBy}
            selectHandler={this.updateSortBy}
            modalHandler={this.modalHandler}
            numberOfReviews={numberOfReviews}
            submitHandler={this.submitHandler}
          />
          {showModal && (
          <Modal
            content={modalContent}
            modalType="close"
            closeModal={this.modalHandler}
          />
          )}
        </div>
      </>
    );
  }
}

export default LMod;
