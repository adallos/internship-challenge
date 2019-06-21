<template>
  <div :class="isVisible ? 'modal' : 'modal-hidden'">
    <div :class="'modal__content--'+ticketToRender.status">
      <span class="modal__close" @click="close()">&times;</span>
      <month-breakdown class="modal__content--month-bdn"/>
      <img class="modal__icon" :src="ticketToRender.avatar" alt srcset>

      <div>
        <span>Appointment Details</span>
        <div class="modal__shortInfo">
          <coloredStatus :textStatus="ticketToRender.status" :key="ticketToRender.id"/>
          <div class="modal__shortInfo--coffee-with">
            <img :src="ticketToRender.avatar">
            <span class="modal__shortInfo--icon material-icons">free_breakfast</span>
            <img :src="ticketToRender.avatar">
          </div>

          <div>
            <span>{{ticketToRender.firstName}} {{ticketToRender.lastName}}</span>
          </div>

          <span class="modal__shortInfo--phone">{{ticketToRender.phone}}</span>
          <br>
        </div>
        <br>
        <div class="modal__detailedInfo">
          <span class="modal__detailedInfo--label">Date & Time:</span>
          <span>{{ticketToRender.appointmentStart}} - {{ticketToRender.appointmentEnd}}</span>
          <br>
          <span class="modal__detailedInfo--label">Location:</span>
          <span>{{ticketToRender.location}}</span>
          <br>
          <span class="modal__detailedInfo--label">Topics:</span>
          <span v-for="topic in ticketToRender.topics" :key="topic.topic">{{topic.topic}}</span>
        </div>
        <br>
        <card-actions
          class="modal__appt-actions"
          :apptState="ticketToRender.status"
          :isIcon="false"
        />
        <button>Edit Appointment</button>
      </div>
    </div>
  </div>
</template>

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
    },
    editTicketForm() {
      return this.store.dispatch("toggleEdition", true);
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
    &--cancelled {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 5px solid $app-red;
      width: 70%;
      position: relative;
      top: 59px;
    }
    &--confirmed {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 5px solid $app-blue;
      width: 70%;
      position: relative;
      top: 59px;
    }
    &--pending {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 5px solid $app-yellow;
      width: 70%;
      position: relative;
      top: 59px;
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

@media (min-width: $tablet-mq) {
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(243, 148, 148, 0.4);
    &__shortInfo {
      &--coffee-with {
        display: block;
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
      &--cancelled {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 5px solid $app-red;
        width: 70%;
        position: relative;
      }
      &--confirmed {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 5px solid $app-blue;
        width: 70%;
        position: relative;
      }
      &--pending {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 5px solid $app-yellow;
        width: 70%;
        position: relative;
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
      display: none;
    }
  }
}

@media (min-width: $pc-mq) {
  .modal,
  .modal-hidden {
    background-color: transparent;
    width: 25%;
    overflow: hidden;
    padding-top: 0px;
    top: 65px;
    right: 0px;
    left: auto;
    border: #c5c5c575 1px solid;
    border-top-left-radius: 25px;
    &__shortInfo {
      &--coffee-with {
        display: block;
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
        display: block;
      }
      &--cancelled,
      &--confirmed,
      &--pending {
        background-color: #fefefe;
        padding: 20px;
        border: 0;
        height: 100%;
        width: inherit;
        position: inherit;
        box-sizing: border-box;
      }
    }
    &__close {
      display: none;
    }
    &__icon {
      display: none;
    }
  }
}
</style>
