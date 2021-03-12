import React from 'react';
import axios from 'axios';
import ReviewsMod from './ReviewsMod';
import RatingsMod from './RatingsMod';
import Modal from './Modal';
import withClickTracker from '../withClickTracker';

class LMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      sortedBy: 'relevent',
      modalContent: [],
      showModal: false,
      filtered: null,
    };
    this.getAllReviews = this.getAllReviews.bind(this);
    this.updateSortBy = this.updateSortBy.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.filteredUpdater = this.filteredUpdater.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      currentItemId,
      numberOfReviews,
      currentItemRatingInfo,
      currentItemAverageRating,
      itemName,
    } = this.props;
    const { sortedBy } = this.state;

    if (numberOfReviews > 0
      && (currentItemId !== prevProps.currentItemId
      || numberOfReviews !== prevProps.numberOfReviews
      || currentItemRatingInfo !== prevProps.currentItemRatingInfo
      || currentItemAverageRating !== prevProps.currentItemAverageRating
      || itemName !== prevProps.itemName)) {
      this.getAllReviews(currentItemId, numberOfReviews, sortedBy);
    }
  }

  getAllReviews(id, count, sort) {
    const { numberOfReviewsForTarrinUpdater } = this.props;
    const reviewObj = { id, count, sort };

    axios.post('/reviewsList', reviewObj).then((results) => {
      this.setState({
        allReviews: results.data.results,
        sortedBy: sort,
      }, () => {
        numberOfReviewsForTarrinUpdater(results.data.results.length);
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

  submitHandler(addObj) {
    const { currentItemRatingInfo, numberOfReviews } = this.props;
    const { sortedBy } = this.state;

    const newAddObj = {};
    newAddObj.product_id = Number(currentItemRatingInfo.product_id);
    newAddObj.rating = addObj.starWidth;
    newAddObj.summary = addObj.summary;
    newAddObj.body = addObj.body;
    newAddObj.name = addObj.nickname;
    newAddObj.email = addObj.email;
    newAddObj.photos = [];
    newAddObj.characteristics = {};

    if (addObj.recommend === 'yes') {
      newAddObj.recommend = true;
    } else {
      newAddObj.recommend = false;
    }
    for (const key in currentItemRatingInfo.characteristics) {
      const { id } = currentItemRatingInfo.characteristics[key];
      const value = addObj.characteristicsObj[key];
      newAddObj.characteristics[id] = value;
    }

    axios.post('/reviews/add', newAddObj)
      .then(() => {
        this.modalHandler();
      })
      .then(() => {
        this.getAllReviews(currentItemRatingInfo.product_id, numberOfReviews + 1, sortedBy);
      });
  }

  filteredUpdater(value) {
    this.setState({
      filtered: value,
    });
  }

  render() {
    const {
      currentItemRatingInfo,
      currentItemAverageRating,
      itemName, withClickTracker,
    } = this.props;

    const {
      sortedBy, allReviews, showModal, modalContent, filtered,
    } = this.state;

    return (
      <>
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>Ratings & Reviews</h2>
        <div className="LModule" id="reviews" onClick={withClickTracker}>
          <RatingsMod
            avg={currentItemAverageRating}
            currentItemRatingInfo={currentItemRatingInfo}
            filteredUpdater={this.filteredUpdater}
          />
          <ReviewsMod
            reviews={allReviews}
            sortedBy={sortedBy}
            selectHandler={this.updateSortBy}
            modalHandler={this.modalHandler}
            submitHandler={this.submitHandler}
            itemName={itemName}
            characteristics={currentItemRatingInfo.characteristics}
            filtered={filtered}
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

export default withClickTracker(LMod);
