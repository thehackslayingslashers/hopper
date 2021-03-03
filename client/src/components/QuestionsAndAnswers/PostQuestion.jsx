import React from 'react';

class PostQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postQuestionFieldValue: '',
      questionToPost: {
        body: '',
        name: '',
        email: '',
        product_id: '',
      },
    };

    this.handleGetPostQuestionFieldValue = this.handleGetPostQuestionFieldValue.bind(this);
    this.handleSubmitPostQuestion = this.handleSubmitPostQuestion.bind(this);
  }

  handleGetPostQuestionFieldValue(e) {
    this.setState({ postQuestionFieldValue: e.target.value });
    e.target.value = '';
  }

  handleSubmitPostQuestion() {
    // console.log(this.state.postQuestionFieldValue);
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`);
    return;
  }

  render() {
    return (
      <div>
        Post Question Here:
        <input
          className="post-question-field"
          type="text"
          onChange={this.handleGetPostQuestionFieldValue}
        ></input>
        <button onClick={this.handleSubmitPostQuestion}>Post Question</button>
      </div>
    );
  }
}

export default PostQuestion;
