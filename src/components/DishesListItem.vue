<template>
  <div class="item-wrapper">
    <b-card no-body class="overflow-hidden no-border">
      <b-row no-gutters>
        <b-col md="6" class="item-wrapper__img-wrapper">
          <b-card-img
            :src="require('../assets/images/' + dishObj.image)"
            alt="Image"
            class="rounded-0"
          />
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-text class="align-left item-wrapper__card-content-wrapper">
              <b>
                <h5>{{ dishObj.name.toUpperCase() }}</h5>
              </b>
              <p>
                <b>Short description: </b>
                <span class="item-wrapper__card-content-wrapper__description">
                  {{ dishObj.shortDescription }}
                </span>
              </p>
              <p>
                <b>Price:</b>
                {{ dishObj.price }} €
              </p>
              <ul>
                <b>It is available for: </b>
                <li
                  v-for="category in dishObj.categoryBasedOnTime"
                  :key="category.id"
                >
                  {{ category }}
                </li>
              </ul>
              <p>
                <b>Can be ordered for: </b>
                {{ dishObj.availableForTime }}
              </p>
              <p>
                <b>Menu category:</b>
                {{ dishObj.menuCategory }}
              </p>
              <p>
                <b>Weight: </b>
                {{ dishObj.weight }} Gr.
              </p>
              <p>
                <b>Availability: </b>
                {{ dishObj.isAvailable }}
              </p>
              <p>
                <b>Time to prepare: </b>
                {{ dishObj.waitingTime }} Min.
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <ButtonEdit class="item-wrapper__btn-edit" />
  </div>
</template>

<script>
import ButtonEdit from "./UI/ButtonEdit";
export default {
  name: "DishesListItem",
  components: {
    ButtonEdit,
  },
  props: {
    dishObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrapper {
  position: relative;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-bottom: 50px;
  max-width: 500px;

  &__img-wrapper {
    padding: 20px;
  }

  &__card-content-wrapper {
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
}
.align-left {
  text-align: left;
}
.no-border {
  border: none;
}
</style>
