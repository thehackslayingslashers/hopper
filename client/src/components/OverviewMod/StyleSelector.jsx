import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemStyles, selectedStyleIndex, handleStyleSelection } = this.props;
    let styleItems = 'Loading';
    let index = 0;

    if (currentItemStyles && currentItemStyles[0]) {
      styleItems = [
        <div key="styleName" id="selectedStyleName">
          <strong>{'STYLE >'}</strong>
          {' '}
          {currentItemStyles[selectedStyleIndex].name.toUpperCase()}
        </div>,
      ];

      styleItems = styleItems.concat(
        currentItemStyles.map((style) => {
          let url = style.photos[0].thumbnail_url;
          if (url[0] !== 'h') {
            url = url.substr(1);
          }

          const button = (
            <button
              type="submit"
              index={index}
              alt={style.name}
              className="overviewStyleItem"
              style={{ backgroundImage: `url(${url})` }}
              // src={url}
              onClick={handleStyleSelection}
              onKeyDown={handleStyleSelection}
            />
          );
          let selectedCheck = null;
          if (selectedStyleIndex === index) {
            selectedCheck = <MdCheckCircle className="selectedCheck" />;
          }
          const styleImage = (
            <div key={style.name + style.style_id} className="overviewStyleItemContainer">
              {button}
              {selectedCheck}
            </div>
          );

          index++;
          return styleImage;
        }),
      );
    }
    return <div id="overviewStyleSelector">{styleItems}</div>;
  }
}

export default StyleSelector;
