import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemInfo, currentItemAverageRating } = this.props;
    return (
      <div id="overviewBasicInfo">
        <p>{currentItemAverageRating}</p>
        <p>{currentItemInfo.category}</p>
        <p>{currentItemInfo.name}</p>
        <p>{'$' + currentItemInfo.default_price}</p>
      </div>
    );
  }
}

export default BasicInfo;
