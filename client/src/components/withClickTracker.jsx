/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    onClickAnywhere(e) {
      console.log('Your FBI agent says hi!');
    }

    render() {
      return <WrappedComponent onClickAnywhere={this.onClickAnywhere} {...this.props} />;
    }
  }

  return WithClickTracker;
};

export default withClickTracker;
