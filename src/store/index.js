import { createStore } from 'vuex'

export default createStore({
  state: {
    COOK_TYPE: '',
    COOK_WAY: ''
  },
  getters: {},
  mutations: {
    setCookType(state, COOK_TYPE) {
      state.COOK_TYPE = COOK_TYPE
    },
    setCookWay(state, COOK_WAY) {
      state.COOK_WAY = COOK_WAY
    }
  },
  actions: {},
  modules: {},
  watch: {
    setCookType(value) {
      console.log(value)
    },
    setCookWay(value) {
      console.log(value)
    }
  }
})
