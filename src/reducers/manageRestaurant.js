
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        ...action.text
      }
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      }
    case 'DELETE_RESTAURANT':
      const new_rest_arr = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {
        ...state,
        restaurants: new_rest_arr
      }
      // return state.filter(quote => quote.id !== action.quoteId)
    case 'ADD_REVIEW':
      // debugger
      const review = {
        id: cuid(),
        ...action.review
      }
      return {
        ...state,
        reviews: [...state.reviews, review]
      }
    case 'DELETE_REVIEW':
      const new_rev_arr = state.reviews.filter(review => review.id !== action.id)
      return {
        ...state,
        reviews: new_rev_arr
      }
    default:
      return state
  }

}
