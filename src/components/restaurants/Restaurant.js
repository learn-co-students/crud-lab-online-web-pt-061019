import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    // console.log(this.props)
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    const { restaurant, addReview } = this.props;

    return (
        <li>
          {restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant} />
        </li>
    );
  }
};

export default Restaurant;
