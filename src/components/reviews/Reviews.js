import React, { Component } from "react";
import Review from "./Review";

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    const relevantReviews = reviews.filter(
      (review) => review.restaurantId === restaurantId
    );
    const reviewComponents = relevantReviews.map((review) => (
      <Review key={review.id} review={review} deleteReview={deleteReview} />
    ));
    return <ul>{reviewComponents}</ul>;
  }
}

export default Reviews;
