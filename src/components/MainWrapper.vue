<template>
  <b-container class="main-wrapper">
    <b-row>
      <b-col>
        <DishesList />
      </b-col>
      <b-col>
        <DishesMenu />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DishesList from "./DishesList.vue";
import DishesMenu from "./DishesMenu.vue";
export default {
  name: "MainWrapper",
  components: {
    DishesList,
    DishesMenu,
  },
};
</script>

<style lang="scss" scoped></style>
