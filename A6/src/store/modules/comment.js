// this.data = new Map(
//   ['articleId', null],
//   ['commentId', null],
//   ['user', null],
//   ['content', null],
//   ['parentCommentId', null]
// )

const state = []

const mutations = {
  CREATE_COMMENT: (state, data) => {
    state.push(data)
  }
}

const actions = {
  createComment({ commit }, params) {
    commit('CREATE_COMMENT', params)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
