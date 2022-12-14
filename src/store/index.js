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
      state.dishesData = [...dishes];
    },
    REMOVE_ITEM: (state, index) => {
      state.dishesData.splice(index, 1);
    },
    ADD_ITEM: (state, newDishObj) => {
      state.dishesData.push(newDishObj);
    },
    SET_DATA: (state, selected) => {
      // TODO: NEED REFACTORING
      // if (state.selectedDishFromModal.length) {
      //   let isProductInMenu = false;
      //   state.selectedDishFromModal.map((item) => {
      //     if (item.id === selected.id) {
      //       isProductInMenu = true;
      //     }
      //   });
      //   if (!isProductInMenu) {
      //     state.selectedDishFromModal.push(selected);
      //   }
      // } else {
      //   state.selectedDishFromModal.push(selected);
      // }
      state.selectedDishFromModal.push(selected);
    },
    SORT_BY_PRICE: (state) => {
      state.dishesData.sort((a, b) => a.price - b.price);
    },
    SORT_BY_CATEGORY: (state) => {
      state.dishesData.sort((a, b) =>
        a.menuCategory.localeCompare(b.menuCategory)
      );
    },
  },
  actions: {
    GET_DISHES_REQUEST({ commit }) {
      return axios("http://localhost:3000/dishes", {
        method: "GET",
      })
        .then((dishes) => {
          dishes.data.map((item) => {
            item.name = item.name.toUpperCase();
          }),
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
    ADD_ITEM_TO_LIST({ commit }, newDishObj) {
      commit("ADD_ITEM", { ...newDishObj });
    },
    SELECTED_DISH_FROM_MODAL({ commit }, selected) {
      commit("SET_DATA", selected);
    },
    SORT_DISHES_BY_PRICE({ commit }) {
      commit("SORT_BY_PRICE");
    },
    SORT_DISHES_BY_CATEGORY({ commit }) {
      commit("SORT_BY_CATEGORY");
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
