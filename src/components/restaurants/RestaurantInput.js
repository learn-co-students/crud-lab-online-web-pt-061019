import React, { Component } from 'react';
// import manageRestaurants from '../reducers/manageRestaurants'
// import { connect } from 'react-redux'

class RestaurantInput extends Component {

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

    this.props.addRestaurant(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.text} />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   addRestaurant: dispatch;
// });


// export default connect (null, mapDispatchToProps)(RestaurantInput);

export default RestaurantInput;
