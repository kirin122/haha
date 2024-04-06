// NOTE: 目前不支援Map Set
const state = []

const mutations = {
  CREATE_ARTICLE: (state, data) => {
    state.push(data)
  },
  UPDATE_ARTICLE: (state, data) => {
    state.forEach((item, index) => {
      if (item.articleId === data.articleId) state[index] = data
    })
  },
  DELETE_ARTICLE: (state, articleId) => {
    state.forEach((item, index) => {
      if (item.articleId === articleId) delete state[index]
    })
  }
}

const actions = {
  createArticle({ commit }, params) {
    commit('CREATE_ARTICLE', params)
  },
  updateArticle({ commit }, params) {
    commit('UPDATE_ARTICLE', params)
  },
  deleteArticle({ commit }, articleId) {
    commit('DELETE_ARTICLE', articleId)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
