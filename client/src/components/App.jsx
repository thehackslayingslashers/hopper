import React from 'react';
import TarrinsClass from './TarrinsClass';
import JClass from './JClass';
import LModule from './LModule';
import Gareth from './GarethsPart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>App is Loading</p>

        <TarrinsClass />
        <JClass />
        <LModule />
        <Gareth />
      </div>
    );
  }
}

export default App;
