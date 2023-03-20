<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="Vår norrländska IT-konferens"
      sub-header2="Onsdag 30/3 2023, 08.30 - 16.30 på Umeå Universitet, Humanisthuset"
    />

    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="home-content-container">
          <KeynoteSpeakerCard
            title="Nu presenterar vi årets opening och ending keynote!"
            :opening-keynote="{
              title:
                'Opening Keynote: Nya analyser möjliga med fjärranalys och AI',
              description:
                'Fjärranalys används för att på ett effektivt sätt kartlägga och observera det som sker på jorden med hjälp av data som samlats in från ovan. Med nya satelliter och nationella laserskanningar öppnar sig nya möjligheter…',
              url: '/program',
              speaker: {
                name: 'Johanna Skarpman Sundholm',
                title: 'Data scientist, Metria',
                imageUrl: 'johanna_skarpman_sundholm.jpg',
              },
            }"
            :ending-keynote="{
              title:
                'Ending Keynote: Att vara superhjälte när superskurkarna använder kod!',
              description:
                'Olika typer av elakartad kod i olika komplexa arkitekturer används i en allt större utsträckning vid attacker över hela internet och världen. Ungdomar kan köpa virus och verktyg med virtuella valutor i dataspel för...',
              url: '/program',
              speaker: {
                name: 'Johan Lindfors',
                title: 'CINO, Truesec',
                imageUrl: 'johan_lindfors.jpg',
              },
            }"
          />
          <div class="a">
            <v-card>
              <v-card-title>Välkomna på Umedev Kidz 😎</v-card-title>
              <v-card-text>
                <p>
                  Kvällen innan konferensen organiserar vi ett event där
                  <span class="bold">10-15-åringar</span> får prova på
                  programmering.
                </p>
                <p>
                  Programmering handlar om samarbete och kommunikation i team
                  och det är också så vi kommer att arbeta under sessionerna -
                  tillsammans.
                </p>
                <p>
                  Vi har också ett vuxenspår; Hjälp, mitt barn vill bli
                  programmerare! Det är för dig som förälder eller vuxen som
                  arbetar med barn och vill lära dig mer om hur du kan stödja
                  unga som är nyfikna på programmering.
                </p>
                <a href="/kidz">Läs mer under Kidz</a>
                <br />
                <br />
              </v-card-text>
            </v-card>
          </div>
          <div class="a">
            <v-card>
              <v-card-title>Deltagaranmälan öppen</v-card-title>
              <v-card-text>
                <p>
                  Kom och utbyt erfarenheter, nätverka och utveckla ditt
                  kunnande. Umedev är en endagskonferens för den norrländska
                  IT-branschen. Det bjuds på förmiddagsfika, lunch,
                  eftermiddagsfika och är kostnadsfri för alla våra deltagare.
                </p>
                <p>Välkomna!</p>
                <a
                  href="https://forms.gle/Rx6d1USBoQkWH8B87"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Anmäl dig direkt via Google Forms</a
                >
                <br />
                <br />
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderWithPepper from "@/components/HeaderWithPepper.vue";
import KeynoteSpeakerCard from "@/components/KeynoteSpeakerCard.vue";

export default {
  name: "Home",
  components: {
    HeaderWithPepper,
    KeynoteSpeakerCard,
  },
};
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
  justify-content: flex-start;
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
