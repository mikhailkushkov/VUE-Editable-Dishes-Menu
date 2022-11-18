<template>
  <div>
    <BModal size="lg" hide-footer>
      <p>some text</p>
      <h5>{{ dataFromDish }}</h5>
    </BModal>
  </div>
</template>

<script>
export default {
  name: "ModalEdit",
  props: {
    dataFromDish: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
