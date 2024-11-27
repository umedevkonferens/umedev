<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="Vår norrländska IT-konferens"
    />

    <v-row
      class="mb-6"
      justify="start"
    >
      <v-col
        md="auto"
        class="content wrapper"
      >
        <div class="home-content-container">
          <div class="a">
            <v-card class="a-plus">
              <v-card-title style="text-align: center; display: block;">Umedev winter edition 🎄</v-card-title>
              <v-card-text>
                <p>
                  <b>Den 3e December<br> 10:30 - 15:00</b> 
                </p>
                <p>Humanisthuset Umeå Universitet <br> Hörsal HUM.D.230 - Hohaj</p>
                </v-card-text>
            </v-card>
          </div>
          <div class="a">
            <v-card class="a-plus">
              <v-card-title style="text-align: center; display: block;">Umedev winter edition - Program ☃️</v-card-title>
              <v-card-text>
                <v-btn text class="text-none" href="/program">Ta en titt på programmet här</v-btn>
              </v-card-text>
            </v-card>
          </div>
          <div class="a">
            <v-card>
              <v-card-title style="text-align: center; display: block;">Umedev 2025 😎</v-card-title>
              <v-card-text>
                <p>
                  Håll utkick
                </p>
              </v-card-text>
            </v-card>
          </div>
          <!-- <div class="a">
            <v-card class="a-plus">
              <v-card-title style="text-align: center; display: block;">Umedev Kidz 🎉</v-card-title>
              <v-card-text>
                <p><b>Anmälan till Umedev Kidz 2024 är nu stängd.</b></p>
                <p>Alla som har anmält sig kommer att få ett bekräftelsemail!</p>
              </v-card-text>
            </v-card>
          </div> -->
          <!-- <div class="a">
            <v-card>
              <v-card-title style="text-align: center; display: block;">Anmälan för talare till UmeDev 2024 är nu stängd!</v-card-title>
              <v-card-text>
                <p><b>CFP var öppen till och med 17 Mars</b></p>
                <p>
                    Skicka in dina förslag på
                  <v-btn text class="text-none" target="_blank" href="https://sessionize.com/umedev_2024">sessionize.com/umedev_2024</v-btn>
                </p>
                <p>
                  Dela gärna denna URL på din officiella webbplats, via sociala nätverk och 
                  genom direkt inbjudan till talare som du skulle vilja se.
                </p>
              </v-card-text>
            </v-card>
          </div> -->
          <!-- <KeynoteSpeakerCard
            title="Nu presenterar vi årets opening och ending keynote!"
            :opening-keynote="{
              title:
                'Opening keynote: Trender och utmaningar i Media AI',
              description: 
                'AI/ML för media och språk är en möjliggörande teknik med många tillämpningsområden. I denna keynote pratar vi om hur långt fältet har kommit med avseende på generering och analys av olika modaliteter, t.ex. bild, ljud, video etc., och om vilka utmaningar som fortfarande kvarstår. Vi tittar även på nationella forskningsinitiativ inom området, och vilka möjligheter det finns för industrin att engagera sig... ',
              url: '/program',
              speaker: {
                name: 'Johanna Björklund',
                title: 'Universitetslektor vid institutionen för datavetenskap vid Umeå universitet',
                imageUrl: 'joh_hollstrom.jpg',
              },
            }"
            :ending-keynote="{
              title:
                'Ending Keynote: Häng med i nuet, för det händer hela tiden',
              description:
                'Under den här presentationen så tittar vi på vad som händer nu med teknisk och social förändring i våran omgivning ur ett större perspektiv och vad du behöver tänka på för att hänga med. Hur vi kan lära oss att leva i, och vara en bidragande del av ett sociotekniskt ekosystem i ständig förändring där vi hela tiden måste innovera och anpassa oss till omvärldens nya förväntningar...',
              url: '/program',
              speaker: {
                name: 'Peter Byström',
                title: '',
                imageUrl: 'peter_bystrom.jpg',
              },
            }"
          /> -->
        </div>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderWithPepper from '@/components/HeaderWithPepper.vue'
import KeynoteSpeakerCard from '@/components/KeynoteSpeakerCard.vue'

export default {
  name: 'Home',
  components: {
    HeaderWithPepper,
    KeynoteSpeakerCard,
  },
}
</script>

<style scoped>
.content {
  max-width: 1024px;
}
h2 {
  display: block;
}
.home-info {
  max-width: 75ch;
  display: block;
}
.home-content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin-top: 30px;
}

h4 {
  margin-top: 30px;
}

.a {
  text-decoration: none;
  width: 45%;
  margin: 1rem;
  text-align: center;
}

.a-plus {
  background-color: rgba(86, 171,47, 0.2);
}

.link {
  margin-top: 0.5rem;
  display: block;
}
li {
  list-style: none;
}
.v-application a {
  color: black;
}
.v-card__title {
  word-break: break-word;
}
.v-card__text {
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
}

@media screen and (max-width: 600px) {
  a,
  .a {
    width: 100%;
  }
}
</style>
