<template>
  <div class="content-wrapper">
    <b-container fluid>
      <b-row class="mb-1">
        <b-form @submit.prevent="handleSubmit">
          <div class="form-group-item">
            <b-form-group
              label="Name:"
              label-for="dish-name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input id="dish-name-input" required />
            </b-form-group>
          </div>

          <div class="form-group-item">
            <b-col sm="10">
              <label for="dish-textarea-description">Description:</label>
            </b-col>

            <b-form-textarea
              id="dish-textarea-description"
              invalid-feedback="Description is required"
            >
            </b-form-textarea>
          </div>

          <div class="form-group-item">
            <span>Price: </span> <input type="number" />
          </div>

          <div class="form-group-item available-wrap">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                :aria-describedby="ariaDescribedby"
                label="Please choose when it's available:"
              >
                <b-form-checkbox value="breakfast">breakfast</b-form-checkbox>
                <b-form-checkbox value="dinner">dinner</b-form-checkbox>
                <b-form-checkbox value="lunch">lunch</b-form-checkbox>
              </b-form-checkbox-group>
              <div>
                Available for:
                <strong> </strong>
              </div>
            </b-form-group>
          </div>

          <div class="form-group-item">
            <span>Belongs to category: </span>
          </div>

          <div class="form-group-item"><span>Weight: </span> Gr.</div>

          <div class="form-group-item d-flex">
            <b-form-group
              label="Awaiting time after a dish order: "
              label-for="order-time-input"
              invalid-feedback="Time is required"
              class="d-flex order-time"
            >
              <b-form-input id="order-time-input" type="number" required />
            </b-form-group>
            <span class="form-group-item__min">Min.</span>
          </div>

          <div class="form-group-item">
            <b-form-group
              label="Choose availability:"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-radio
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isAvailable"
                >is available</b-form-radio
              >
              <b-form-radio
                :aria-describedby="ariaDescribedby"
                name="radio-input"
                value="isNotAvailable"
                >is not available</b-form-radio
              >
            </b-form-group>

            <div class="mt-3">
              Selected:
              <strong> </strong>
            </div>
          </div>
          <div class="footer">
            <b-button type="submit" variant="warning" @click="$emit('close')"
              >Add</b-button
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

  methods: {
    handleSubmit() {
      console.log("clicked");
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
