import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddKey: false
  },
  mutations: {
    SET_IS_ADD_KEY(state, toggle) {
      return state.isAddKey = toggle
    }
  }
})


export default store
