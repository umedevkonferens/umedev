<template>
  <v-card class="full-height">
    <div class="booking-container">
      <div :class="contentClass">
        <p
          class="booking-information"
          v-if="booking.room"
        >
          {{ `${booking.room} | ${timeSlot}` }}
        </p>
        <h4
          :class="booking.speakers ? 'booking-title' : 'booking-title centered'"
        >
          {{ booking.title }}
        </h4>
        <div
          class="booking-description"
          v-if="booking.description"
        >{{ booking.description }}</div>
        <span
          class="slot-speaker"
          v-if="booking.speakers"
        >
          <div v-for="(speaker) in booking.speakers">
            {{ speaker.name }}<span v-if="speaker.name">, </span>
            <span class="company-name">{{ speaker.company }}</span>
          </div>
        </span>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Booking } from 'src/model/Schedule'
export default Vue.extend({
  data() {
    return {
      windowHeight: window.innerHeight,
      open: false,
      contentClass: 'booking-content',
    }
  },
  props: {
    singleTrack: Boolean,
    timeSlot: String,
    booking: Object as () => Booking,
  },
  methods: {
  },
})
</script>

<style scoped>
.booking-container {
  flex: 1;
  border-top: 4px solid rgba(86, 171, 47, 0.5);
  padding-top: calc(0.8rem + 4px);
  padding: 0.8rem;
  overflow: hidden;
  height: 100%;
}

.booking-content-full {
  max-height: 100rem;
  transition: max-height 0.5s ease-in-out;
}

.booking-title {
  line-height: 1.3rem;
  margin: 0.5rem 0 1rem 0;
}

.booking-description {
  line-height: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  overflow: hidden;
  min-width: 0;
}

.slot-speaker {
  font-size: 0.9rem;
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  margin: 1rem 0;
}

h4 {
  font-size: 1.15rem;
}

.company-name {
  font-style: italic;
}

.centered {
  text-align: center;
  margin-bottom: 0.5rem !important;
}

.full-height {
  height: 100%;
}

@media screen and (max-width: 600px) {
  .booking-container {
    margin-block: 0.8rem;
  }
}
</style>
