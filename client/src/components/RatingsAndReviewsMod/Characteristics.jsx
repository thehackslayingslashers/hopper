import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingChosen: 0,
    };
  }

  styleChanger(number) {
    const { ratingChosen } = this.state;
    if (number === ratingChosen) {
      return ({
        backgroundColor: '#0083a8',
      });
    }
    this.chosenUpdater = this.chosenUpdater.bind(this);
  }

  chosenUpdater(number) {
    const { characteristicUpdater, characteristic } = this.props;
    number = Number(number);
    this.setState({
      ratingChosen: number,
    });
    characteristicUpdater(characteristic, number);
  }

  render() {
    const { characteristic, description } = this.props;
    const { ratingChosen } = this.state;
    return (
      <div
        className="question3Option"
        onClick={(event) => {
          this.chosenUpdater(event.target.innerText);
        }}
      >
        {characteristic}
        :&nbsp;
        <button type="button" style={this.styleChanger(1)}>1</button>
        &nbsp;
        <button type="button" style={this.styleChanger(2)}>2</button>
        &nbsp;
        <button type="button" style={this.styleChanger(3)}>3</button>
        &nbsp;
        <button type="button" style={this.styleChanger(4)}>4</button>
        &nbsp;
        <button type="button" style={this.styleChanger(5)}>5</button>
        &nbsp;
        <div>{description[ratingChosen - 1]}</div>
      </div>
    );
  }
}

export default Characteristics;
