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

// // 创建一个空的外层 Map
// const nestedMap = new Map();

// // 在外层 Map 中设置键值对
// nestedMap.set('outerKey1', new Map([
//   ['innerKey1', 'value1'],
//   ['innerKey2', 'value2']
// ]));

// nestedMap.set('outerKey2', new Map([
//   ['innerKey3', 'value3'],
//   ['innerKey4', 'value4']
// ]));

// // 获取巢状对象的值
// console.log(nestedMap.get('outerKey1').get('innerKey1')); // 输出 'value1'
// console.log(nestedMap.get('outerKey2').get('innerKey3'));
