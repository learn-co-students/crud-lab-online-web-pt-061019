
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], }, action) {

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

    default:
      return state

  }
}
