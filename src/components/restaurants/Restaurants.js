import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        Restaurants Component
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
