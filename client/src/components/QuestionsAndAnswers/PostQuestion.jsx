import React from 'react';

class PostQuestion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      postInputValue : ''
    }
  }

  render () {
    return(<div>Post Question Here: <input type="text"></input></div>);
  }
}

export default PostQuestion;