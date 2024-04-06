const getters = {
  blogList: (state) => state.blog,
  blogDetail: (state) => (articleId) => state.blog.filter((item) => item.articleId === articleId)[0]
}
export default getters
