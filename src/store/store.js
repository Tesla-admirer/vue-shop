import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    headerTitle: '默认的头部标题'
  },
  mutations: {
    changeHeaderTitle (state, str) {
      state.headerTitle = str
    }
  },
  actions: {
    // changeSideBarState (context, status) {
    //   context.commit('changeSideBarState', status)
    // }
    // es6解构写法
    changeHeaderTitle ({commit}, str) {
      commit('changeHeaderTitle', str)
    }
  },
  getters: {
    getHeaderTitle (state) {
      return state.headerTitle
    }
  }
})