<template>
  <b-container class="bv-example-row menu">
    <b-row>
      <b-col>
        <h2 class="menu__title">{{ menuTitle }}</h2>

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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding-top: 20px;
  margin-top: 20px;
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
  &__items-wrapper {
    padding-top: 50px;
  }
}
</style>
