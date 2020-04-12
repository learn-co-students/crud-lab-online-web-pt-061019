import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props;
    const restaurantReview = reviews.filter(
      review => review.restaurantId === restaurantId
    )
    const allReviews = restaurantReview.map(review => {
      return <Review 
        key={review.id}
        review={review}
        deleteReview={deleteReview}
      />
    })
    return (
      <ul>
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;