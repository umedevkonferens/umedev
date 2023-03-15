<template>
  <div class="booking-container">
    <!-- <h4
      class="booking-heading"
      v-if="booking.room"
    >
      {{ booking.room }}
    </h4> -->
    <div :class="contentClass">
      <p
        class="booking-information"
        v-if="booking.room"
      >
        {{ `${booking.room} | ${timeSlot}` }}
      </p>
      <h4 :class="booking.speakers ? 'booking-title' : 'booking-title centered'">{{ booking.title }}</h4>
      <div class="booking-description" v-if="booking.description">{{ booking.description }}</div>
      <span class="slot-speaker" v-if="booking.speakers">
        <div v-for="(speaker, index) in booking.speakers">
          {{ speaker.name }}<span v-if="speaker.name">, </span>
          <span class="company-name">{{ speaker.company }}</span>
        </div>
      </span>
    </div>
    <!-- <a
      href="#"
      v-if="!singleTrack && !open"
      @click.prevent="handleClickReadMore"
      aria-hidden="true"
      >Läs mer</a
    >
    <a
      href="#"
      v-else-if="!singleTrack && open"
      @click.prevent="handleClickReadMore"
      aria-hidden="true"
      >Visa mindre</a
    > -->
  </div>
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
    handleClickReadMore(event) {
      this.contentClass = this.open
        ? 'booking-content'
        : 'booking-content booking-content-full'
      this.open = !this.open
    },
  },
})
</script>

<style scoped>
.booking-container {
  flex: 1;
  border: 1px solid rgba(86, 171, 47, 0.5);
  padding: 0.8rem;
  overflow: hidden;
}

.booking-content {
  /* max-height: 10rem; */
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
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
  /* max-height: 5rem; */
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

@media screen and (max-width: 600px) {
  .booking-container {
    margin-block: 0.8rem;
  }

  .booking-content {
    /* max-height: 10rem;
    overflow: hidden;
    transition: max-height 0.75s cubic-bezier(0, 1, 0, 1); */
  }
  /* 
  .booking-content-full {
    max-height: 30rem;
    transition: max-height 1s ease-in-out;
  } */
}
</style>
