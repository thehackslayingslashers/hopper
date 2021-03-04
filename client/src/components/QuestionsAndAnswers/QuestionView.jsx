import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDisplayed: 4,
    };

    this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleShowLessQuestions = this.handleShowLessQuestions.bind(this);
  }

  handleShowMoreQuestions() {
    const questionListLength = this.props.currentProductQuestions.length;
    if (this.state.questionsDisplayed < questionListLength) {
      const plusTwoQuestionLength = this.state.questionsDisplayed + 2;
      this.setState({ questionsDisplayed: plusTwoQuestionLength });
    }
  }
  handleShowLessQuestions() {
    const minusTwoQuestionLength = this.state.questionsDisplayed - 2;
    if (this.state.questionsDisplayed > 3) {
      this.setState({ questionsDisplayed: minusTwoQuestionLength });
    }
  }

  render() {
    const questionList = this.props.currentProductQuestions.slice(0, this.state.questionsDisplayed);
    return (
      <div>
        {questionList.map((question, index) => (
          <div key={index}>
            <Question question={question} currentItemId={this.props.currentItemId} />
          </div>
        ))}
        <button onClick={this.handleShowMoreQuestions}>Show more questions</button>
        <button onClick={this.handleShowLessQuestions}>Show less questions</button>
        <button>Refresh</button>
      </div>
    );
  }
}

export default QuestionView;
