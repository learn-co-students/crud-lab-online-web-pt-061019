import React, { Component } from 'react';

class Review extends Component {

  render() {
    // console.log(text)
    // const { review } = this.props

    // console.log(this.props.review) // {text: "111", id: "ck9kegw7900013h5zt6r8d3lc", restaurantId: "ck9kegv5x00003h5zdva22jt5"}

    // let allReviews = this.props.review.filter(review.restaurantId == )

    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button> X </button>
      </div>
    );
  }

};

export default Review;
