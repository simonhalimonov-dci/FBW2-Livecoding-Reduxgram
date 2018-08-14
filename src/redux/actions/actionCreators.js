export const likePost = (postCode) => {
  return {
    type: "LIKE_POST",
    postCode
  }
}

export const addComment = (postCode, user, text) => {
  return {
    type: "ADD_COMMENT",
    user,
    text,
    postCode
  }
}

export const deleteComment = (commentIndex) => {
  return {
    type: "DELETE_COMMENT",
    commentIndex
  }
}