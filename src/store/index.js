import { createStore } from 'vuex'

export default createStore({
  state: {
    COOK_TYPE: '',
    COOK_WAY: '',
    isReset: false
  },
  getters: {},
  mutations: {
    setCookType(state, COOK_TYPE) {
      state.COOK_TYPE = COOK_TYPE
    },
    setCookWay(state, COOK_WAY) {
      state.COOK_WAY = COOK_WAY
    },
    setRest(state, isReset) {
      state.isReset = isReset
    }
  },
  actions: {},
  modules: {},
  watch: {}
})
