import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';
import PostQuestion from './PostQuestion.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDisplayed: 4,
      showMoreQuestionsButtonDisplay: { display: 'flex' },
      showLessQuestionsButtonDisplay: { display: 'none' },
    };

    this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleShowLessQuestions = this.handleShowLessQuestions.bind(this);
  }

  handleShowMoreQuestions() {
    const questionListLength = this.props.currentProductQuestions.length;
    if (this.state.questionsDisplayed < questionListLength) {
      const plusTwoQuestionLength = this.state.questionsDisplayed + 2;
      this.setState({ questionsDisplayed: plusTwoQuestionLength });
      this.setState({ showLessQuestionsButtonDisplay: { display: 'flex' } });
    }
  }
  handleShowLessQuestions() {
    const minusTwoQuestionLength = this.state.questionsDisplayed - 2;
    if (this.state.questionsDisplayed > 5) {
      this.setState({ questionsDisplayed: minusTwoQuestionLength });
    }
    if (minusTwoQuestionLength < 5) {
      this.setState({ showLessQuestionsButtonDisplay: { display: 'none' } });
    }
  }

  render() {
    //sort questions by helpfulness
    const questionList = this.props.currentProductQuestions.slice(0, this.state.questionsDisplayed);
    return (
      <div>
        {questionList.map((question, index) => (
          <div key={index}>
            <Question question={question} currentItemId={this.props.currentItemId} />
          </div>
        ))}
        <div className="question-view-button-container">
          <button
            className="add-a-question-button"
            onClick={this.handleShowMoreQuestions}
            style={this.state.showMoreQuestionsButtonDisplay}
          >
            MORE ANSWERED QUESTIONS
          </button>
          <button
            className="add-a-question-button"
            onClick={this.handleShowLessQuestions}
            style={this.state.showLessQuestionsButtonDisplay}
          >
            Show less questions
          </button>
          <PostQuestion currentItemId={this.props.currentItemId} />
        </div>
      </div>
    );
  }
}

export default QuestionView;
