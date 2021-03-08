import React from 'react';
import axios from 'axios';

class PostAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postAnswerFieldValue: '',
      postEmailFieldValue: '',
      postUsernameFieldValue: '',
      photoInput1: '',
      photoInput2: '',
      photoInput3: '',
      postPhotosArray: [],
      postAnswerErrorDisplay: { display: 'none' },
      postAnswerFieldDisplay: { display: 'none' },
    };

    this.handleSubmitPostAnswer = this.handleSubmitPostAnswer.bind(this);
    this.handleGetAnswerFieldValue = this.handleGetAnswerFieldValue.bind(this);
    this.handleGetEmailFieldValue = this.handleGetEmailFieldValue.bind(this);
    this.handleGetUsernameFieldValue = this.handleGetUsernameFieldValue.bind(this);
    this.handleGetPhotoInput1 = this.handleGetPhotoInput1.bind(this);
    this.handleGetPhotoInput2 = this.handleGetPhotoInput2.bind(this);
    this.handleGetPhotoInput3 = this.handleGetPhotoInput3.bind(this);
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
  handleGetPhotoInput1(e) {
    this.setState({ photoInput1: e.target.value });
  }
  handleGetPhotoInput2(e) {
    this.setState({ photoInput2: e.target.value });
  }
  handleGetPhotoInput3(e) {
    this.setState({ photoInput3: e.target.value });
  }

  handleSubmitPostAnswer(e) {
    e.preventDefault();
    const { currentQuestionId } = this.props;
    const {
      postUsernameFieldValue,
      postEmailFieldValue,
      postAnswerFieldValue,
      photoInput1,
      photoInput2,
      photoInput3,
      postPhotosArray,
    } = this.state;
    if (
      postUsernameFieldValue.length > 3 &&
      postEmailFieldValue.length > 3 &&
      postAnswerFieldValue.length > 3
    ) {
      this.setState({ postAnswerErrorDisplay: { display: 'none' } });
      if (photoInput1 !== '') {
        postPhotosArray.push(photoInput1);
      }
      if (photoInput2 !== '') {
        postPhotosArray.push(photoInput2);
      }
      if (photoInput3 !== '') {
        postPhotosArray.push(photoInput3);
      }

      let answerPostRequest = {
        body: postAnswerFieldValue,
        name: postUsernameFieldValue,
        email: postEmailFieldValue,
        question_id: currentQuestionId,
        photos: postPhotosArray,
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
            <input
              className="answer-photo-input"
              type="text"
              placeholder="photo-url-here!"
              onChange={this.handleGetPhotoInput1}
            />
            <input
              className="answer-photo-input"
              type="text"
              placeholder="photo-url-here!"
              onChange={this.handleGetPhotoInput2}
            />
            <input
              className="answer-photo-input"
              type="text"
              placeholder="photo-url-here!"
              onChange={this.handleGetPhotoInput3}
            />
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
