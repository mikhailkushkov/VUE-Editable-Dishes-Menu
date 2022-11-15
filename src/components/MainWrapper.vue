<template>
  <div class="main-wrapper container">
    <b-container class="bv-example-row">
      <b-row>
        <DishesList />
      </b-row>
    </b-container>
  </div>
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

<style lang="scss" scoped>
.main-wrapper {
}
</style>
