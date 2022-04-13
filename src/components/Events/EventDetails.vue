<template lang="">
  <div Class="event-card" v-if="event">
    <span> @ {{ event.time }} on {{ event.date }} </span>
    <h4>{{ event.title }}</h4>
  </div>
</template>
<script>
import EventService from "@/services/EventServie.js";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => (this.event = response.data))
      .catch((err) => console.error(err));
  },
};
</script>
<style></style>
