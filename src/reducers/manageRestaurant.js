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
          { text: action.text, id: cuidFn() },
        ],
      };

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.id
        ),
      };

    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        id: cuidFn,
        restaurantId: action.restaurantId,
      };
      return { ...state, reviews: [...state.reviews, review] };
  }
}
