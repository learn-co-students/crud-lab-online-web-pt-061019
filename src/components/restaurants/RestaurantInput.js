import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: "",
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const restaurant = { ...this.state };
    this.props.addRestaurant(restaurant);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
