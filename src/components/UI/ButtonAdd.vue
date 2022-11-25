<template>
  <div>
    <b-button class="btn-add">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
      </svg>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "ButtonEdit",
};
</script>

<style lang="scss" scoped>
.btn-add {
  background: #bc32ab;
  border-radius: 50%;
  padding: 15px 16px;
  position: absolute;
}
</style>
