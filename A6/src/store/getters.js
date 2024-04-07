const getters = {
  blogList: (state) => state.blog,
  blogDetail: (state) => (articleId) => state.blog.filter((item) => item.articleId === articleId)[0],
  commentList: (state) => (articleId) => state.comment.filter((item) => item.articleId === articleId),
  commentListSec: (state) => (articleId) => {
    const data = state.comment.filter((item) => item.articleId === articleId)
    return data.filter((item) => item.parentCommentId !== 'null')
  }
}
export default getters
