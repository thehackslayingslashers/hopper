import React from 'react';
import axios from 'axios';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    const { helpfulness } = this.props;
    this.state = {
      numberHelpful: helpfulness,
    };
    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount() {
    const { reviewId } = this.props;
    const { numberHelpful } = this.state;

    const body = {
      id: reviewId,
    };

    axios.post('/helpful', body)
      .then(() => {
        this.setState({
          numberHelpful: numberHelpful + 1,
        });
      });
  }

  render() {
    const { numberHelpful } = this.state;

    return (
      <div
        className="helpfulness"
        onClick={this.incrementHelpfulCount}
      >
        Helpful? Yes (
        {numberHelpful}
        )
      </div>
    );
  }
}

export default Helpful;
