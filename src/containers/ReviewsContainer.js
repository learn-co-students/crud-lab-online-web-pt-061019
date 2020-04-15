import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({reviews: state.review})

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({type: 'ADD_REVIEW', text, restaurantId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
