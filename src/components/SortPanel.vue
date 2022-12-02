<template>
  <div class="sort-wrapper">
    <h3 class="title">Sort by</h3>

    <div class="order">
      <b-button variant="outline-success" @click="sortByCategory"
        >category</b-button
      >
      <b-button variant="outline-success" @click="sortByPrice">price</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortPanel",
  props: {
    dishesData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sortByCategory() {
      this.$emit("emitSortByCategory");
    },
    sortByPrice() {
      this.$emit("emitSortByPrice");
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 35px;

  .title {
    font-size: 1.5em;
    margin: 0;
    color: #198754;
    margin-right: 10px;
  }
  button:first-child {
    margin-right: 10px;
  }
}
</style>
