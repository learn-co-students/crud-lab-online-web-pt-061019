import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={e => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
