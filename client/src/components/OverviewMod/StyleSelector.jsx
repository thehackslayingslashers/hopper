import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { currentItemStyles } = this.props;
    // debugger;
    if (currentItemStyles && currentItemStyles[0]) {
      let styleItems = currentItemStyles.map((style) => {
        return (
          <div key={style.name + style.style_id} className="overviewStyleItem">
            {style.name}
          </div>
        );
      });
      return <div id="overviewStyleSelector">{styleItems}</div>;
    } else {
      return <div id="overviewStyleSelector">Loading</div>;
    }
  }
}

export default StyleSelector;
