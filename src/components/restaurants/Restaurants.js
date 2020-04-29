import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return(
      <ul>
        {this.props.restaurants.map(r => <Restaurant restaurant={r} deleteRestaurant={deleteRestaurant} key={r.id}/>)}
      </ul>
    );
  }
};

export default Restaurants;
