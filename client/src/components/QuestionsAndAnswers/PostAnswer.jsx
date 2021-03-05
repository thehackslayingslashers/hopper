import React from 'react';

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAnswerFieldValue: '',
      postEmailFieldValue: '',
      postUsernameFieldValue: '',
      postAnswerErrorDisplay: { display: 'none' },
    };

    this.handleSubmitPostAnswer = this.handleSubmitPostAnswer.bind(this);
    this.handleGetAnswerFieldValue = this.handleGetAnswerFieldValue.bind(this);
    this.handleGetEmailFieldValue = this.handleGetEmailFieldValue.bind(this);
    this.handleGetUsernameFieldValue = this.handleGetUsernameFieldValue.bind(this);
  }
  handleGetAnswerFieldValue(e) {
    this.setState({ postAnswerFieldValue: e.target.value });
  }
  handleGetUsernameFieldValue(e) {
    this.setState({ postUsernameFieldValue: e.target.value });
  }
  handleGetEmailFieldValue(e) {
    this.setState({ postEmailFieldValue: e.target.value });
  }

  handleSubmitPostAnswer(e) {
    e.preventDefault();
    const currentQuestionId = this.props.currentQuestionId;
    var usernameField = this.state.postUsernameFieldValue;
    var emailField = this.state.postEmailFieldValue;
    var answerField = this.state.postAnswerFieldValue;
    if (usernameField.length > 3 && emailField.length > 3 && answerField.length > 3) {
      this.setState({ postAnswerErrorDisplay: { display: 'none' } });
      console.log(currentQuestionId, usernameField, emailField, answerField);
    } else {
      this.setState({ postAnswerErrorDisplay: { display: 'flex' } });
    }
  }

  render() {
    return (
      <div>
        <div className="post-answer-container" style={this.props.postAnswerFieldDisplay}>
          Post Answer Here: <input type="text" onChange={this.handleGetAnswerFieldValue} />
          Username: <input type="text" onChange={this.handleGetUsernameFieldValue} />
          Email: <input type="text" onChange={this.handleGetEmailFieldValue} />
          <button onClick={this.handleSubmitPostAnswer}>Post Answer</button>
        </div>
        <div className="post-answer-error" style={this.state.postAnswerErrorDisplay}>
          Please fill out all fields
        </div>
      </div>
    );
  }
}

export default PostAnswer;
