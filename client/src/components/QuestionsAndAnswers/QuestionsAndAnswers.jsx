import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import AnswerQuestion from './AnswerQuestion';
import App from '../App.jsx';
import axios from 'axios';
// import GARETHS_TOKEN from '../../config.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductQuestions: [],
    };
    this.getCurrentProductQuestionsAndAnswers = this.getCurrentProductQuestionsAndAnswers.bind(
      this
    );
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

  componentDidMount() {
    this.getCurrentProductQuestionsAndAnswers(this.props.currentItemId);
  }

  render() {
    return (
      <div id="questions-and-answers-container">
        <div>Questions About This Product:</div>
        <QuestionView currentProductQuestions={this.state.currentProductQuestions} />
        <QuestionSearch />
        <PostQuestion />
        <AnswerQuestion />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
