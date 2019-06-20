<template>
  <div>
      this is a modal
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
