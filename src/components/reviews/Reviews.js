import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    // const { restaurants, deleteRestaurant } = this.props;
    const restaurantReview = reviews.filter(
      (rev) => rev.restaurantId === restaurantId,
    );

    const reviewsArray = restaurantReview.map((r) => {
      return <Review key={r.id} review={r} deleteReview={deleteReview} />;
    });
    return <ul>{reviewsArray}</ul>;
  }
}

export default Reviews;
