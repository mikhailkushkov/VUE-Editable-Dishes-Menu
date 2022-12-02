<template>
  <BContainer class="list">
    <SortPanel
      :dishesData="$store.state.dishesData"
      @emitSortByCategory="sortDishByCategoryFunc"
      @emitSortByPrice="sortDishByPriceFunc"
    />

    <BRow>
      <ButtonAdd class="btn-add-position" @click.native="onShowModalAdd" />
      <transition-group
        @before-enter="beforeEnter"
        @enter="enter"
        :css="false"
        appear
        name="dishes"
      >
        <DishesListItem
          v-for="(dish, index) in this.$store.state.dishesData"
          :key="index"
          :dishObj="dish"
          :data-index="index"
          :newDishObj="newDishObj"
          class="dishes-list-item"
          @removeItem="onRemoveItem(index)"
          @showModalEdit="onShowModalEdit"
          @add-new-dish="addNewObjToList"
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
        <ModalDishContentDefault
          :newDishObj="newDishObj"
          @close="addNewObjToList"
        />
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
import SortPanel from "./SortPanel.vue";
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
      newDishObj: {},
    };
  },
  components: {
    DishesListItem,
    ModalDishContent,
    ModalDishContentDefault,
    ButtonAdd,
    SortPanel,
  },
  methods: {
    ...mapActions([
      "GET_DISHES_REQUEST",
      "REMOVE_ITEM_FROM_LIST",
      "ADD_ITEM_TO_LIST",
      "SELECTED_DISH_FROM_MODAL",
      "SORT_DISHES_BY_PRICE",
      "SORT_DISHES_BY_CATEGORY",
    ]),

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
    onShowModalAdd() {
      this.$bvModal.show(this.modalAdd);
    },
    addNewObjToList() {
      //triggering funk in store actions
      this.ADD_ITEM_TO_LIST(this.newDishObj);
      //clear inputs before modal closing
      this.newDishObj.name = "";
      this.newDishObj.shortDescription = "";
      this.newDishObj.price = "";
      this.newDishObj.weight = "";
      this.newDishObj.waitingTime = "";
      // close a modal
      this.$bvModal.hide(this.modalAdd);
    },
    sortDishByPriceFunc() {
      this.SORT_DISHES_BY_PRICE();
    },
    sortDishByCategoryFunc() {
      this.SORT_DISHES_BY_CATEGORY();
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
  .dishes-move {
    transition: all 1s;
  }
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
