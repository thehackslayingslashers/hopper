import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import axios from 'axios';
import withClickTracker from '../withClickTracker';
// import GARETHS_TOKEN from '../../config.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductQuestions: [],
      searchedQuestion: null,
    };
    this.getCurrentProductQuestionsAndAnswers = this.getCurrentProductQuestionsAndAnswers.bind(
      this
    );
    this.setCurrentQuestionsToMatchSearch = this.setCurrentQuestionsToMatchSearch.bind(this);
  }

  componentDidMount() {
    this.getCurrentProductQuestionsAndAnswers();
  }

  setCurrentQuestionsToMatchSearch(newQuestionArray) {
    this.setState({ currentProductQuestions: newQuestionArray });
  }

  getCurrentProductQuestionsAndAnswers() {
    const { currentItemId } = this.props;
    // let id = this.props.currentItemId;
    let queryObj = { params: { count: 10 } };

    axios
      .get(`/qa/questions/${currentItemId}`, queryObj)
      .then((results) => {
        this.setState({ currentProductQuestions: results.data });
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    const { currentItemId, withClickTracker, darkMode } = this.props;
    const { currentProductQuestions, searchedQuestion } = this.state;
    return (
      <div id="questions-and-answers-container" onClick={withClickTracker}>
        <h2 id="questions-and-answers-header">QUESTIONS & ANSWERS</h2>
        <QuestionSearch
          currentProductQuestions={currentProductQuestions}
          setCurrentQuestionsToMatchSearch={this.setCurrentQuestionsToMatchSearch}
          getCurrentProductQuestionsAndAnswers={this.getCurrentProductQuestionsAndAnswers}
        />
        <QuestionView
          currentItemId={currentItemId}
          currentProductQuestions={currentProductQuestions}
          searchedQuestion={searchedQuestion}
          darkMode={darkMode}
        />
      </div>
    );
  }
}

export default withClickTracker(QuestionsAndAnswers);
