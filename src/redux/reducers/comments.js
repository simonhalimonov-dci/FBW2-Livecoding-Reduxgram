const commentsReducer = (state={}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      // Destructure the data from our action
      const {postCode, text, user} = action
      // Get the comments that we want to modify, if there is no comment, we will use an empty array
      const comments = state[postCode] || []
      // We create a new array and add our new comment object
      const newComments = [...comments, {text, user}]
      // Create a new state object
      const newState = {...state}
      // Replace the old comment array with our new one
      newState[postCode] = newComments
      return newState;
    default:
      return state;
  }
}

export default commentsReducer