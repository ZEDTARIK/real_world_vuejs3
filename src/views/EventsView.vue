<template lang="">
  <div Class="events">
    <EventList v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventList from "@/components/Events/EventCard.vue";
import EventService from "@/services/EventServie.js";

export default {
  name: "EventsView",
  components: {
    EventList,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => this.events.data)
      .catch((err) => console.error(err));
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
