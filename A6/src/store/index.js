import Vue from 'vue'
import Vuex from 'vuex'

import getters from '@/store/getters.js'
import blog from '@/store/modules/blog.js'
import comment from '@/store/modules/comment.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    blog,
    comment
  },
  getters
})

export default store
