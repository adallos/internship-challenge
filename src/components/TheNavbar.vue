<template>
  <div class="header">
    <template>
      <span class="header__brand-icon">M</span>
      <div class="header__header-icons">
        <span class="icon-button material-icons">home</span>
        <span class="icon-button material-icons">thumb_up</span>
        <span class="icon-button material-icons">notifications</span>
        <span class="icon-button material-icons">history</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: column nowrap;
  width: 50px;
  border-right: #cecece 1px solid;
  box-shadow: 10px 0 #7e7e7e;
  width: 70px;
  color: $color-light;
  &__brand-icon {
    color: $orchid-purple;
    font-size: 30px;
    font-weight: $weight-boldest;
    padding: 10px 0px;
  }
  &__header-icons {
    margin-top: 25px;
    display: flex;
    flex-flow: column nowrap;
    height: 6%;
    justify-content: space-between;
  }
}
</style>
