export const addReview = (text) => {
  return {
    type: "ADD_REVIEW",
    text,
  };
};

export const deleteReview = (reviewId) => {
  return {
    type: "DELETE_REVIEW",
    reviewId,
  };
};
