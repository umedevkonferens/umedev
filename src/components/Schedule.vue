<template>
  <div class="tracks-container">
    <div
      class="track"
      v-for="track in schedule.tracks"
    >
      <h3 class="track-heading">{{ track.trackName }}</h3>
      <div v-for="booking in track.bookings">
        <div :class="'program-row' +[booking.allTracks && !booking.description ? ' all-track-row' : '']">
          <span class="time">{{ booking.timeSlot }}</span>
          <h4>{{ booking.title }}</h4>
          <span>{{ booking.description }}</span>
          <span class="track-speaker">
            <div v-for="(speaker, index) in booking.speakers">
              {{ speaker.name }}, <span class="company-name">{{ speaker.company }}</span>
            </div>
          </span>
          <a v-if="booking.description">Läs mer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Schedule } from 'src/model/Schedule'
export default Vue.extend({
  props: {
    schedule: Object as () => Schedule,
  },
})
</script>
<style scoped>
.tracks-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 1rem;
  max-width: 1280px;
}

.tracks-container .program-row {
  border: 1px solid rgba(86, 171, 47, 0.5);
  padding: 0.6rem;
  margin-bottom: 0.3rem;
  /* height: 14rem; */
  /* min-height: 661px; */
}

.all-track-row {
  background-color: rgba(86, 171, 47, 0.074);
  /* height: 6rem !important;
  min-height: 0 !important; */
}

.track {
  width: 47%;
}

.track-heading {
  padding: 0.6rem;
  background-color: rgba(86, 171, 47, 0.2);
  text-align: center;
}

.track-speaker {
  font-size: 0.9rem;
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  margin-block: 0.25rem;
}
h3.track-heading {
  margin-bottom: 0;
}

h4 {
  font-size: 1.15rem;
}

.company-name {
  font-style: italic;
}

@media screen and (max-width: 600px) {
  .tracks-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .track {
    width: 100%;
  }
}
</style>
