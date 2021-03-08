import React from 'react';
import axios from 'axios';

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAnswerFieldValue: '',
      postEmailFieldValue: '',
      postUsernameFieldValue: '',
      postPhotosArray: [],
      postAnswerErrorDisplay: { display: 'none' },
      postAnswerFieldDisplay: { display: 'none' },
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
    const { currentQuestionId } = this.props;
    const { postUsernameFieldValue, postEmailFieldValue, postAnswerFieldValue } = this.state;
    if (
      postUsernameFieldValue.length > 3 &&
      postEmailFieldValue.length > 3 &&
      postAnswerFieldValue.length > 3
    ) {
      this.setState({ postAnswerErrorDisplay: { display: 'none' } });
      let answerPostRequest = {
        body: postAnswerFieldValue,
        name: postUsernameFieldValue,
        email: postEmailFieldValue,
        question_id: currentQuestionId,
        photos: [],
      };
      axios({
        method: 'post',
        url: `/qa/questions/${currentQuestionId}/answers/`,
        data: answerPostRequest,
      })
        .then(() => {
          this.props.revertFieldDisplay();
          this.setState({
            postAnswerErrorDisplay: { display: 'none' },
          });
        })
        .catch((error) => {
          throw error;
        });
    } else {
      this.setState({ postAnswerErrorDisplay: { display: 'flex' } });
    }
  }

  render() {
    const { postAnswerFieldDisplay } = this.props;
    const { postAnswerErrorDisplay } = this.state;
    return (
      <div>
        <div className="post-answer-container" style={postAnswerFieldDisplay}>
          Post Answer Here: <input type="text" onChange={this.handleGetAnswerFieldValue} />
          Username: <input type="text" onChange={this.handleGetUsernameFieldValue} />
          Email: <input type="text" onChange={this.handleGetEmailFieldValue} />
          Photos:
          <div className="post-photos-field">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button onClick={this.handleSubmitPostAnswer}>Post Answer</button>
        </div>
        <div className="post-answer-error" style={postAnswerErrorDisplay}>
          Please fill out all fields
        </div>
      </div>
    );
  }
}

export default PostAnswer;
