<template>
  <b-container class="main-wrapper">
    <b-row>
      <DishesList />
    </b-row>
  </b-container>
</template>

<script>
import DishesList from "./DishesList.vue";
export default {
  name: "MainWrapper",
  components: {
    DishesList,
  },
};
</script>

<style lang="scss" scoped></style>
