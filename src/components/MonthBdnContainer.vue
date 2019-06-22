<template>
  <div class="bdn-container">
    <div class="bdn-container__month-selection">
      <i class="icon-button material-icons">arrow_back_ios</i>
      <span>August</span>
      <span>2019</span>
      <i class="icon-button material-icons">arrow_forward_ios</i>
    </div>
    <div class="bdn-container__month-breakdown">
      <div class="bdn-container__month-breakdown--confirmed">
        <i class="icon-button material-icons bdn-container__month-breakdown--confirmed-icon">done</i>
        <span>25 Confirmed</span>
      </div>
      <div class="bdn-container__month-breakdown--pending">
        <i
          class="icon-button material-icons bdn-container__month-breakdown--pending-icon"
        >access_time</i>
        <span>17 Pending</span>
      </div>
      <div class="bdn-container__month-breakdown--cancelled">
        <i class="icon-button material-icons bdn-container__month-breakdown--cancelled-icon">clear</i>
        <span>9 Cancelled</span>
      </div>
    </div>
  </div>
</template>

<script>
import dateMgmt from "./../mixins/dateManagement";
export default {};
</script>
<style scoped lang="scss">
.bdn-container {
  padding: 30px 0px;
  border-radius: 10px;
  margin: 10px 0px;
  &__month-selection {
    color: black;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  &__month-breakdown {
    display: flex;
    margin: 10px auto;
    flex-flow: row wrap;
    justify-content: space-between;
    &--cancelled,
    &--pending,
    &--confirmed {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      margin: 0px auto;
    }
    &--confirmed-icon,
    &--cancelled-icon,
    &--pending-icon {
      background: $app-blue;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--confirmed-icon {
      background: $app-blue;
    }
    &--pending-icon {
      background: $app-yellow;
    }
    &--cancelled-icon {
      background: $app-red;
    }
  }
}

@media (min-width: $tablet-mq) {
  .bdn-container {
    &__month-selection {
      color: black;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    &__month-breakdown {
      display: flex;
      margin: 15px auto;
      flex-flow: row wrap;
      justify-content: space-between;
      &--cancelled,
      &--pending,
      &--confirmed {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin: 0px auto;
      }
      &--confirmed-icon,
      &--cancelled-icon,
      &--pending-icon {
        background: $app-blue;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &--confirmed-icon {
        background: $app-blue;
      }
      &--pending-icon {
        background: $app-yellow;
      }
      &--cancelled-icon {
        background: $app-red;
      }
    }
  }
}

@media (min-width: $pc-mq) {
}
</style>
