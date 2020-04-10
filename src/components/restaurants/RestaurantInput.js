import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const text = {...this.state}
    this.props.add(text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="text" type="text" id="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
