import React from 'react';

class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerFieldValue : ''
    }
  }

  render () {
    return(<div>Post Answer Here: <input type="text"></input></div>)
  }
}

export default AnswerQuestion;