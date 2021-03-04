import React from 'react';
import AnswerList from './AnswerList.jsx';

class Question extends React.Component {
  // { question, key, answersDisplayed }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="question-and-answer-item-container">
        <div id="question-item-container">
          <div className="question-text">Q: {this.props.question.question_body}</div>
          <div className="question-response-options">
            <div className="upvote-question-button">Helpful?</div>
            <div>|</div>
            <div className="add-answer-button">Add Answer</div>
          </div>
        </div>
        <AnswerList answers={this.props.question.answers} />
      </div>
    );
  }
}

export default Question;
