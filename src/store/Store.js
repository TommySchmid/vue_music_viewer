import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: '',
    refreshToken: '',
    isUserLoggedIn: false
  },
  mutations: {
    loginHandler(state, payload) {
      state.idToken = payload.tokens.idToken;
      state.refreshToken = payload.tokens.refreshToken;
      state.isUserLoggedIn = true;
    },
    logoutHandler() {
      console.log('logoutHandler')
    }
  },
  // actions: {
  //   loginHandler(token) {
  //     console.log(token);
  //     this.commit('loginHandler', token);
  //   }
  // }
});