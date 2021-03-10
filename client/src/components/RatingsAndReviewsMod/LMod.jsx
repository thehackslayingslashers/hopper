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
    this.submitHandler = this.submitHandler.bind(this);
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

  submitHandler(addObj) {
    const { currentItemRatingInfo } = this.props;
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
    for (let key in currentItemRatingInfo.characteristics) {
      let id = currentItemRatingInfo.characteristics[key].id;
      let value = addObj.characteristicsObj[key];
      newAddObj.characteristics[id] = value;
    }

    axios.post('/reviews/add', newAddObj)
      .then((res) => {
        console.log(res);
        this.modalHandler();
      });
  }

  render() {
    const {
      currentItemRatingInfo,
      currentItemAverageRating,
      itemName,
    } = this.props;

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
            submitHandler={this.submitHandler}
            itemName={itemName}
            characteristics={currentItemRatingInfo.characteristics}
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
