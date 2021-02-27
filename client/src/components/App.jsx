import React from 'react';
import axios from 'axios';
import Header from './Header';
import OverviewMod from './OverviewMod/OverviewMod';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison';
import LModule from './LModule';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItemId: 17762,
    };
    this.getInfoAboutCurrentItem = this.getInfoAboutCurrentItem.bind(this);
  }

  getInfoAboutCurrentItem() {
    let productId = this.state.currentItemId;

    axios
      .get(`/product/${productId}`)
      .then((data) => {
        this.setState({
          currentItemInfo: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getInfoAboutCurrentItem();
  }

  render() {
    return (
      <div>
        <Header />
        <OverviewMod />
        <RelatedItemsAndComparison />
        <LModule />
        <QuestionsAndAnswers />
      </div>
    );
  }
}

export default App;
