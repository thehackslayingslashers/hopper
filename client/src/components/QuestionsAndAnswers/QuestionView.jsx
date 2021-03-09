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
      showPostQuestionModal: false,
      addAQuestionButtonDisplay: true,
    };

    this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
    this.handleShowLessQuestions = this.handleShowLessQuestions.bind(this);
    this.handleAddAQuestionButtonClick = this.handleAddAQuestionButtonClick.bind(this);
  }

  handleShowMoreQuestions() {
    const { questionsDisplayed } = this.state;
    const { currentProductQuestions } = this.props;
    const questionListLength = currentProductQuestions.length;
    if (questionsDisplayed < questionListLength) {
      const plusTwoQuestionLength = questionsDisplayed + 2;
      this.setState({
        questionsDisplayed: plusTwoQuestionLength,
        showLessQuestionsButtonDisplay: { display: 'flex' },
      });
    }
  }
  handleShowLessQuestions() {
    const { questionsDisplayed } = this.state;
    const minusTwoQuestionLength = questionsDisplayed - 2;
    if (questionsDisplayed > 5) {
      this.setState({ questionsDisplayed: minusTwoQuestionLength });
    }
    if (minusTwoQuestionLength < 5) {
      this.setState({ showLessQuestionsButtonDisplay: { display: 'none' } });
    }
  }

  handleAddAQuestionButtonClick() {
    this.setState({
      showPostQuestionModal: !this.state.showPostQuestionModal,
    });
  }

  render() {
    const { currentProductQuestions, currentItemId } = this.props;
    const {
      questionsDisplayed,
      showMoreQuestionsButtonDisplay,
      showLessQuestionsButtonDisplay,
      showPostQuestionModal,
    } = this.state;
    const questionList = currentProductQuestions.slice(0, questionsDisplayed);
    return (
      <div>
        {questionList.map((question, index) => (
          <div key={index}>
            <Question question={question} currentItemId={currentItemId} />
          </div>
        ))}
        <div className="question-view-button-container">
          <button
            className="add-a-question-button"
            onClick={this.handleShowMoreQuestions}
            style={showMoreQuestionsButtonDisplay}
          >
            MORE ANSWERED QUESTIONS
          </button>
          <button
            className="add-a-question-button"
            onClick={this.handleShowLessQuestions}
            style={showLessQuestionsButtonDisplay}
          >
            SHOW LESS QUESTIONS
          </button>
          <button className="add-a-question-button" onClick={this.handleAddAQuestionButtonClick}>
            ADD A QUESTION +
          </button>
        </div>
        {showPostQuestionModal && (
          <PostQuestion
            currentItemId={currentItemId}
            onHandleAddAQuestionButtonClick={this.handleAddAQuestionButtonClick}
          />
        )}
      </div>
    );
  }
}

export default QuestionView;
