import React from 'react';
import Header from './Header';
import OverviewMod from './OverviewMod/OverviewMod';
import RelatedItemsAndComparison from './RelatedItemsAndComparison/RelatedItemsAndComparison';
import LModule from './LModule';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
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
