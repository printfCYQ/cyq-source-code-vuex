import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state) {
      state.count++;
    },
  },
  actions: {
    addCountAction(context) {
      context.commit("addCount");
    },
  },
  modules: {},
});
