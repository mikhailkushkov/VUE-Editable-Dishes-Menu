<template>
  <div>{{ menuData }}</div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped></style>
