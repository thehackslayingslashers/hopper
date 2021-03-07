import React from 'react';
import axios from 'axios';

class Helpful extends React.Component {
  constructor(props) {
    super(props);
    const { helpfulness } = this.props;
    this.state = {
      numberHelpful: helpfulness,
      allowClick: true,
    };
    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount() {
    const { reviewId } = this.props;
    const { numberHelpful, allowClick } = this.state;

    const body = {
      id: reviewId,
    };

    axios.post('/helpful', body)
      .then(() => {
        this.setState({
          numberHelpful: numberHelpful + 1,
          allowClick: !allowClick,
        });
      });
  }

  render() {
    const { numberHelpful, allowClick } = this.state;

    return (
      <div>
        {allowClick && (
        <div
          className="helpfulness"
          onClick={this.incrementHelpfulCount}
        >
          Helpful? Yes (
          {numberHelpful}
          )
        </div>
        )}
        {(!allowClick) && (
        <div>
          Helpful? Yes (
          {numberHelpful}
          )
        </div>
        )}
      </div>
    );
  }
}

export default Helpful;
