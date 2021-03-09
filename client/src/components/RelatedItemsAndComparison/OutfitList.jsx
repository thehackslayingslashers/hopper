import React from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import OutfitCard from './OutfitCard';
import AddOutfitCard from './AddOutfitCard';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outfitIds: [],
      outfits: [],
      slidePosition: 0,
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleResetCarousel = this.handleResetCarousel.bind(this);
  }

  componentDidMount() {
    const track = document.querySelector('.carousel-slide');
    const slides = Array.from(track.children);
    console.log(track)
    console.log(slides)
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log(slideWidth)
    const storedOutfitIds = JSON.parse(window.localStorage.getItem('outfitIds'));
    const storedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    if (storedOutfits !== null) {
      storedOutfits.map((product) => {
        const currentPhoto = product.styles[0].photos[0];
        if (currentPhoto.url === null) {
          currentPhoto.url = 'https://www.luvbat.com/uploads/happy_frog__9265232477.jpg';
        } else if (currentPhoto.url[0] !== 'h') {
          currentPhoto.url = currentPhoto.url.substr(1);
        }
        return null;
      });
      this.setState({
        outfitIds: storedOutfitIds,
        outfits: storedOutfits,
      }, () => {
        console.log(this.state)
      });
    }
  }

  handleResetCarousel() {
    const { slidePosition } = this.state;
    if (slidePosition > 0) {
      const track = document.querySelector('.outfit-slide');
      track.style.transform = 'translateX(-' + 0 + 'px' + ')';
      this.setState({
        slidePosition: 0,
      });
    }
  }

  handleAddClick() {
    const { outfitIds, outfits } = this.state;
    const { currentItem } = this.props;
    if (!outfitIds.includes(currentItem.id)) {
      this.setState((prevState) => {
        prevState.outfitIds.push(currentItem.id);
        prevState.outfits.push(currentItem);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(outfits));
      });
    }
  }

  handleDeleteClick(item, { outfitIds, outfits } = this.state) {
    if (outfitIds.includes(item.id)) {
      this.setState((prevState) => {
        const indexToDelete = prevState.outfitIds.indexOf(item.id);
        prevState.outfitIds.splice(indexToDelete, 1);
        prevState.outfits.splice(indexToDelete, 1);
        return {
          outfitIds: prevState.outfitIds,
          outfits: prevState.outfits,
        };
      }, () => {
        window.localStorage.setItem('outfitIds', JSON.stringify(outfitIds));
        window.localStorage.setItem('outfits', JSON.stringify(outfits));
      });
    }
  }

  handleLeftClick(e) {
    const { slidePosition } = this.state;
    const track = document.querySelector('.outfit-slide');
    if (slidePosition - 264 >= 0) {
      const newPosition = slidePosition - 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      this.setState({
        slidePosition: newPosition,
      });
    }
  }

  handleRightClick() {
    const { slidePosition, outfits } = this.state;
    const track = document.querySelector('.outfit-slide');
    const numberOfCards = outfits.length + 1;
    console.log(numberOfCards)
    if (slidePosition + 264 <= (numberOfCards - 4) * 264) {
      const newPosition = slidePosition + 264;
      track.style.transform = 'translateX(-' + newPosition + 'px' + ')';
      this.setState({
        slidePosition: newPosition,
      });
    }
  }

  render() {
    const { outfits } = this.state;
    const { handleCardClick } = this.props;
    return (
      <div>
        <h2>Your Outfit</h2>
        <div className="carousel-wrapper">
          <p className="carousel-left-button" onClick={this.handleLeftClick}><BiLeftArrow /></p>
          <div className="carousel-track outfit-carousel">
            <div className="carousel-slide outfit-slide">
              <AddOutfitCard
                handleAddClick={this.handleAddClick}
              />
              {
                outfits.map((outfitItem) => (
                  <OutfitCard
                    outfitItem={outfitItem}
                    handleDeleteClick={this.handleDeleteClick}
                    handleCardClick={handleCardClick}
                    handleResetCarousel={this.handleResetCarousel}
                    key={'outfit' + outfitItem.id}
                  />
                ))
              }
            </div>
          </div>
            <p className="carousel-right-button" onClick={this.handleRightClick}><BiRightArrow /></p>
        </div>
      </div>
    );
  }
}

export default OutfitList;
