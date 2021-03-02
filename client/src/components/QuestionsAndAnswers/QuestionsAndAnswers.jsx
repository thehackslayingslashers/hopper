import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import PostAnswer from './PostAnswer';
import App from '../App.jsx';
import axios from 'axios';
// import GARETHS_TOKEN from '../../config.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      currentProductQuestions: [],
      searchedQuestion: null,
    };
    this.getCurrentProductQuestionsAndAnswers = this.getCurrentProductQuestionsAndAnswers.bind(
      this
    );
    this.setCurrentQuestionsToMatchSearch = this.setCurrentQuestionsToMatchSearch.bind(this);
  }

  getCurrentProductQuestionsAndAnswers(id) {
    axios
      .get(`/qa/questions/${id}`)
      .then((results) => {
        this.setState({ currentProductQuestions: results.data });
      })
      .catch((error) => {
        console.log('failed to load questions');
      });
  }

  setCurrentQuestionsToMatchSearch(newQuestionArray) {
    this.setState({ currentProductQuestions: newQuestionArray });
  }

  componentDidMount() {
    this.getCurrentProductQuestionsAndAnswers(this.props.currentItemId);
  }

  render() {
    return (
      <div id="questions-and-answers-container">
        <div id="questions-and-answers-header">QUESTIONS & ANSWERS</div>
        <QuestionSearch
          currentProductQuestions={this.state.currentProductQuestions}
          setCurrentQuestionsToMatchSearch={this.setCurrentQuestionsToMatchSearch}
          getCurrentProductQuestionsAndAnswers={this.getCurrentProductQuestionsAndAnswers}
        />
        <QuestionView
          currentProductQuestions={this.state.currentProductQuestions}
          searchedQuestion={this.state.searchedQuestion}
        />
        <PostQuestion />
        <PostAnswer />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
