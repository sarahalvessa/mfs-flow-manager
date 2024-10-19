import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    user: {
      id: null,
      name: null,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user.id = user.id
      state.user.name = user.name
    },
    clearUser(state) {
      state.user.id = null
      state.user.name = null
    },
  },
  plugins: [createPersistedState()]
})

export default store
