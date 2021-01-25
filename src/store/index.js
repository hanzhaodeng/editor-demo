import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scenario: {
      a: {
        b: [1],
        c: "123",
        d: []
      }
    }
  },
  mutations: {
    update(state, { path, data }) {
      let _path = [...path];
      let curr = state.scenario;
      let key = _path.pop();
      for (let currKey of _path) {
        curr = curr[currKey];
      }
      Vue.set(curr, key, data);
    }
  },
  actions: {},
  modules: {}
});
