/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';

const withClickTracker = (WrappedComponent) => {
  class WithClickTracker extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    onClickAnywhere(e) {
      console.log('Your FBI agent says hi!');
      console.log(WrappedComponent.name, new Date(), e.target);
      const data = {
        widget: WrappedComponent.name,
        date: new Date(),
        element: JSON.stringify(e.target),
      };
      axios({
        url: '/interactions',
        method: 'post',
        data,
      });
    }

    render() {
      return <WrappedComponent onClickAnywhere={this.onClickAnywhere} {...this.props} />;
    }
  }

  return WithClickTracker;
};

export default withClickTracker;
