import React from 'react';
import ReviewEntry from './ReviewEntry';
import SortingHeader from './SortingHeader';
import AddReview from './AddReview';

class ReviewsMod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
    this.showMoreHandler = this.showMoreHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        showMore: false,
      });
    }
  }

  showMoreHandler() {
    const { showMore } = this.state;
    this.setState({
      showMore: !showMore,
    });
  }

  render() {
    const {
      reviews, sortedBy, selectHandler, modalHandler, submitHandler, itemName, characteristics,
    } = this.props;
    const { showMore } = this.state;

    return (
      <section className="reviewsList">
        <h3>Reviews Module</h3>
        <SortingHeader
          reviewsLength={reviews.length}
          sortedBy={sortedBy}
          selectHandler={selectHandler}
        />
        <div className="reviewsContainer">
          {reviews.map((oneReview, index) => {
            if ((index >= 2) && !showMore) {
              return;
            }
            return (
              <ReviewEntry
                review={oneReview}
                key={oneReview.review_id}
                modalHandler={modalHandler}
              />
            );
          })}
        </div>

        {!showMore && (<button className="LModButton" type="button" onClick={this.showMoreHandler}>More Reviews</button>)}
        <button
          className="LModButton"
          type="button"
          onClick={() => {
            modalHandler([<AddReview submitHandler={submitHandler} itemName={itemName} characteristics={characteristics} key="form" />]);
          }}
        >
          Add Review
        </button>
      </section>
    );
  }
}

export default ReviewsMod;
