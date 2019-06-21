<template>
  <div class="month-filters-container">
    <filters-container class="month-filters-container__filters"/>
    <month-breakdown class="month-filters-container__month-bdn"/>
    <add-button-primary class="month-filters-container__add-appt"/>
  </div>
</template>

<script>
import MonthBreakdown from "./MonthBdnContainer";
import FiltersContainer from "./FiltersContainer";
import AddButtonPrimary from "./UI/AddButtonPrimary";
export default {
  components: {
    MonthBreakdown,
    FiltersContainer,
    AddButtonPrimary
  }
};
</script>

<style scoped lang="scss">
.month-filters-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  &__month-bdn {
  }
  &__filters {
  }
  &__add-appt {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
}

@media (min-width: $tablet-mq) {
  .month-filters-container {
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    background-color: #fefefe;
    height: 100%;
    right: 0px;
    box-shadow: rgba(0, 0, 0.4, 0.3) 0 0 5px;
    width: 25%;
    &__month-bdn {
    }
    &__filters {
    }
    &__add-appt {
      position: initial;
    }
  }
}

@media (min-width: $pc-mq) {
  .month-filters-container {
    width: 73%;
    top: auto;
    right: auto;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: none;
    height: auto;
    background: $orchid-purple;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &__month-bdn {
      display: none;
    }
    &__filters {
    }
    &__add-appt {
      position: absolute;
      right: 50px;
      top: 30px;
      height: fit-content;
    }
  }
}
</style>