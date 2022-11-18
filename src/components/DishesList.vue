<template>
  <div class="list">
    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
      appear
    >
      <DishesListItem
        v-for="(dish, index) in this.$store.state.dishesData"
        :key="dish.id"
        :dishObj="dish"
        :data-index="index"
        class="dishes-list-item"
        @removeItem="onRemoveItem(index)"
      />
    </transition-group>
  </div>
</template>

<script>
import DishesListItem from "./DishesListItem";
import { mapActions } from "vuex";
import gsap from "gsap";

export default {
  name: "DishesList",
  components: {
    DishesListItem,
  },
  methods: {
    ...mapActions(["GET_DISHES_REQUEST", "REMOVE_ITEM_FROM_LIST"]),

    beforeEnter(el) {
      gsap.set(el, {
        scale: 0.5,
        autoAlpha: 0,
        transform: "translateY(500px)",
      });
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        autoAlpha: 1,
        ease: "power2.out",
        stagger: 0.5,
        y: 0,
        duration: 0.5,
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
    async onRemoveItem(index) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm("Are you sure?");
      if (isConfirmed) {
        this.REMOVE_ITEM_FROM_LIST(index);
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.GET_DISHES_REQUEST();
  },
};
</script>

<style lang="scss" scoped>
.list > span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
