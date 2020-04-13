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
      let newReview = { text: action.text, id: cuidFn(), restaurant_id: action.restaurant_id }

      return {
        ...state,
        reviews: []
      }


    default:
      return state

  }
}
