import React from 'react';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postQuestionFieldValue: '',
    };

    this.handleGetPostQuestionFieldValue = this.handleGetPostQuestionFieldValue.bind(this);
    this.handleSubmitPostQuestion = this.handleSubmitPostQuestion.bind(this);
  }

  handleGetPostQuestionFieldValue(e) {
    this.setState({ postQuestionFieldValue: e.target.value });
  }

  handleSubmitPostQuestion() {
    console.log(this.state.postQuestionFieldValue);
  }

  render() {
    return (
      <div>
        Post Question Here:
        <input type="text" onChange={this.handleGetPostQuestionFieldValue}></input>
        <button onClick={this.handleSubmitPostQuestion}>Post Question</button>
      </div>
    );
  }
}

export default PostQuestion;
