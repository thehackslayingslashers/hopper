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
          <div className="upvote-question-button">was this helpful?</div>
        </div>
        <AnswerList answers={this.props.question.answers} />
      </div>
    );
  }
}

export default Question;
