import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dishesData: [],
    selectedDishFromModal: [],
  },
  mutations: {
    RENDER_DISHES: (state, dishes) => {
      state.dishesData = dishes;
    },
    REMOVE_ITEM: (state, index) => {
      state.dishesData.splice(index, 1);
    },
    SET_DATA: (state, selected) => {
      state.selectedDishFromModal.push(selected);
    },
  },
  actions: {
    GET_DISHES_REQUEST({ commit }) {
      return axios("http://localhost:3000/dishes", {
        method: "GET",
      })
        .then((dishes) => {
          commit("RENDER_DISHES", dishes.data);
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
    SELECTED_DISH_FROM_MODAL({ commit }, selected) {
      commit("SET_DATA", selected);
    },
  },
  getters: {
    DISHES(state) {
      return state.dishesData;
    },
    MENU_LIST(state) {
      return state.selectedDishFromModal;
    },
  },
});
