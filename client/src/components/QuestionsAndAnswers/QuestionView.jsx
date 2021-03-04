import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDisplayed: 2,
      questionsCollapsed: true,
      showMoreQuestionsButtonText: 'Show more questions',
    };

    this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
  }

  handleShowMoreQuestions() {
    const questionListLength = this.props.currentProductQuestions.length;
    if (this.state.questionsCollapsed) {
      this.setState({ questionsDisplayed: questionListLength });
      this.setState({ questionsCollapsed: false });
      this.setState({ showMoreQuestionsButtonText: 'Show less questions' });
    } else {
      this.setState({ questionsDisplayed: 2 });
      this.setState({ questionsCollapsed: true });
      this.setState({ showMoreQuestionsButtonText: 'Show more questions' });
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
        <button onClick={this.handleShowMoreQuestions}>
          {this.state.showMoreQuestionsButtonText}
        </button>
        <button>Refresh</button>
      </div>
    );
  }
}

export default QuestionView;
