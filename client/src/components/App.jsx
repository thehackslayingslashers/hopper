import React from 'react';
import TarrinsClass from './TarrinsClass';
import JClass from './JohnathansClass';
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
        <JClass />
        <LModule />
      </div>
    );
  }
}

export default App;
