<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div class="keynotes-container">
        <div class="keynote">
          <div>
            <h4 class="title">{{ openingKeynote.title }}</h4>
            <p class="description">{{ openingKeynote.description }}</p>
            <a class="url" :href="openingKeynote.url">Läs mer -></a>
          </div>
          <div class="speaker">
            <div>
              <p class="speaker-name">{{ openingKeynote.speaker.name }}</p>
              <p class="speaker-title">{{ openingKeynote.speaker.title }}</p>
            </div>
            <v-avatar class="bio-image" color="grey" size="90" rounded="1">
              <v-img
                cover
                v-bind:src="
                  require('../assets/' + openingKeynote.speaker.imageUrl)
                "
              ></v-img>
            </v-avatar>
          </div>
        </div>
        <div class="keynote">
          <div>
            <h4 class="title">{{ endingKeynote.title }}</h4>
            <p class="description">{{ endingKeynote.description }}</p>
            <a class="url" :href="endingKeynote.url">Läs mer -></a>
          </div>
          <div class="speaker">
            <div>
              <p class="speaker-name">{{ endingKeynote.speaker.name }}</p>
              <p class="speaker-title">{{ endingKeynote.speaker.title }}</p>
            </div>
            <v-avatar class="bio-image" color="grey" size="90" rounded="1">
              <v-img
                cover
                v-bind:src="
                  require('../assets/' + endingKeynote.speaker.imageUrl)
                "
              ></v-img>
            </v-avatar>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type Keynote = {
  title: string;
  description: string;
  url?: string;
  speaker: Speaker;
};

type Speaker = {
  name: string;
  title: string;
  imageUrl: string;
};

export default {
  name: "KeynoteSpeakerCard",
  props: {
    title: String,
    openingKeynote: {
      type: Object as PropType<Keynote>,
      required: true,
    },
    endingKeynote: {
      type: Object as PropType<Keynote>,
      required: true,
    },
  },
};
</script>

<style scoped>
.keynotes-container {
  display: flex;
}

.keynote {
  padding: 1.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
}
.description {
  margin-bottom: 1rem;
}
.url {
  font-size: 1rem;
}

.speaker {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.speaker p {
  margin: 0;
}

.speaker-title {
  color: #585656;
}
</style>
