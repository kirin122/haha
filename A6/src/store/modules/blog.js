const state = new Map()

const mutations = {
  CREATE_ARTICLE: (state, data) => {
    state.set(data.key, data.map)
  },
  UPDATE_ARTICLE: (state, data) => {
    state.userRole = data
  },
  DELETE_ARTICLE: (state, data) => {
    state.userRole = data
  }
}

const actions = {
  async createArticle({ commit }, params) {
    try {
      const data = { key: null, value: null }
      const articleMap = new Map()
      for (const [key, value] of Object.entries(params)) {
        articleMap.set(key, value)
      }
      data.key = params.articleId
      data.map = articleMap
      commit('CREATE_ARTICLE', data)
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
