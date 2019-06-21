<template>
  <div class="header">
    <span>User Name</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  padding: 20px;
  background: $orchid-purple;
  height: 65px;
  flex-flow: row nowrap;
  justify-content: flex-end;
  display: flex;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  z-index: -2;
  &__logo {
    width: 5%;
    display: flex;
  }
  &__container {
    width: 95%;
    display: flex;
    justify-content: space-around;

    &--user {
      display: flex;
      font-weight: $weight-secondary;
      color: white;
      width: 40%;
      justify-content: flex-end;
    }
    &--nav {
      display: flex;
      width: 60%;
      justify-content: space-around;
      flex-flow: column nowrap;
      position: absolute;
      background: $orchid-purple;
      height: 100%;
      padding: 27px;
      width: 10px;
      left: 0px;
      top: 69px;
      a {
        font-weight: $weight-boldest;
        color: white;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
