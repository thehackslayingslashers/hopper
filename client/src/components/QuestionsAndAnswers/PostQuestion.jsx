import React from 'react';
import axios from 'axios';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postQuestionFieldValue: '',
      postEmailFieldValue: '',
      postUsernameFieldValue: '',
      postQuestionContainerDisplay: { display: 'none' },
      addAQuestionButtonDisplay: { diplay: 'inline' },
    };

    this.handleAddAQuestionButtonClick = this.handleAddAQuestionButtonClick.bind(this);
    this.handleGetQuestionBodyValue = this.handleGetQuestionBodyValue.bind(this);
    this.handleGetEmailValue = this.handleGetEmailValue.bind(this);
    this.handleGetUsernameValue = this.handleGetUsernameValue.bind(this);
    this.handleSubmitPostQuestion = this.handleSubmitPostQuestion.bind(this);
  }

  handleAddAQuestionButtonClick(e) {
    e.preventDefault();
    this.setState({ postQuestionContainerDisplay: { display: 'flex' } });
    this.setState({ addAQuestionButtonDisplay: { display: 'none' } });
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
    // console.log(this.state.postQuestionFieldValue);'
    const productId = this.props.currentItemId;
    var usernameField = this.state.postUsernameFieldValue;
    var emailField = this.state.postEmailFieldValue;
    var questionField = this.state.postQuestionFieldValue;
    if (usernameField.length > 3 && emailField.length > 3 && questionField.length > 3) {
      var questionPostRequest = {
        body: questionField,
        name: usernameField,
        email: emailField,
        product_id: productId,
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
    return (
      <div className="post-question-container">
        <button
          className="add-a-question-button"
          onClick={this.handleAddAQuestionButtonClick}
          style={this.state.addAQuestionButtonDisplay}
        >
          ADD A QUESTION +
        </button>
        <div style={this.state.postQuestionContainerDisplay}>
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
      </div>
    );
  }
}

export default PostQuestion;
