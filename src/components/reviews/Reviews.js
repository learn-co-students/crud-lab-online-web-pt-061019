import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props.reviews)

    // restaurantId={this.props.restaurant.id}

    let allReviews = this.props.reviews.filter(review => review.restaurantId == this.props.restaurantId)
    return (
      <ul>
        {allReviews.map(r => <Review review={r} key={r} deleteReview={this.props.deleteReview}/>)}
      </ul>
    );
  }
};

export default Reviews;
