<template>
  <div :class="isVisible ? 'modal' : 'modal-hidden'">
    <div :class="'modal__content--'+ticketToRender.status">
      <span class="modal__close" @click="close()">&times;</span>
      <img class="modal__icon" :src="ticketToRender.avatar" alt srcset>
      <div>
        <span>Appointment Details</span>
        <br>
        <coloredStatus :textStatus="ticketToRender.status"/>
        <span>{{ticketToRender.firstName}} {{ticketToRender.lastName}}</span>
        <br>
        <span>{{ticketToRender.phone}}</span>
        <br>
        <br>
        <span>Date & Time:</span>
        <br>
        <span>{{ticketToRender.appointmentStart}} - {{ticketToRender.appointmentEnd}}</span>
        <br>
        <span>Location:</span>
        <br>
        <span>{{ticketToRender.location.place}}</span>
        <br>
        <span>{{ticketToRender.location.street}}</span>
        <br>Topics:
        <br>
        <span v-for="topic in ticketToRender.topics" :key="topic.topic">
          {{topic.topic}}
          <br>
        </span>
        <br>
        <card-actions :apptState="ticketToRender.status"/>
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
export default {
  components: {
    apptRender: SidebarContainerAppt,
    coloredStatus,
    cardActions
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
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__content {
    &--cancelled {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 5px solid $app-red;
      width: 70%;
      position: relative;
    }
    &--confirmed {
      border-radius: 15px;
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 5px solid $app-blue;
      width: 70%;
      position: relative;
    }
    &--pending {
      border-radius: 15px;
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
    position: absolute;
    top: -20px;
    left: -20px;
    background-color: white;
    border-radius: 50%;
    width: 75px;
  }
}
</style>
