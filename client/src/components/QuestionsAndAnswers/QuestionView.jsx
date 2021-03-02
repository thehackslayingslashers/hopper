import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDisplayed: 2,
      collapsed: true,
      showButtonText: 'Show more',
    };

    this.handleShowMore = this.handleShowMore.bind(this);
  }

  handleShowMore() {
    const questionListLength = this.props.currentProductQuestions.length;
    if (this.state.collapsed) {
      this.setState({ questionsDisplayed: questionListLength });
      this.state.collapsed = false;
      this.state.showButtonText = 'Show less';
    } else {
      this.setState({ questionsDisplayed: 2 });
      this.state.collapsed = true;
      this.state.showButtonText = 'Show more';
    }
  }

  render() {
    const questionList = this.props.currentProductQuestions.slice(0, this.state.questionsDisplayed);
    return (
      <div>
        {questionList.map((question, index) => (
          <div key={index}>
            <Question question={question} />
          </div>
        ))}
        <button onClick={this.handleShowMore}>{this.state.showButtonText}</button>
      </div>
    );
  }
}

export default QuestionView;
