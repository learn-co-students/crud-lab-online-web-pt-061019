import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput addReview={addReview} />
        <Reviews deleteReview={deleteReview} reviews={reviews} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews });

export default connect(mapStateToProps, { addReview, deleteReview })(
  ReviewsContainer
);
