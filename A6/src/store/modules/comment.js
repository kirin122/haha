class Comment {
  constructor() {
    this.data = new Map(
      ['articleId', null],
      ['commentId', null],
      ['user', null],
      ['content', null],
      ['parentCommentId', null]
    )
  }

  addData(obj) {
    for (const [key, value] of Object.entries(obj)) {
      this.myMap.set(key, value)
    }
  }

  getData() {
    return this.data
  }
}

const state = new Map()

const mutations = {
  CREATE_COMMENT: (state, data) => {
    state.set(data.key, data.value)
  },
  UPDATE_COMMENT: (state, data) => {
    state.userRole = data
  },
  DELETE_COMMENT: (state, data) => {
    state.userRole = data
  }
}

const actions = {
  async createComment({ commit }, params) {
    try {
      const comment = new Comment()
      comment.addData(params)
      const data = {
        key: params.id,
        value: comment.getData()
      }
      commit('CREATE_COMMENT', data)
    } catch (error) {
      return error
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
