import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantArray = restaurants.map((r) => {
      return (
        <Restaurant
          key={r.id}
          restaurant={r}
          deleteRestaurant={deleteRestaurant}
        />
      );
    });

    return <ul>{restaurantArray}</ul>;
  }
}

export default Restaurants;
