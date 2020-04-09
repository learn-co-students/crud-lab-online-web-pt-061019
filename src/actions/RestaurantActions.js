export const addRestaurant = (restaurant) => {
  return {
    type: "ADD_RESTAURANT",
    restaurant,
  };
};

export const deleteRestaurant = (restaurauntId) => {
  return {
    type: "DELETE_RESTAURANT",
    restaurauntId,
  };
};
