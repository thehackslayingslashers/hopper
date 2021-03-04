import React from 'react';
import Answer from './Answer.jsx';
import PostAnswer from './PostAnswer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answersDisplayed: 2,
      answersCollapsed: true,
      showMoreAnswersButtonText: 'Show more Answers',
    };

    this.handleShowMoreAnswers = this.handleShowMoreAnswers.bind(this);
  }

  handleShowMoreAnswers() {
    const answerListLength = this.props.answers.length;
    if (this.state.answersCollapsed) {
      this.setState({ answersDisplayed: answerListLength });
      this.setState({ answersCollapsed: false });
      this.setState({ showMoreAnswersButtonText: 'Show less answers' });
    } else {
      this.setState({ answersDisplayed: 2 });
      this.setState({ answersCollapsed: true });
      this.setState({ showMoreAnswersButtonText: 'Show more answers' });
    }
  }

  render() {
    const keyArray = Object.keys(this.props.answers);
    const slicedKeyArray = keyArray.slice(0, this.state.answersDisplayed);
    return (
      <div id="answers-container">
        {slicedKeyArray.map((answerId, index) => (
          <div key={index}>
            <Answer
              answerId={answerId}
              answers={this.props.answers}
              answersDisplayed={this.state.answersDisplayed}
              currentQuestion={this.props.currentQuestion}
            />
          </div>
        ))}
        <button onClick={this.handleShowMoreAnswers}>{this.state.showMoreAnswersButtonText}</button>
        <PostAnswer currentQuestionId={this.props.currentQuestion.question_id} />
      </div>
    );
  }
}

export default AnswerList;
