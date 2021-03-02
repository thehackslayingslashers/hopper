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
        <div id="question-item-container">Q: {this.props.question.question_body}</div>
        <AnswerList answers={this.props.question.answers} />
      </div>
    );
  }
}

export default Question;
