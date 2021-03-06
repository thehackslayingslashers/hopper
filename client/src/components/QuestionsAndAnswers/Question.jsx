import React from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import PostAnswer from './PostAnswer.jsx';

class Question extends React.Component {
  // { question, key, answersDisplayed }
  constructor(props) {
    super(props);

    this.state = { postAnswerFieldDisplay: { display: 'none' } };

    this.handleQuestionUpvote = this.handleQuestionUpvote.bind(this);
    this.handleClickAddAnswer = this.handleClickAddAnswer.bind(this);
  }

  handleQuestionUpvote(e) {
    const questionId = this.props.question.question_id;
    e.preventDefault();
    axios
      .put(`/qa/questions/${questionId}/helpful`)
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  }

  handleClickAddAnswer(e) {
    e.preventDefault();
    this.setState({ postAnswerFieldDisplay: { display: 'flex' } });
  }

  render() {
    return (
      <div id="question-and-answer-item-container">
        <div id="question-item-container">
          <div className="question-text">Q: {this.props.question.question_body}</div>
          <div className="question-response-options">
            <div className="upvote-question-button" onClick={this.handleQuestionUpvote}>
              Helpful?
            </div>
            <div className="small-divider-question">|</div>
            <div className="add-answer-button" onClick={this.handleClickAddAnswer}>
              Add Answer
            </div>
          </div>
        </div>
        <AnswerList answers={this.props.question.answers} currentQuestion={this.props.question} />
        <PostAnswer
          currentQuestionId={this.props.question.question_id}
          postAnswerFieldDisplay={this.state.postAnswerFieldDisplay}
        />
      </div>
    );
  }
}

export default Question;
