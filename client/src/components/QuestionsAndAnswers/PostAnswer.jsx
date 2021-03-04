import React from 'react';

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerFieldValue: '',
    };

    this.handleSubmitPostAnswer = this.handleSubmitPostAnswer.bind(this);
  }

  handleSubmitPostAnswer(e) {}

  render() {
    return (
      <div>
        Post Answer Here: <input type="text"></input>
      </div>
    );
  }
}

export default PostAnswer;
