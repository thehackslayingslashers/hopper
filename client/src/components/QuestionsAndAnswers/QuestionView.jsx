import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import Question from './Question.jsx';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedQuestions: [],
    };
  }

  componentDidMount() {
    console.log(this.props.product);
  }

  render() {
    return (
      <div>
        Questions:
        <Question />
        <Question />
      </div>
    );
  }
}

export default QuestionView;
