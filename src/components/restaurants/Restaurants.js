import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} deleteRestaurant={deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
