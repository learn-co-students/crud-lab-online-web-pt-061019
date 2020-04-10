import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { text: action.restaurant.text, id: cuidFn() },
        ],
      };

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.restaurantId
        ),
      };

    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        id: cuidFn,
        restaurantId: action.restaurantId,
      };
      return { ...state, reviews: [...state.reviews, review] };

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.id),
      };

    default:
      return state;
  }
}
