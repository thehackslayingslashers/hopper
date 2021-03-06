import React from 'react';

class SortingHeader extends React.Component {
  constructor(props) {
    super(props);
    const { sortedBy } = this.props;
    this.state = {
      sortedBy,
      sortOptions: ['relevent', 'newest', 'helpful'],
      displayList: false,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { sortedBy } = this.props;
    if (this.props !== prevProps) {
      this.setState({
        sortedBy,
      });
    }
  }

  onSelect(e, listElementChosen) {
    const { displayList } = this.state;
    const { selectHandler } = this.props;
    if (listElementChosen) {
      selectHandler(e.target.innerText);
    }
    this.setState({
      displayList: !displayList,
    });
  }

  render() {
    const { sortedBy, sortOptions, displayList } = this.state;
    const { reviewsLength } = this.props;
    return (
      <div className="Sorting">
        <h2>
          {`${reviewsLength} `}
          reviews, sorted by most
          {!displayList && (
            <span
              className="currentSort"
              onClick={(event) => {
                this.onSelect(event, false);
              }}
            >
              {` ${sortedBy}`}
              &#9650;
            </span>
          )}
          {displayList && (
            <ul
              className="sortingList"
              onClick={(event) => {
                this.onSelect(event, true);
              }}
            >
              {sortOptions.map((sortOp, index) => {
                if (sortOp !== sortedBy) {
                  return (
                    <li key={index}>
                      <span>{sortOp}</span>
                    </li>
                  );
                }
              })}
              <li>
                <span>{sortedBy}</span>
              </li>
            </ul>
          )}
        </h2>
      </div>
    );
  }
}

export default SortingHeader;
