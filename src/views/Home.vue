<template>
  <div class="outer-router-container">
    <appts-container/>
    <sidebar-container/>
  </div>
</template>

<script>
import ApptsContainer from "../components/ApptsContainer";
import SidebarContainer from "../components/SidebarContainer";

export default {
  components: {
    ApptsContainer,
    SidebarContainer
  },
  name: "home",
  computed: {
    appts() {
      return this.$store.getters.getAppts;
    },
    apptCount() {
      return this.$store.getters.getFetchStart;
    }
  },
  created() {
    this.$store.dispatch("fetchAppts", this.apptCount);
  },
  methods: {
    increaseFetch() {
      this.$store.dispatch("fetchNextTen"),
        this.$store.dispatch("fetchAppts", this.apptCount);
    }
  }
};
</script>

<style scoped lang="scss">
</style>