<template>
  <div>
    <b-container fluid>
      <b-row class="mb-1">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div class="form-group-item">
            <b-form-group
              label="Name:"
              label-for="dish-name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input id="dish-name-input" v-model="dish.name" required />
            </b-form-group>
          </div>

          <div class="form-group-item">
            <b-col sm="10">
              <label for="dish-textarea-description">Description:</label>
            </b-col>

            <b-form-textarea
              id="dish-textarea-description"
              invalid-feedback="Description is required"
              v-model="dish.shortDescription"
            >
            </b-form-textarea>
          </div>

          <div class="form-group-item">
            <span>Price: </span> {{ dish.price }} €
          </div>

          <div class="form-group-item">
            <b-form-group
              label="Please choose when it's available:"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="selected"
                :options="dish.categoryBasedOnTime"
                :aria-describedby="ariaDescribedby"
              ></b-form-checkbox-group>
            </b-form-group>
            <div>
              Available for: <strong>{{ selected }}</strong>
            </div>
          </div>

          <div class="form-group-item">
            <span>Belongs to category: </span> {{ dish.menuCategory }}
          </div>

          <div class="form-group-item">
            <span>Weight: </span>{{ dish.weight }} Gr.
          </div>

          <div class="form-group-item d-flex">
            <b-form-group
              label="Awaiting time after a dish order: "
              label-for="order-time-input"
              invalid-feedback="Time is required"
              class="d-flex order-time"
            >
              <b-form-input
                id="order-time-input"
                v-model="dish.waitingTime"
                type="number"
                required
              />
            </b-form-group>
            <span class="form-group-item__min">Min.</span>
          </div>

          <div class="form-group-item">
            <b-form-group
              label="Choose availability:"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="dish.isAvailable"
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isAvailable"
                >is available</b-form-radio
              >
              <b-form-radio
                v-model="dish.isAvailable"
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isNotAvailable"
                >is not available</b-form-radio
              >
            </b-form-group>

            <div class="mt-3">
              Selected: <strong>{{ dish.isAvailable }}</strong>
            </div>
          </div>
        </form>
      </b-row>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ModalDishContent",
  data() {
    return {
      show: false,
      selected: [],
    };
  },
  props: {
    dish: {
      type: Object,
      String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.form-group-item {
  margin-bottom: 20px;

  .order-time {
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    input {
      max-width: 80px;
      text-align: center;
      margin-left: 5px;
    }
  }
  &__min {
    margin-right: auto;
    display: block;
    align-self: center;
    margin-left: 3px;
  }

  #checkbox-group-1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .custom-checkbox {
      margin-right: 20px;
      display: flex;
      align-items: center;

      input[type="checkbox"] {
        margin-right: 3px;
        margin-top: 2px;
      }
    }
  }
}
</style>
