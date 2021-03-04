import React from 'react';
import {
  RiTwitterLine,
  RiFacebookCircleLine,
  RiPinterestLine,
  RiDiscordLine,
  RiRedditLine,
  RiLinkedinLine,
} from 'react-icons/ri';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemInfo } = this.props;
    if (currentItemInfo.slogan) {
      return (
        <div id="overviewProductInformation">
          <h3>{currentItemInfo.slogan}</h3>
          <p>{currentItemInfo.description}</p>
          <RiTwitterLine className="smIcon" />
          <RiFacebookCircleLine className="smIcon" />
          <RiPinterestLine className="smIcon" />
          <RiDiscordLine className="smIcon" />
          <RiRedditLine className="smIcon" />
          <RiLinkedinLine className="smIcon" />
        </div>
      );
    }
    return <div id="overviewProductInformation">Loading</div>;
  }
}

export default ProductInformation;
