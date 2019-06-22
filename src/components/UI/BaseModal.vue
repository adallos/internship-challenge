<template>
  <div :class="isVisible ? 'modal' : 'modal-hidden'">
    <div :class="'modal__content--'+ticketToRender.status">
      <span class="modal__close" @click="close()">&times;</span>

      <span>Appointment Details</span>

      <card-actions class="modal__appt-actions" :apptState="ticketToRender.status" :isIcon="false"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btnType() {
      switch (this.buttonType) {
        case "icon-edit":
          return "edit";
          break;
        case "icon-cancel":
          return "clear";
          break;
        case "icon-confirm":
          return "done";
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>




<script>
import SidebarContainerAppt from "./SidebarContainerAppt";
import coloredStatus from "./UI/ColoredStatus";
import dateManagement from "../mixins/dateManagement";
import cardActions from "./ApptsContainerCardActions";
import monthBreakdown from "./MonthBdnContainer";
export default {
  components: {
    apptRender: SidebarContainerAppt,
    coloredStatus,
    cardActions,
    monthBreakdown
  },
  computed: {
    isVisible() {
      return this.$store.getters.getModalVisibility;
    },
    ticketToRender() {
      return this.$store.getters.getSelectedAppt;
    },
    isForm() {}
  },
  methods: {
    close() {
      return this.$store.dispatch("toggleModal", false);
    }
  }
};
</script>

<style scoped lang="scss">
.modal-hidden {
  display: none;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 58px;
  width: 90%;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__shortInfo {
    &--coffee-with {
      display: none;
    }
    &--names {
    }
    &--phone {
    }
  }
  &__detailedInfo {
    &--label {
      font-weight: bold;
    }
  }
  &__content {
    &--month-bdn {
      display: none;
    }
    &--cancelled,
    &--confirmed,
    &--pending {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      width: 70%;
      position: relative;
      top: 59px;
    }
    &--cancelled {
      border: 5px solid $app-red;
    }
    &--confirmed {
      border: 5px solid $app-blue;
    }
    &--pending {
      border: 5px solid $app-yellow;
    }
  }
  &__close {
    color: #aaaaaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    right: 15px;
    top: 8px;
    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
  &__icon {
    position: absolute;
    top: -20px;
    left: -20px;
    background-color: white;
    border-radius: 50%;
    width: 75px;
  }
}
</style>

