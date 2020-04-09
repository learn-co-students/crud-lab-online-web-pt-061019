import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput />
        <Reviews />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ containers: state.containers });

export default connect(mapStateToProps)(ReviewsContainer);
