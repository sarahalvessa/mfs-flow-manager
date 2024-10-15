import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: {
      id: null,
    },
  },
  mutations: {
    setUser(state, userId) {
      state.user.id = userId;
    },
    clearUser(state) {
      state.user.id = null;
    },
  },
})

export default store;
