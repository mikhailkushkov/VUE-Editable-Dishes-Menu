<template>
  <b-container class="main-wrapper">
    <b-row>
      <b-col>
        <DishesList />
      </b-col>
      <b-col>
        <DishesMenu :itemsData="MENU_LIST" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DishesList from "./DishesList.vue";
import DishesMenu from "./DishesMenu.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainWrapper",
  components: {
    DishesList,
    DishesMenu,
  },
  computed: {
    ...mapGetters(["MENU_LIST"]),
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  position: relative;
}
</style>
