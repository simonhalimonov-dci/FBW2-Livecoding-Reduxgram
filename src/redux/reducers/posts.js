const postsReducer = (state={}, action) => {
  switch (action.type) {
    // If the action has the type of "LIKE_POST", do this stuff
    case "LIKE_POST":
      console.log("LIKE_POSTS", state, action);
      const posts = state // All the posts from our previous state
      const code = action.postCode // The code from the liked post
      const newState = posts.map( post => {
        // Check if the post.code matches the action.code
        if (post.code == code) {
          // If the code does match, increase the like of the post
          post.likes++
          // Put it in the new array
          return post
        } else {
          // If it doesn't match, do nothing with it, simply put it in the array
          return post
        }
      })
      // Return the whole new posts array with all the items
      return newState;
    default:
      return state;
  }
}

export default postsReducer