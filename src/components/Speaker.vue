<template>
    <v-card-text :id="speaker.name">
        <p class="speaker-name">{{ speaker.name }}, <span v-if="speaker.title">{{ speaker.title }} på </span>{{ speaker.company }}</p>
        <p class="speaker-description"> {{ speaker.about }} </p>
    </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
import { Speaker } from 'src/model/Schedule'
export default Vue.extend({
  props: {
    speaker: Object as () => Speaker,
  },
  methods: {},
})
</script>

<style scoped>
.speaker-name {
    font-size: 1.3rem;
    font-weight: bold;
}
</style>
