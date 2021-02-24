import React from 'react';
import TarrinsClass from './TarrinsClass';
import LModule from './LModule';
import Gareth from './GarethsPart';

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
