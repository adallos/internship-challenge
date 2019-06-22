<template>
  <div :class="isVisible ? 'modal' : 'modal-hidden'"></div>
</template>

<script>
export default {
  props: ["fieldLabel", "confirmationType"],
  methods: {},
  computed: {
    isVisible() {
      return this.$store.getters.getModalVisibility;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
