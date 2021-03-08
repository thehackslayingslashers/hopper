/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
      currentItemId: 17072,
      currentItemInfo: {},
      currentItemRatingInfo: {},
      currentItemAverageRating: 0,
      currentItemStyles: [],
      selectedStyleIndex: 0,
      numberOfReviews: 0,
      searchValue: '',
    };
    this.searchId = this.searchId.bind(this);
    this.handleSearchIdChange = this.handleSearchIdChange.bind(this);
    this.getInfoAboutCurrentItem = this.getInfoAboutCurrentItem.bind(this);
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
    this.handleStyleSelection = this.handleStyleSelection.bind(this);
    this.handleCardClickIdChange = this.handleCardClickIdChange.bind(this);
    this.calculateAllReviews = this.calculateAllReviews.bind(this);
  }

  componentDidMount() {
    this.getInfoAboutCurrentItem();
  }

  handleSearchIdChange(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleStyleSelection(e) {
    const { selectedStyleIndex } = this.state;
    const index = Number(e.target.attributes.index.nodeValue);
    if (selectedStyleIndex !== index) {
      this.setState({
        selectedStyleIndex: index,
      });
    }
  }

  handleCardClickIdChange(newId, cb) {
    this.setState(
      {
        currentItemId: newId,
      },
      () => {
        this.getInfoAboutCurrentItem(cb);
      },
    );
  }

  getInfoAboutCurrentItem(cb = () => {}) {
    const { currentItemId } = this.state;
    const productId = currentItemId;
    axios
      .get(`/product/${productId}`)
      .then((data) => {
        this.setState(
          {
            currentItemInfo: data.data[0],
            currentItemRatingInfo: data.data[1],
            currentItemStyles: data.data[2].results,
            selectedStyleIndex: 0,
          },
          this.calculateAverageCurrentItemRating,
        );
        this.calculateAllReviews();
      })
      .then(() => {
        cb();
      })
      .catch((error) => {
        throw error;
      });
  }

  searchId(e) {
    const { searchValue } = this.state;
    e.preventDefault();
    if (searchValue >= 17067 && searchValue <= 18077) {
      this.setState({
        currentItemId: searchValue,
        searchValue: '',
      }, this.getInfoAboutCurrentItem)
    } else {
      this.setState({
        searchValue: '',
      })
    }
  }

  calculateAverageCurrentItemRating() {
    const { currentItemRatingInfo } = this.state;
    helpers.calculateAverageRating(currentItemRatingInfo.ratings, (avg) => {
      this.setState({
        currentItemAverageRating: avg,
      });
    });
  }

  calculateAllReviews(number) {
    const { currentItemRatingInfo } = this.state;
    let total = 0;
    const keys = Object.keys(currentItemRatingInfo.ratings);
    for (let i = 0; i < keys.length; i++) {
      total += Number(currentItemRatingInfo.ratings[keys[i]]);
    }

    this.setState({
      numberOfReviews: number,
    });
  }

  render() {
    const {
      currentItemId,
      currentItemInfo,
      currentItemRatingInfo,
      currentItemAverageRating,
      currentItemStyles,
      selectedStyleIndex,
      numberOfReviews,
      searchValue,
    } = this.state;
    return (
      <div>
        <Header
          searchId={this.searchId}
          searchValue={searchValue}
          handleSearchIdChange={this.handleSearchIdChange}
        />
        <OverviewMod
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
          currentItemStyles={currentItemStyles}
          selectedStyleIndex={selectedStyleIndex}
          numberOfReviews={numberOfReviews}
          handleStyleSelection={this.handleStyleSelection}
        />
        <RelatedItemsAndComparison
          currentItemId={currentItemId}
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemStyles={currentItemStyles}
          handleCardClickIdChange={this.handleCardClickIdChange}
        />
        <QuestionsAndAnswers key={currentItemId} currentItemId={currentItemId} />
        <LMod
          currentItemId={currentItemId}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
          numberOfReviews={numberOfReviews}
          itemName={currentItemInfo.name}
        />
      </div>
    );
  }
}

export default App;
