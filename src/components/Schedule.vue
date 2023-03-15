<template>
  <div>
    <div
      class="slots-container"
      v-for="slot in schedule.slots"
    >
      <h3 class="slot-heading">{{ slot.time }}</h3>
      <div class="slot-row">
        <div class="bookings-container" v-for="booking in slot.bookings">
          <ScheduleBooking :booking="booking" :singleTrack="slot.bookings.length <= 1" :timeSlot="slot.time"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Schedule } from 'src/model/Schedule'
import ScheduleBooking from './ScheduleBooking.vue'
export default Vue.extend({
  components: {
    ScheduleBooking,
  },
  props: {
    schedule: Object as () => Schedule,
  },
})
</script>

<style scoped>
.slots-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin-bottom: 1.5rem;
}

.slot-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 0.8rem;
}

.bookings-container {
  width: 100%;
}

.slot-heading {
  padding-top: 1rem;
  margin: 0.3rem 0 1rem;
  font-size: 1.5rem;
}

h4 {
  font-size: 1.15rem;
}

@media screen and (max-width: 600px) {
  .slots-container {
    flex-direction: column;
    justify-content: flex-start;
  }

  .slot-row {
    flex-direction: column;
  }

  .slot-heading {
    margin: 0;
    padding-top: 0;
  }

  .track {
    width: 100%;
  }
}
</style>
