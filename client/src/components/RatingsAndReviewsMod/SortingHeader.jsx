import React from 'react';

class SortingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: this.props.sortedBy,
      sortOptions: ['relevent', 'newest', 'helpful'],
      displayList: false,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        sortedBy: this.props.sortedBy,
      });
    }
  }

  onSelect(e, listElementChosen) {
    if (listElementChosen) {
      this.props.selectHandler(e.target.innerText);
    }
    this.setState({
      displayList: !this.state.displayList,
    });
  }

  render() {
    return (
      <div className="Sorting">
        <h2>
          {`${this.props.reviewsLength} `}
          reviews, sorted by most
          {!this.state.displayList && (
            <span
              className="currentSort"
              onClick={(event) => {
                this.onSelect(event, false);
              }}
            >
              {` ${this.state.sortedBy}`}
              &#9650;
            </span>
          )}
          {this.state.displayList && (
            <ul
              className="sortingList"
              onClick={(event) => {
                this.onSelect(event, true);
              }}
            >
              {this.state.sortOptions.map((sortOp, index) => {
                if (sortOp !== this.state.sortedBy) {
                  return (
                    <li key={index}>
                      <span>{sortOp}</span>
                    </li>
                  );
                }
              })}
              <li>
                <span>{this.state.sortedBy}</span>
              </li>
            </ul>
          )}
        </h2>
      </div>
    );
  }
}

export default SortingHeader;
