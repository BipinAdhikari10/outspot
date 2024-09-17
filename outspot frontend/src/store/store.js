// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    userName: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token,
    getUserId: (state) => state.userId,
    getUserName: (state) => state.userName,
  },
  mutations: {
    setUserData(state, userData) {
      state.token = userData.token;
      state.userId = userData.userId;
      state.userName = userData.userName;
    },
    clearUserData(state) {
      state.token = null;
      state.userId = null;
      state.userName = null;
    },
  },
  actions: {
    login({ commit }, userData) {
      commit("setUserData", userData);
    },
    logout({ commit }) {
      commit("clearUserData");
    },
  },
});
