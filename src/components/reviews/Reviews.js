import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const reviewList = restaurantReviews.map((r, index) => 
      <Review
        key={index}
        review={r}
        deleteReview={deleteReview}
        />)

    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;