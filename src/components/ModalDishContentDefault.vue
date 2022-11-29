<template>
  <div class="content-wrapper">
    <b-container fluid>
      <b-row class="mb-1">
        <b-form @submit.prevent="onSubmit">
          <div class="form-group-item">
            <b-form-group
              label="Name:"
              label-for="dish-name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="dish-name-input"
                v-model="newDishObj.name"
                required
              />
            </b-form-group>
          </div>

          <div class="form-group-item">
            <b-col sm="10">
              <label for="dish-textarea-description">Description:</label>
            </b-col>

            <b-form-textarea
              id="dish-textarea-description"
              invalid-feedback="Description is required"
              v-model="newDishObj.shortDescription"
            >
            </b-form-textarea>
          </div>

          <div class="form-group-item">
            <b-form-group
              label="Price: "
              label-for="price-input"
              invalid-feedback="Price is required"
              class="d-flex price"
            >
              <b-form-input
                id="price-input"
                v-model="newDishObj.price"
                type="number"
                required
              />
            </b-form-group>
          </div>

          <div class="form-group-item d-flex">
            <b-form-group
              label="Weight: "
              label-for="weight"
              invalid-feedback="Weight is required"
              class="d-flex weight"
            >
              <b-form-input
                id="weight"
                v-model="newDishObj.weight"
                type="number"
                required
              />
            </b-form-group>
            <span class="form-group-item__gramm">Gr.</span>
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
                v-model="newDishObj.waitingTime"
                type="number"
                required
              />
            </b-form-group>
            <span class="form-group-item__min">Min.</span>
          </div>

          <div class="form-group-item available-wrap">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="newDishObj.categoryBasedOnTime"
                :aria-describedby="ariaDescribedby"
                label="Please choose when it's available:"
              >
                <b-form-checkbox value="breakfast">breakfast</b-form-checkbox>
                <b-form-checkbox value="dinner">dinner</b-form-checkbox>
                <b-form-checkbox value="lunch">lunch</b-form-checkbox>
              </b-form-checkbox-group>
              <div>
                Available for:
                <strong>{{ newDishObj.categoryBasedOnTime }}</strong>
              </div>
            </b-form-group>
          </div>

          <div class="form-group-item">
            <b-form-group
              label="Choose availability:"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                v-model="newDishObj.availability"
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isAvailable"
                >is available</b-form-radio
              >
              <b-form-radio
                v-model="newDishObj.availability"
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isNotAvailable"
                >is not available</b-form-radio
              >
            </b-form-group>

            <div class="mt-3">
              Selected:
              <strong>{{ newDishObj.availability }}</strong>
            </div>
          </div>

          <!-- <div class="form-group-item item-wrapper__img-wrapper">
            <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
            <div class="mt-3">Selected file: {{ file2 ? file2.name : "" }}</div>
          </div> -->

          <div class="footer">
            <b-button type="submit" variant="warning" @click="$emit('close')"
              >Submit</b-button
            >
          </div>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ModalDishContentDefault",
  data() {
    return {
      file2: null,
    };
  },
  props: {
    newDishObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit("add-new-dish", this.newDishObj);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group-item {
  margin-bottom: 20px;
  box-shadow: rgb(67, 71, 85 / 27%) 0px, 0px 0.25em,
    rgb(90, 125, 188 / 5%) 0px 0.25em 1em;
  padding: 3px 3px;
  border-radius: 5px;
  background-color: #dcdcdc94;

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
.available-wrap .custom-control {
  display: flex;
}
.available-wrap label.custom-control-label {
  margin-left: 3px;
}
</style>
