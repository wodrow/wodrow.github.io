import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      activeMenuIndex: 1,
      meta: {
          title: "首页",
          keywords: "关键字",
          description: "描述"
      }
  }
})
