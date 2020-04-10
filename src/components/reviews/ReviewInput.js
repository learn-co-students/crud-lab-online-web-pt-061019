import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
    // restaurantId: this.props.restaurant.id
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const review = {...this.state, restaurantId: this.props.restaurant.id}
    console.log(review)
    this.props.add(review)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="text" type="text" id="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
