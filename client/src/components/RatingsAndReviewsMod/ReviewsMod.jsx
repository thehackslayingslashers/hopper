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
      reviews, sortedBy, selectHandler, modalHandler, submitHandler, itemName, characteristics, filtered,
    } = this.props;
    const { showMore } = this.state;
    let counter = 0;

    return (
      <section className="reviewsList">
        <SortingHeader
          reviewsLength={reviews.length}
          sortedBy={sortedBy}
          selectHandler={selectHandler}
        />
        <div className="reviewsContainer">
          {reviews.map((oneReview) => {
            if ((counter >= 2) && !showMore) {
              return;
            } else if (filtered) {
              if (oneReview.rating === filtered) {
                counter++;
                return (
                  <ReviewEntry
                    review={oneReview}
                    key={oneReview.review_id}
                    modalHandler={modalHandler}
                  />
                );
              }
            } else {
              counter++;
              return (
                <ReviewEntry
                  review={oneReview}
                  key={oneReview.review_id}
                  modalHandler={modalHandler}
                />
              );
            }
          })}
        </div>

        {!showMore && (reviews.length > 2) && (counter >= 2) && (<button className="LModButton" type="button" onClick={this.showMoreHandler}>More Reviews</button>)}
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
