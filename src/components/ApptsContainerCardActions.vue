<template>
  <div>
    <div v-if="this.isIcon" class="buttonsContainer">
      <div v-for="button in iconsRendering()" :key="button">
        <base-button :buttonType="button"/>
      </div>
    </div>
    <div
      v-else-if="this.apptState != 'cancelled'"
      v-for="(text, index) in textRendering()"
      :key="index"
    >
      <button>{{text}}</button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./UI/BaseButton";
export default {
  components: {
    BaseButton
  },
  props: ["apptState", "isIcon"],
  methods: {
    textRendering() {
      switch (this.apptState) {
        case "confirmed":
          return ["Cancel Appointment"];
          break;
        case "pending":
          return ["Confirm Appointment", "Cancel Appointment"];
          break;
        case "cancelled":
          return [""];
          break;
        default:
          return [""];
          break;
      }
    },
    iconsRendering() {
      switch (this.apptState) {
        case "confirmed":
          return ["icon-edit", "icon-cancel"];
          break;
        case "pending":
          return ["icon-confirm", "icon-cancel"];
          break;
        case "cancelled":
          return [""];
          break;
        default:
          return [""];
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.buttonsContainer {
  display: flex;
}
</style>
