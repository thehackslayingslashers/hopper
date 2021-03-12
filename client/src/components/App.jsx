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
      numberOfReviewsForTarrin: 0,
      searchValue: '',
      darkMode: false,
    };
    this.searchId = this.searchId.bind(this);
    this.handleSearchIdChange = this.handleSearchIdChange.bind(this);
    this.getInfoAboutCurrentItem = this.getInfoAboutCurrentItem.bind(this);
    this.calculateAverageCurrentItemRating = this.calculateAverageCurrentItemRating.bind(this);
    this.handleStyleSelection = this.handleStyleSelection.bind(this);
    this.handleCardClickIdChange = this.handleCardClickIdChange.bind(this);
    this.calculateAllReviews = this.calculateAllReviews.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
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

  handleDarkMode() {
    const { darkMode } = this.state;
    this.setState({
      darkMode: !darkMode,
    }, () => {
      document.body.classList.add('darkMode');
    });
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
      }, this.getInfoAboutCurrentItem);
    } else {
      this.setState({
        searchValue: '',
      });
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
    if (number) {
      this.setState({
        numberOfReviewsForTarrin: number,
      });
    } else {
      const { currentItemRatingInfo } = this.state;
      let total = 0;
      const keys = Object.keys(currentItemRatingInfo.ratings);
      for (let i = 0; i < keys.length; i++) {
        total += Number(currentItemRatingInfo.ratings[keys[i]]);
      }
      this.setState({
        numberOfReviews: total,
      });
    }
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
      numberOfReviewsForTarrin,
      searchValue,
      darkMode,
    } = this.state;
    return (
      <div className={darkMode ? 'darkMode' : null}>
        <Header
          searchId={this.searchId}
          searchValue={searchValue}
          handleSearchIdChange={this.handleSearchIdChange}
          darkMode={darkMode}
          handleDarkMode={this.handleDarkMode}
        />
        <OverviewMod
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
          currentItemStyles={currentItemStyles}
          selectedStyleIndex={selectedStyleIndex}
          numberOfReviews={numberOfReviewsForTarrin}
          handleStyleSelection={this.handleStyleSelection}
        />
        <RelatedItemsAndComparison
          currentItemId={currentItemId}
          currentItemInfo={currentItemInfo}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemStyles={currentItemStyles}
          handleCardClickIdChange={this.handleCardClickIdChange}
        />
        <QuestionsAndAnswers
          key={currentItemId}
          currentItemId={currentItemId}
          darkMode={darkMode}
        />
        <LMod
          currentItemId={currentItemId}
          currentItemRatingInfo={currentItemRatingInfo}
          currentItemAverageRating={currentItemAverageRating}
          numberOfReviews={numberOfReviews}
          itemName={currentItemInfo.name}
          numberOfReviewsForTarrinUpdater={this.calculateAllReviews}
        />
      </div>
    );
  }
}

export default App;
