import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }
  
  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: '',
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add review </label>
          <input type='text' value={this.state.value} onChange={this.handleOnChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
