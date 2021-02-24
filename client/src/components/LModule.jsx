import React from 'react';

class LModule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      something: []
    }
  }

  render() {
    return (<div class='LModule'>Lerroy's Module goes here</div>)
  }
}

export default LModule;