import React from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import PostAnswer from './PostAnswer.jsx';

class Question extends React.Component {
  // { question, key, answersDisplayed }
  constructor(props) {
    super(props);

    this.state = {
      postAnswerFieldDisplay: false,
      helpful: false,
      helpfulButtonText: `Yes(${this.props.question.question_helpfulness})`,
    };

    this.handleQuestionUpvote = this.handleQuestionUpvote.bind(this);
    this.handleClickAddAnswer = this.handleClickAddAnswer.bind(this);
    this.revertFieldDisplay = this.revertFieldDisplay.bind(this);
  }

  handleQuestionUpvote(e) {
    const { question } = this.props;
    const { helpful, helpfulButtonText } = this.state;
    const questionId = question.question_id;
    e.preventDefault();
    if (!helpful) {
      axios
        .put(`/qa/questions/${questionId}/helpful`)
        .then(() => {
          this.setState({
            helpful: true,
            helpfulButtonText: `Yes(${question.question_helpfulness + 1})`,
          });
        })
        .catch((error) => {
          throw error;
        });
    }
  }

  handleClickAddAnswer(e) {
    e.preventDefault();
    this.setState({ postAnswerFieldDisplay: true });
  }

  revertFieldDisplay() {
    this.setState({ postAnswerFieldDisplay: false });
  }

  render() {
    const { question } = this.props;
    const { postAnswerFieldDisplay, helpful, helpfulButtonText } = this.state;
    return (
      <div id="question-and-answer-item-container">
        <div id="question-item-container">
          <div className="question-text">Q: {question.question_body}</div>
          <div className="question-response-options">
            <div className="upvote-question-button" onClick={this.handleQuestionUpvote}>
              Helpful? {helpfulButtonText}
            </div>
            <div className="small-divider-question">|</div>
            <div className="add-answer-button" onClick={this.handleClickAddAnswer}>
              Add Answer
            </div>
          </div>
        </div>
        <AnswerList answers={question.answers} currentQuestion={question} />
        {postAnswerFieldDisplay && (
          <PostAnswer
            currentQuestionId={question.question_id}
            postAnswerFieldDisplay={postAnswerFieldDisplay}
            revertFieldDisplay={this.revertFieldDisplay}
          />
        )}
      </div>
    );
  }
}

export default Question;
