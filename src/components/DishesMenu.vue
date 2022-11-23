<template>
  <b-container class="bv-example-row menu">
    <b-row>
      <b-col>
        <h2 class="menu__title">{{ menuTitle }}</h2>
        <p></p>
        <div class="menu__items-wrapper">
          <DishesMenuItem
            v-for="item in itemsData"
            :key="item.id"
            :menuData="item"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DishesMenuItem from "./DishesMenuItem.vue";
export default {
  name: "DishesMenu",
  components: {
    DishesMenuItem,
  },
  data() {
    return {
      menuTitle: "menu",
    };
  },
  props: {
    itemsData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &__title {
    font-family: "Allura", cursive;
    font-size: 55px;
    font-weight: 800;
    text-transform: capitalize;
    color: darkmagenta;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background-color: darkmagenta;
      width: 100px;
      height: 2px;
      bottom: 0;
      left: 50%;
      margin-left: -50px;
    }
  }
}
</style>
