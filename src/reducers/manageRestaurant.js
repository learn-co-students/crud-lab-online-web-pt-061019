import cuid from 'cuid';
export const cuidFn = cuid;

// Test data {text: "Pizza Planet"}
export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':

      let newRestaurant = { text: action.text, id: cuidFn() }

      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      }

      // this.setState({
      // ...state.restaurants,
      // action.payload.text
      // })
      //
      // return state

    case 'DELETE_RESTAURANT':
      const restaurant = state.restaurants.filter(restaurant => restaurant.id !== action.id)

      return {
        ...state,
        restaurants: restaurant
      }

    case 'ADD_REVIEW':
    // console.log(action) // {type: "ADD_REVIEW", text: "hhhhhhhh", restaurantId: "ck9kdp2qo00003h5zt5c8xzr8"}
      let newReview = { text: action.text, id: cuidFn(), restaurantId: action.restaurantId }

      return {
        ...state,
        reviews: [...state.reviews, newReview]
      }

    case 'DELETE_REVIEW':
    // console.log(action) // {type: "ADD_REVIEW", text: "hhhhhhhh", restaurantId: "ck9kdp2qo00003h5zt5c8xzr8"}
      console.log("Boop")
      let reviews = state.reviews.filter(review => review.id !== action.id)
      console.log(reviews)
      return {
        ...state,
        reviews: reviews
      }

    default:
      return state

  }
}
