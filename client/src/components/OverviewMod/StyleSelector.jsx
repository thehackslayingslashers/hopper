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

    if (currentItemStyles && currentItemStyles[0]) {
      styleItems = [
        <div key="styleName" id="selectedStyleName">
          <strong>STYLE ></strong> {currentItemStyles[selectedStyleIndex].name.toUpperCase()}
        </div>,
      ];
      styleItems = styleItems.concat(
        currentItemStyles.map((style) => {
          return (
            <img
              key={style.name + style.style_id}
              index={index++}
              className="overviewStyleItem"
              src={style.photos[0].thumbnail_url}
              onClick={handleStyleSelection}
            />
          );
        })
      );
    } else {
      //error
    }
    return <div id="overviewStyleSelector">{styleItems}</div>;
  }
}

export default StyleSelector;
