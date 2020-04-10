export const addRestaurant = (text) => {
  return {
    type: "ADD_RESTAURANT",
    text,
  };
};

export const deleteRestaurant = (restaurantId) => {
  return {
    type: "DELETE_RESTAURANT",
    restaurantId,
  };
};
