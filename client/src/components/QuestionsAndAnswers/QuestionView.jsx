import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDisplayed: 2,
    };
  }

  render() {
    const questionList = this.props.currentProductQuestions.slice(0, this.state.questionsDisplayed);
    return (
      <div>
        {questionList.map((question, index) => (
          <Question key={index} question={question} />
        ))}
        <button>Show More</button>
      </div>
    );
  }
}

export default QuestionView;
