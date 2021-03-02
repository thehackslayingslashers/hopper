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
      currentItemId: 17761,
      currentItemInfo: {},
      currentItemRatingInfo: {},
      currentItemAverageRating: 0,
      currentItemStyles: [],
      selectedStyleIndex: 0,
    };
    this.getInfoAboutCurrentItem = this.getInfoAboutCurrentItem.bind(this);
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
    this.handleStyleSelection = this.handleStyleSelection.bind(this);
    this.handleCardClickIdChange = this.handleCardClickIdChange.bind(this);
  }

  getInfoAboutCurrentItem(cb = () => {}) {
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
      .then(() => {
        cb()
      })
      .catch((error) => {
        console.log(error);
      })

  }

  calculateAverageCurrentItemRating() {
    helpers.calculateAverageRating(this.state.currentItemRatingInfo.ratings, (avg) => {
      this.setState({
        currentItemAverageRating: avg,
      });
    });
  }

  handleStyleSelection(e) {
    let index = Number(e.target.attributes.index.nodeValue);
    if (this.state.selectedStyleIndex !== index)
      this.setState(
        {
          selectedStyleIndex: index,
        },
        () => {
          console.log(this.state.selectedStyleIndex);
        }
      );
  }

  handleCardClickIdChange(newId, cb) {
    this.setState({
      currentItemId: newId
    }, () => {
      this.getInfoAboutCurrentItem(cb);
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
          selectedStyleIndex={this.state.selectedStyleIndex}
          handleStyleSelection={this.handleStyleSelection}
        />
        <RelatedItemsAndComparison
        currentItemId={this.state.currentItemId}
        handleCardClickIdChange={this.handleCardClickIdChange}
        />
        <QuestionsAndAnswers currentItemId={this.state.currentItemId} />
        <LMod
          currentItemId={this.state.currentItemId}
          currentItemRatingInfo={this.state.currentItemRatingInfo}
          currentItemAverageRating={this.state.currentItemAverageRating}
        />
      </div>
    );
  }
}

export default App;
