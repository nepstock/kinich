import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    username: "",
    email: "",
    addInformation: [{send: false}],
    modalImages: false
  },
  mutations: {
    uploadToken(state, token) {
      state.token = token;
    },
    uploadUsername(state, username) {
      state.username = username;
    },
    uploadEmail(state, email) {
      state.email = email;
    },
    uploadAddInformation(state, addInformation) {
      state.addInformation = addInformation;
    },
    updateModalImages(state, modal) {
      state.modalImages = modal;
    }
  },
  actions: {
    uploadToken({ commit }, token) {
      commit("uploadToken", token);
    },
    uploadUsername({ commit }, username) {
      commit("uploadUsername", username);
    },
    uploadEmail({ commit }, email) {
      commit("uploadEmail", email);
    },
    uploadAddInformation({ commit }, addInformation) {
      commit("uploadAddInformation", addInformation);
    },
    updateModalImages({commit}, modal) {
      commit("updateModalImages", modal);
    }
  },
  modules: {}
});
