<template>
  <div>
    <card-info :apptData="apptData" :class="cardState()"/>
  </div>
</template>

<script>
import ApptsContainerCardInfo from "./ApptsContainerCardInfo.vue";

export default {
  props: {
    apptData: {}
  },
  components: {
    CardInfo: ApptsContainerCardInfo
  },
  methods: {
    cardState() {
      return this.apptData.status + "ApptBorder";
    }
  }
};
</script>

<style scoped lang="scss">
.cancelledApptBorder {
  border-left: 12px solid $app-red;
}
.confirmedApptBorder {
  border-left: 12px solid $app-blue;
}
.pendingApptBorder {
  border-left: 12px solid $app-yellow;
}
</style>
