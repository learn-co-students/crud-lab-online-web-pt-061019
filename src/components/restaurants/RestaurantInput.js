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

  render() {
    return <div>Restaurant Input</div>;
  }
}

export default RestaurantInput;
