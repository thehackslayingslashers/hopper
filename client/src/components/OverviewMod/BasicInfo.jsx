import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemInfo, currentItemAverageRating } = this.props;

    if (currentItemInfo.name) {
      return (
        <div id="overviewBasicInfo">
          <p>{currentItemAverageRating + ' stars, link to all reviews'}</p>
          <p>{currentItemInfo.category.toUpperCase()}</p>
          <h1>{currentItemInfo.name}</h1>
          <p>{'$' + currentItemInfo.default_price}</p>
        </div>
      );
    } else {
      return <div id="overviewBasicInfo">Loading</div>;
    }
  }
}

export default BasicInfo;
