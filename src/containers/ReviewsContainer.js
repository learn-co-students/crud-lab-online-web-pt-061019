import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview, deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput add={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} delete={this.props.deleteReview} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch(addReview(review)),
    deleteReview: id => dispatch(deleteReview(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
