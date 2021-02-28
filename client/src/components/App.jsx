import React from 'react';
import axios from 'axios';
import helpers from './helpers';
import Header from './Header';
import OverviewMod from './OverviewMod/OverviewMod';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison';
import LMod from './RatingsAndReviewsMod/LMod';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItemId: 17764,
      currentItemInfo: {},
      currentItemRatingInfo: {},
      currentItemAverageRating: 0,
      currentItemStyles: [],
    };
    this.getInfoAboutCurrentItem = this.getInfoAboutCurrentItem.bind(this);
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
  }

  getInfoAboutCurrentItem() {
    let productId = this.state.currentItemId;

    axios
      .get(`/product/${productId}`)
      .then((data) => {
        this.setState(
          {
            currentItemInfo: data.data[0],
            currentItemRatingInfo: data.data[1],
            currentItemStyles: data.data[2].results,
          },
          this.calculateAverageCurrentItemRating
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  calculateAverageCurrentItemRating() {
    helpers.calculateAverageRating(this.state.currentItemRatingInfo.ratings, (avg) => {
      this.setState({
        currentItemAverageRating: avg,
      });
    });
  }

  componentDidMount() {
    this.getInfoAboutCurrentItem();
  }

  render() {
    return (
      <div>
        <Header />
        <OverviewMod
          currentItemInfo={this.state.currentItemInfo}
          currentItemRatingInfo={this.state.currentItemRatingInfo}
          currentItemAverageRating={this.state.currentItemAverageRating}
          currentItemStyles={this.state.currentItemStyles}
        />
        <RelatedItemsAndComparison />
        <LMod />
        <QuestionsAndAnswers currentProduct={this.state.currentItemId} />
      </div>
    );
  }
}

export default App;
