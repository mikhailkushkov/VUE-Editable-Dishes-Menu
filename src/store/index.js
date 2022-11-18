import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dishesData: [],
  },
  mutations: {
    SET_DISHES_TO_MENU: (state, dishes) => {
      state.dishesData = dishes;
    },
    REMOVE_ITEM: (state, index) => {
      state.dishesData.splice(index, 1);
    },
  },
  actions: {
    GET_DISHES_REQUEST({ commit }) {
      return axios("http://localhost:3000/dishes", {
        method: "GET",
      })
        .then((dishes) => {
          commit("SET_DISHES_TO_MENU", dishes.data);
          return dishes;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    REMOVE_ITEM_FROM_LIST({ commit }, index) {
      commit("REMOVE_ITEM", index);
    },
  },
  getters: {
    DISHES(state) {
      return state.dishesData;
    },
  },
});
