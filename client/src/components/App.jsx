import React from 'react';
import TarrinsClass from './TarrinsClass'

class App extends React.Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <p>App is Loading</p>

        <TarrinsClass />
      </div>
    )
  }
}

export default App;