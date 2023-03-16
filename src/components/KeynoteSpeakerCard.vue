<template>
  <v-card class="keynotes-card">
    <v-card-title class="keynotes-card-title">{{ title }}</v-card-title>
    <v-card-text>
      <div class="keynotes-container">
        <div class="keynote">
          <div>
            <div class="keynote-title-container">
              <h4 class="keynote-title">{{ openingKeynote.title }}</h4>
            </div>
            <p class="description">{{ openingKeynote.description }}</p>
            <a class="url" :href="openingKeynote.url">Läs mer</a>
          </div>
          <div class="speaker">
            <div>
              <p class="speaker-name">{{ openingKeynote.speaker.name }}</p>
              <p class="speaker-title">{{ openingKeynote.speaker.title }}</p>
            </div>
            <v-avatar class="bio-image" color="grey" size="110" rounded="1">
              <v-img
                cover
                v-bind:src="
                  require('../assets/img/' + openingKeynote.speaker.imageUrl)
                "
              ></v-img>
            </v-avatar>
          </div>
        </div>
        <div class="keynote">
          <div>
            <div class="keynote-title-container">
              <h4 class="keynote-title">{{ endingKeynote.title }}</h4>
            </div>
            <p class="description">{{ endingKeynote.description }}</p>
            <a class="url" :href="endingKeynote.url">Läs mer</a>
          </div>
          <div class="speaker">
            <div>
              <p class="speaker-name">{{ endingKeynote.speaker.name }}</p>
              <p class="speaker-title">{{ endingKeynote.speaker.title }}</p>
            </div>
            <v-avatar class="bio-image" color="grey" size="110" rounded="1">
              <v-img
                cover
                v-bind:src="
                  require('../assets/img/' + endingKeynote.speaker.imageUrl)
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
.keynotes-card {
  width: calc(100% - 4rem);
  margin: 1rem;
}

.keynotes-card-title {
  white-space: pre-wrap;
  word-break: break-word;
  margin: 1rem 0;
}

.keynotes-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  column-gap: 4rem;
}

.keynote {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.keynote-title-container {
  min-height: 50px;
}

.keynote-title {
  font-size: 1.3rem;
  line-height: 1.85rem;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.87);
}
.description {
  margin-bottom: 0;
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

@media screen and (max-width: 600px) {
  .keynotes-container {
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .keynote,
  .keynotes-card {
    width: 100%;
  }

  .keynote-title {
    font-size: 1.2rem;
  }
}
</style>
