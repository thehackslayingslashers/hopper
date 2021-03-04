import React from 'react';
import QuestionView from './QuestionView';
import QuestionSearch from './QuestionSearch';
import PostQuestion from './PostQuestion';
import PostAnswer from './PostAnswer';
import axios from 'axios';
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

  setCurrentQuestionsToMatchSearch(newQuestionArray) {
    this.setState({ currentProductQuestions: newQuestionArray });
  }

  componentDidMount() {
    this.getCurrentProductQuestionsAndAnswers();
  }

  getCurrentProductQuestionsAndAnswers() {
    let id = this.props.currentItemId;
    let paramsObj = { params: { count: 10 } };
    // axios({
    //   url: '/qa/questions',
    //   method: 'get',
    //   params: { product_id: id },
    // })
    axios
      .get(`/qa/questions/${id}`, paramsObj)
      .then((results) => {
        this.setState({ currentProductQuestions: results.data });
      })
      .catch((error) => {
        throw error;
      });
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
          currentItemId={this.props.currentItemId}
          currentProductQuestions={this.state.currentProductQuestions}
          searchedQuestion={this.state.searchedQuestion}
        />
        <PostQuestion currentItemId={this.props.currentItemId} />
      </div>
    );
  }
}

export default QuestionsAndAnswers;
