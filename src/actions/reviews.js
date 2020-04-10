export const addReview = text => {
  return {
    type: "ADD_REVIEW",
    text
  }
}

export const deleteReview = id => {
  return {
    type: "DELETE_REVIEW",
    id
  }
}
