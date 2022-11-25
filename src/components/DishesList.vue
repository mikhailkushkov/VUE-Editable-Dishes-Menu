<template>
  <BContainer class="list">
    <BRow>
      <ButtonAdd class="btn-add-position" @click.native="addNewDish" />
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
          @showModalEdit="onShowModalEdit"
        />
      </transition-group>
      <!-- <ModalEdit> -->
      <BModal :id="modalEdit" hide-footer centered class="modal-content">
        <!-- {{ ModalDishContent }} -->
        <ModalDishContent :dish="selectedDish" @close="closeModal" />
        <!-- {{ ModalDishContent }} -->
      </BModal>
      <!-- <ModalEdit /> -->

      <!-- <ModalAdd> -->
      <BModal :id="modalAdd" hide-footer centered class="modal-content-default">
        <!-- {{ ModalDishContentDefault }} -->
        <ModalDishContentDefault @close="closeModal" />
        <!-- {{ ModalDishContentDefault }} -->
      </BModal>
      <!-- <ModalAdd /> -->
    </BRow>
  </BContainer>
</template>

<script>
import DishesListItem from "./DishesListItem";
import ModalDishContent from "./ModalDishContent.vue";
import ModalDishContentDefault from "./ModalDishContentDefault.vue";
import ButtonAdd from "./UI/ButtonAdd.vue";
import { mapActions } from "vuex";
import gsap from "gsap";

export default {
  name: "DishesList",
  data() {
    return {
      modalEdit: "dish-edit",
      modalAdd: "dish-add",
      selectedDish: {},
    };
  },
  components: {
    DishesListItem,
    ModalDishContent,
    ModalDishContentDefault,
    ButtonAdd,
  },
  methods: {
    ...mapActions([
      "GET_DISHES_REQUEST",
      "REMOVE_ITEM_FROM_LIST",
      "SELECTED_DISH_FROM_MODAL",
    ]),

    addNewDish() {
      this.$bvModal.show(this.modalAdd);
    },

    beforeEnter(el) {
      gsap.set(el, {
        scale: 0.5,
        autoAlpha: 0,
        transform: "translateY(500px)",
      });
    },
    enter(el) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        autoAlpha: 1,
        ease: "power2.out",
        stagger: 0.5,
        y: 0,
        duration: 0.5,
        delay: el.dataset.index * 0.3,
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
    onShowModalEdit(id, objData) {
      this.selectedDish = objData;
      this.$bvModal.show(this.modalEdit);
    },
    closeModal() {
      this.$bvModal.hide(this.modalEdit);
      this.SELECTED_DISH_FROM_MODAL(this.selectedDish);
    },
  },
  mounted() {
    this.GET_DISHES_REQUEST();
  },
};
</script>

<style lang="scss">
.list {
  position: relative;
  .btn-add-position {
    top: -58px;
    left: -35px;
    position: absolute;
    display: flex;
  }
  .row span {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.modal-content {
  header {
    background-color: #aa7814;
    padding: 5px 10px;
    button {
      border: none;
      background-color: transparent;
      font-size: 2em;
      color: white;
    }
  }
}
</style>
