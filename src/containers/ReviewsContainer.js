import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/ReviewActions";

class ReviewsContainer extends Component {
  render() {
    //Could filter here and pass just the reviews needed instead of all
    //of them.
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          //This id comes from Restaurant component
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ reviews: state.reviews });

export default connect(mapStateToProps, { addReview, deleteReview })(
  ReviewsContainer
);
