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
    const { question } = this.props;
    const questionId = question.question_id;
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
    const { question } = this.props;
    const { postAnswerFieldDisplay } = this.state;
    return (
      <div id="question-and-answer-item-container">
        <div id="question-item-container">
          <div className="question-text">Q: {question.question_body}</div>
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
        <AnswerList answers={question.answers} currentQuestion={question} />
        <PostAnswer
          currentQuestionId={question.question_id}
          postAnswerFieldDisplay={postAnswerFieldDisplay}
        />
      </div>
    );
  }
}

export default Question;
