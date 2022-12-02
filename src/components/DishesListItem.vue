<template>
  <div
    class="item-wrapper"
    @mouseover="onHover = true"
    @mouseleave="onHover = false"
    :class="{ shake: onHover }"
  >
    <ButtonDelete
      class="item-wrapper__btn-delete"
      @click.native="emitRemoveEvent"
    />
    <b-card no-body class="overflow-hidden no-border">
      <b-row no-gutters>
        <!-- TODO: POSSIBILITY TO PUSH IMG FROM MODAL(Upload) TO MENU -->
        <!-- <b-col sm="6" md="4" class="item-wrapper__img-wrapper">
          <b-card-img
            :src="require('../assets/images/' + dishObj.image)"
            alt="Image"
            class="rounded-0"
          />{{ dishObj.image }}
        </b-col> -->
        <b-col sm="8">
          <b-card-body>
            <b-card-text class="align-left item-wrapper__card-content-wrapper">
              <b>
                <h5 class="item-wrapper__card-content-wrapper__name">
                  {{ dishObj.name }}
                </h5>
              </b>
              <p>
                <span class="item-wrapper__card-content-wrapper__description">
                  Category: {{ dishObj.menuCategory }}
                </span>
              </p>
              <p>
                <b>Short description: </b>
                <span class="item-wrapper__card-content-wrapper__description">
                  {{ dishObj.shortDescription }}
                </span>
              </p>
              <p>
                <b>Price:</b>
                {{ dishObj.price }}
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <ButtonEdit class="item-wrapper__btn-edit" @click.native="emitEditEvent" />
  </div>
</template>

<script>
import ButtonEdit from "./UI/ButtonEdit";
import ButtonDelete from "./UI/ButtonDelete";
import toFix from "../filters/toFix";

export default {
  name: "DishesListItem",
  data() {
    return {
      onHover: false,
    };
  },
  filters: {
    toFix,
  },
  components: {
    ButtonEdit,
    ButtonDelete,
  },
  props: {
    dishObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", { id: this.dishObj.id });
    },
    emitEditEvent() {
      this.$emit("showModalEdit", this.dishObj.id, this.dishObj);
    },
  },
};
</script>

<style lang="scss">
.item-wrapper {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin: 20px 20px;
  width: 100%;
  max-width: 450px;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    .btn-edit {
      box-shadow: -4px -2px 20px -10px #0000007d;
    }
  }
  .card {
    border-color: transparent;
  }

  &__img-wrapper {
    max-width: 150px !important;
    padding: 20px;
  }

  &__card-content-wrapper {
    font-size: 14px;
    p,
    ul {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      li {
        padding-left: 20px;
      }
    }
    &__name {
      text-transform: uppercase;
    }

    &__description {
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &__btn-edit {
    position: absolute;
    right: -20px;
    bottom: -20px;
  }
  &__btn-delete {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 100;

    button {
      padding: 1px 5px;
      background: sienna;
      border-color: transparent;
    }
  }
}
.align-left {
  text-align: left;
}
.no-border {
  border: none;
}
.shake .item-wrapper__btn-edit button svg {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}
</style>
