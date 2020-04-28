import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    console.log("Submitting form...")

    event.preventDefault();

    let obj = {
      ...this.state,
      restaurantId: this.props.restaurant.id
    }

    console.log(obj)

    this.props.addReview(this.state.text, this.props.restaurant.id)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Review Input

        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
