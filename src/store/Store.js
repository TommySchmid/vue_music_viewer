import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    isUserLoggedIn: false
  },
  mutations: {
    loginHandler(state, signInData) {
      state.token = signInData.token;
      state.isUserLoggedIn = true;
      console.log('loginHandler 2', state);
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