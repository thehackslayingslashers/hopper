import React from 'react';
import TarrinsClass from './TarrinsClass';
import LModule from './LModule';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>App is Loading</p>

        <TarrinsClass />
        <LModule />
      </div>
    );
  }
}

export default App;
