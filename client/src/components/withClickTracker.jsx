import React from 'react';

const withClickTracker = (Component) => {
  class temp extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    onClickAnywhere(e) {
      console.log('The Government is watching you');
    }

    render() {
      return <Component onClickAnywhere={this.onClickAnywhere} />;
    }
  }

  return temp;
};

export default withClickTracker;
