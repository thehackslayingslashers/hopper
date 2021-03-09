import React from 'react';
import axios from 'axios';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postQuestionFieldValue: '',
      postEmailFieldValue: '',
      postUsernameFieldValue: '',
    };
    this.handleGetQuestionBodyValue = this.handleGetQuestionBodyValue.bind(this);
    this.handleGetEmailValue = this.handleGetEmailValue.bind(this);
    this.handleGetUsernameValue = this.handleGetUsernameValue.bind(this);
    this.handleSubmitPostQuestion = this.handleSubmitPostQuestion.bind(this);
  }
  handleGetQuestionBodyValue(e) {
    this.setState({ postQuestionFieldValue: e.target.value });
  }
  handleGetEmailValue(e) {
    this.setState({ postEmailFieldValue: e.target.value });
  }
  handleGetUsernameValue(e) {
    this.setState({ postUsernameFieldValue: e.target.value });
  }

  handleSubmitPostQuestion(e) {
    e.preventDefault();
    const { currentItemId, onHandleAddAQuestionButtonClick } = this.props;
    const { postUsernameFieldValue, postEmailFieldValue, postQuestionFieldValue } = this.state;
    if (
      postUsernameFieldValue.length > 3 &&
      postEmailFieldValue.length > 3 &&
      postQuestionFieldValue.length > 3
    ) {
      onHandleAddAQuestionButtonClick();
      var questionPostRequest = {
        body: postQuestionFieldValue,
        name: postUsernameFieldValue,
        email: postEmailFieldValue,
        product_id: currentItemId,
      };
      axios({
        method: 'post',
        url: '/qa/questions/',
        data: questionPostRequest,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          throw error;
        });
    }
  }

  render() {
    const { onHandleAddAQuestionButtonClick } = this.props;
    return (
      <div className="post-question-container">
        <div className="post-question-header">
          <u>Post Your Question Here!</u>
        </div>
        <div className="post-question-fields-container">
          Post Question Body:
          <input
            className="post-question-field"
            type="text"
            onChange={this.handleGetQuestionBodyValue}
          />
          Username:
          <input
            className="post-username-field"
            type="text"
            onChange={this.handleGetUsernameValue}
          />
          Email:
          <input className="post-email-field" type="text" onChange={this.handleGetEmailValue} />
          <button onClick={this.handleSubmitPostQuestion}>Post Question</button>
        </div>
        <div
          className="close-post-question-container"
          onClick={() => {
            onHandleAddAQuestionButtonClick();
          }}
        >
          X
        </div>
      </div>
    );
  }
}

export default PostQuestion;
