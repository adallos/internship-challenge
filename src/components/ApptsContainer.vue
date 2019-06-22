<template>
  <div class="main-appts-container">
    <the-heading/>
    <the-navbar class="navbar"/>
    <div class="appts">
      <upper-app-content/>
      <div class="all-appointments">
        Today
        <section
          v-for="appointment in todayArr()"
          :key="appointment.id"
          @click="setClickedAsCurrentAppt(appointment)"
        >
          <appts-container-card :apptData="appointment"/>
        </section>Upcoming
        <section
          v-for="appointment in upcomingArr()"
          :key="appointment.id"
          @click="setClickedAsCurrentAppt(appointment)"
        >
          <appts-container-card :apptData="appointment"/>
        </section>
        <button @click="increaseFetch">fetch more</button>
      </div>
    </div>
  </div>
</template>

<script>
import ApptsContainerCard from "../components/ApptsContainerCard";
import dateMixin from "./../mixins/dateManagement.js";
import UpperAppContent from "./UpperAppContent";
import TheNavbar from "./TheNavbar";
import TheHeading from "./TheHeading";

export default {
  mixins: [dateMixin],
  name: "Appts",
  components: {
    ApptsContainerCard,
    UpperAppContent,
    TheNavbar,
    TheHeading
  },
  computed: {
    appointments() {
      return this.$store.getters.getAppts;
    },
    apptCount() {
      return this.$store.getters.getFetchStart;
    }
  },
  methods: {
    increaseFetch() {
      this.$store.dispatch("fetchNextTen"),
        this.$store.dispatch("fetchAppts", this.apptCount);
    },
    setClickedAsCurrentAppt(appt) {
      this.$store.dispatch("commitClickedAppt", appt);
      this.$store.dispatch("toggleModal", true);
    },
    todayArr() {
      return this.$store.getters.getAppts.filter(
        appt =>
          this.mixinDayNonOrdinal(appt.appointmentStart) == this.currentDay() &&
          this.mixinApptDayMillis(appt.appointmentStart) >
            this.currentTimeMillis()
      );
    },
    upcomingArr() {
      return this.$store.getters.getAppts.filter(
        appt =>
          this.mixinDayNonOrdinal(appt.appointmentStart) != this.currentDay()
      );
    }
  }
};
</script>

<style scoped lang="scss">
.main-appts-container {
  display: flex;
}
.appts {
  width: 100%;
  background-color: #fbfbfb;
  position: relative;
  top: 65px;
}
.navbar {
  background: white;
}
.all-appointments {
  box-sizing: border-box;
  width: 100%;
}

@media (min-width: $tablet-mq) {
  .all-appointments {
    box-sizing: border-box;
    width: 73%;
  }
}
</style>