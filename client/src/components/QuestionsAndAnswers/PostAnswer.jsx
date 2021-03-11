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
      photoInput4: '',
      photoInput5: '',
      postPhotosArray: [],
      postAnswerErrorDisplay: { display: 'none' },
      postAnswerFieldDisplay: false,
      photoUploadInputsDisplayed: 1,
    };

    this.handleSubmitPostAnswer = this.handleSubmitPostAnswer.bind(this);
    this.handleGetAnswerFieldValue = this.handleGetAnswerFieldValue.bind(this);
    this.handleGetEmailFieldValue = this.handleGetEmailFieldValue.bind(this);
    this.handleGetUsernameFieldValue = this.handleGetUsernameFieldValue.bind(this);
    this.handleGetPhotoInput1 = this.handleGetPhotoInput1.bind(this);
    this.handleGetPhotoInput2 = this.handleGetPhotoInput2.bind(this);
    this.handleGetPhotoInput3 = this.handleGetPhotoInput3.bind(this);
    this.handleGetPhotoInput4 = this.handleGetPhotoInput4.bind(this);
    this.handleGetPhotoInput5 = this.handleGetPhotoInput5.bind(this);
    this.handleAddPhotoInput = this.handleAddPhotoInput.bind(this);
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
  handleGetPhotoInput4(e) {
    this.setState({ photoInput4: e.target.value });
  }
  handleGetPhotoInput5(e) {
    this.setState({ photoInput5: e.target.value });
  }

  handleSubmitPostAnswer(e) {
    e.preventDefault();
    const { currentQuestionId, getCurrentProductQuestionsAndAnswers } = this.props;
    const {
      postUsernameFieldValue,
      postEmailFieldValue,
      postAnswerFieldValue,
      photoInput1,
      photoInput2,
      photoInput3,
      photoInput4,
      photoInput5,
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
      if (photoInput4 !== '') {
        postPhotosArray.push(photoInput4);
      }
      if (photoInput5 !== '') {
        postPhotosArray.push(photoInput5);
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
          getCurrentProductQuestionsAndAnswers();
        })
        .catch((error) => {
          throw error;
        });
    } else {
      this.setState({ postAnswerErrorDisplay: { display: 'flex' } });
    }
  }

  handleAddPhotoInput() {
    const { photoUploadInputsDisplayed } = this.state;
    if (photoUploadInputsDisplayed < 6) {
      this.setState({ photoUploadInputsDisplayed: photoUploadInputsDisplayed + 1 });
    }
  }
  render() {
    // const { postAnswerFieldDisplay } = this.props;
    const { postAnswerErrorDisplay, photoUploadInputsDisplayed } = this.state;
    return (
      <div>
        <div className="post-answer-container">
          <div
            className="close-post-answer-container"
            onClick={() => {
              this.props.revertFieldDisplay();
            }}
          >
            <i className="fas fa-window-close" />
          </div>
          <div className="post-answer-text-fields">
            Post Answer Here:{' '}
            <input
              className="post-answer-body"
              type="text"
              onChange={this.handleGetAnswerFieldValue}
            />
            Username:{' '}
            <input
              className="post-answer-username"
              type="text"
              onChange={this.handleGetUsernameFieldValue}
            />
            Email:{' '}
            <input
              className="post-answer-email"
              type="text"
              onChange={this.handleGetEmailFieldValue}
            />
          </div>
          Photos:
          <div className="post-photos-field">
            <input
              className="answer-photo-input"
              type="text"
              placeholder="photo-url-here!"
              onChange={this.handleGetPhotoInput1}
            />
            {photoUploadInputsDisplayed > 1 && (
              <input
                className="answer-photo-input"
                type="text"
                placeholder="photo-url-here!"
                onChange={this.handleGetPhotoInput2}
              />
            )}
            {photoUploadInputsDisplayed > 2 && (
              <input
                className="answer-photo-input"
                type="text"
                placeholder="photo-url-here!"
                onChange={this.handleGetPhotoInput3}
              />
            )}
            {photoUploadInputsDisplayed > 3 && (
              <input
                className="answer-photo-input"
                type="text"
                placeholder="photo-url-here!"
                onChange={this.handleGetPhotoInput4}
              />
            )}
            {photoUploadInputsDisplayed > 4 && (
              <input
                className="answer-photo-input"
                type="text"
                placeholder="photo-url-here!"
                onChange={this.handleGetPhotoInput5}
              />
            )}
          </div>
          <button className="post-photo-button" onClick={this.handleAddPhotoInput}>
            Upload another photo
          </button>
          <button className="post-answer-button" onClick={this.handleSubmitPostAnswer}>
            Post Answer
          </button>
          <div className="post-answer-error" style={postAnswerErrorDisplay}>
            Please fill out all fields
          </div>
        </div>
      </div>
    );
  }
}

export default PostAnswer;
