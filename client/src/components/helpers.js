const helpers = {

  calculateAverageRating: (
    ratings = this.state.currentItemRatingInfo.ratings,
    cb = (avg) => {
      this.setState({
        currentItemAverageRating: avg,
      });
    },
  ) => {
    let ratingNumbers = Object.keys(ratings);
    let sum = 0;
    let totalRatings = 0;
    for (let rating in ratings) {
      sum += Number(rating) * Number(ratings[rating]);
      totalRatings += Number(ratings[rating]);
    }

    cb((sum / totalRatings).toFixed(2));
  }
}

export default helpers;