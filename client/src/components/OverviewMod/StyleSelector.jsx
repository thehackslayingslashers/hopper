import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentItemStyles, selectedStyleIndex, handleStyleSelection, darkMode } = this.props;
    let styleItems = '';
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

          if (url && url[0] !== 'h') {
            url = url.substr(1);
          }

          const styles = { backgroundImage: `url(${url})` };

          const button = (
            <button
              type="submit"
              index={index}
              alt={style.name}
              className={darkMode ? "overviewStyleItem darkMode" : "overviewStyleItem"}
              style={url ? styles : null}
              // src={url}
              onClick={handleStyleSelection}
              onKeyDown={handleStyleSelection}
            >
              {url ? null : 'No Image'}
            </button>
          );
          let selectedCheck = null;
          if (selectedStyleIndex === index) {
            selectedCheck = <MdCheckCircle className={darkMode ? "selectedCheck darkMode" : "selectedCheck"} />;
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
