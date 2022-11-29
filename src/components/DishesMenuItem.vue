<template>
  <div>
    <b-container fluid class="menu-item-wrapper">
      <b-row>
        <b-col md="9">
          <span class="menu-item-wrapper__title">{{ toCapitalize }}</span>
        </b-col>
        <b-col md="3">
          <span class="menu-item-wrapper__price">{{ menuData.price }}</span>
        </b-col>
        <div class="menu-item-wrapper__separator"></div>
        <b-col>
          <p class="menu-item-wrapper__description">
            {{ menuData.shortDescription }}
          </p>
          <p class="menu-item-wrapper__weight">
            Weight: {{ menuData.weight }} Gr.
          </p>
          <p class="menu-item-wrapper__order-time">
            Approximate delivery time: {{ menuData.waitingTime }} Min.
          </p>
          <p>
            Can be ordered for:
            <span
              class="menu-item-wrapper__category"
              v-for="category in menuData.categoryBasedOnTime"
              :key="category.id"
            >
              {{ category }}
            </span>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import toFix from "../filters/toFix";

export default {
  name: "DishesMenuItem",
  props: {
    menuData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    toFix,
  },
  computed: {
    toCapitalize() {
      let dishName = this.menuData.name;
      return dishName.charAt(0).toUpperCase() + dishName.slice(1).toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-wrapper {
  p {
    margin-bottom: 0;
  }
  margin-bottom: 60px;
  &__title {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #7b7b7b;
  }
  &__price {
    font-family: "Secular One", sans-serif;
    font-style: italic;
    font-size: 22px;
    color: darkmagenta;
  }
  &__separator {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin: 15px 0 15px;
  }
  &__description {
    padding-bottom: 10px;
  }
}
</style>
