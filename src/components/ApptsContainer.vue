<template>
  <div>
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
</template>

<script>
import ApptsContainerCard from "../components/ApptsContainerCard";
import dateMixin from "./../mixins/dateManagement.js";

export default {
  mixins: [dateMixin],
  name: "Appts",
  components: {
    ApptsContainerCard
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
</style>
