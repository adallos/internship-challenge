<template>
  <div :class="isVisible ? 'modal' : 'modal-hidden'">
    <div class="modal__content">
      <span class="modal__close" @click="close()">&times;</span>
      <p>{{isVisible}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.getters.getModalVisibility;
    }
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
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__content {
    border-radius: 15px;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  &__close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
