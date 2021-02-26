import React from 'react';
import Overview from './OverviewModule/OverviewModule';
import JClass from './JClass';
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
        <p>App is Loading</p>

        <Overview />
        <JClass />
        <LModule />
        <QuestionsAndAnswers />
      </div>
    );
  }
}

export default App;
