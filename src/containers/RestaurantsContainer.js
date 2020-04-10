import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
import { addRestaurant, deleteRestaurant } from "../actions/RestaurantActions";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          deleteRestaurant={this.props.deleteRestaurant}
          restaurants={this.props.restaurants}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ restaurants: state.restaurants });

export default connect(mapStateToProps, { addRestaurant, deleteRestaurant })(
  RestaurantsContainer
);
