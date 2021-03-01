import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { currentItemStyles, selectedStyleIndex, handleStyleSelection } = this.props;
    let styleItems = 'Loading';
    let index = 0;
    let selectedCheck = <div className="selectedCheck">✓</div>;

    if (currentItemStyles && currentItemStyles[0]) {
      styleItems = [
        <div key="styleName" id="selectedStyleName">
          <strong>STYLE ></strong> {currentItemStyles[selectedStyleIndex].name.toUpperCase()}
        </div>,
      ];
      styleItems = styleItems.concat(
        currentItemStyles.map((style) => {
          let styleImage = (
            <div>
              <img
                key={style.name + style.style_id}
                index={index}
                className="overviewStyleItem"
                src={style.photos[0].thumbnail_url}
                onClick={handleStyleSelection}
              />
            </div>
          );
          if (selectedStyleIndex === index) {
            styleImage = (
              <div>
                <img
                  key={style.name + style.style_id}
                  index={index}
                  className="overviewStyleItem"
                  src={style.photos[0].thumbnail_url}
                  onClick={handleStyleSelection}
                />
                {selectedCheck}
              </div>
            );
          }
          index++;
          return styleImage;
        })
      );
    } else {
      //error
    }
    return (
      <div id="overviewStyleSelector">
        {styleItems}
        {selectedCheck}
      </div>
    );
  }
}

export default StyleSelector;
