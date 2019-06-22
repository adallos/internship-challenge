<template>
  <button class="icon-button material-icons" @click="confirmAction()">{{btnType()}}</button>
</template>
  
<script>
export default {
  props: ["buttonType"],
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
    },
    confirmAction() {
      let newStatus = this.buttonType.substring(5);
      newStatus = newStatus == "cancel" ? "cancelled" : "confirmed";
      console.log(newStatus);
      if (newStatus == "confirmed" || newStatus == "cancelled") {
        return this.$store.dispatch("updateStatus", newStatus);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.icon-button {
  background-color: transparent;
  border-style: none;
  color: #ababab;
  outline: none;
  font-size: 20px;
  padding: 0px 8px;
  &:hover {
    color: #7e7e7e;
  }
}
</style>
