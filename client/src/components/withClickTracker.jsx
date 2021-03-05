import React from 'react';

const withClickTracker = (Component) => {
  class temp extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    onClickAnywhere(e) {
      console.log('Your FBI agent says hi!');
    }

    render() {
      return <Component onClickAnywhere={this.onClickAnywhere} />;
    }
  }

  return temp;
};

export default withClickTracker;
