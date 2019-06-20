<template>
  <div>
    <appts-container/>
    <sidebar-container :isVisible="false"/>
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

<style lang="scss">
.icon-button {
  background-color: transparent;
  border-style: none;
  color: #ababab;
  outline: none;
  font-size: 18px;
  &:hover {
    color: #7e7e7e;
  }
}
</style>