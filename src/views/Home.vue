<template>
  <div>
    <!--    <HeaderWithPepper
      header="Umedev"
      sub-header1="Vår norrländska IT-konferens"
    /> -->
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="w-wrapper">
          <h1>Umedev Winter Edition</h1>
          <div style="margin-bottom: 1rem">
            <p style="margin-bottom: 0" class="bold">Torsdag 20 november</p>
            <p style="margin-bottom: 0" class="bold">kl.10.00 - 15.00</p>
            <p>Humanisthuset Umeå Universitet.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflvGFCEstZd-oShXLbGXiKJ6-3Y_we3UtX5hbZqWQ1AwNLMg/viewform"
              class="link-button"
              target="_blank"
              rel="noopener noreferrer"
              >Anmäl dig till årets Winter Edition</a
            >
          </div>

          <h3 class="w-keynote">Opening Keynote: Cybershow</h3>
          <div class="w-keynote-wrapper">
            <div class="w-keynote-item">
              <p class="bold w-speaker-name">Rune Carlsen</p>
              <p>
                Föreläsningen Cybershow är en kraftfull blandning av
                underhållning och professionell insikt från Rune. Både
                kriminella och trollkarlar använder psykologiska tekniker för
                att manipulera och påverka sin publik eller sitt mål. Metoder
                som vilseledning, social manipulation, illusionen av val,
                utnyttjande av nyfikenhet och känslor, förvirring, manipulation
                av förtroende, användning av teknik och mycket mer.
              </p>
              <p>
                Detta är en presentation i en klass för sig där underhållning
                och magi genomsyras av professionellt, väsentligt innehåll som
                höjer medvetenheten på ett verkligt minnesvärt sätt.
              </p>
              <h4 class="w-about-stuff">Om talaren</h4>
              <p>
                Rune Carlsen har i över 25 år genomfört kurser och föreläsningar
                för de flesta stora företag i Norge. Förutom att vara en
                internationellt prisbelönt trollkarl levererar Rune en
                presentation som saknar motstycke. Hans unika kombination av
                professionell expertis, inspirerande framförande och magisk
                presentation erbjuder dina anställda och ditt företag något
                verkligt extraordinärt!
              </p>
            </div>
            <div class="w-keynote-item">
              <v-img
                class="w-keynote-image"
                cover
                v-bind:src="require('../assets/img/Rune-Carlsen.jpeg')"
              ></v-img>
            </div>
          </div>
          <br />
          <div>
            <h2>Eftermiddagens program</h2>
            <div class="w-program-wrapper">
              <div class="w-program-item">
                <p class="w-pill">Spår 1</p>
                <div>
                  <h3 class="w-program-heading">
                    Smidig utveckling, test och drift i säkra miljöer (50 min)
                  </h3>
                  <p class="bold w-speaker-name">Thomas Nyström</p>
                  <p>
                    Vi har alla hört att det här med säkerhet är viktigt, men
                    ändå duggar larmen om dataintrång och läckta personuppgifter
                    tätt. Vi hör också ganska ofta att till och med de största
                    molntjänsterna trillat ner på grund av “ett problem vid en
                    uppdatering”.
                  </p>
                  <p>
                    Men, det är väl inte så konstigt för det här med säkerhet är
                    väl svårt, krångligt och omständligt?
                  </p>
                  <p>
                    Under sitt pass på UmeDev Winter Edition kommer Thomas på
                    ett pedagogiskt sätt visa hur du kan kombinera ett gediget
                    säkerhetstänk med funktioner som redan finns inbyggda i
                    Windows (eller Linux) för att skapa säkra, isolerade men
                    ändå väldigt smidiga miljöer för utveckling, test och drift
                    av en typisk webbapplikation, vare sig den ska köras internt
                    eller i molnet.
                  </p>
                  <h4 class="bold w-about-stuff" style="margin-bottom: 0">
                    Om talaren
                  </h4>
                  <p>
                    Thomas har en Magisterexamen i Datavetenskap och är en
                    Senior utvecklare och IT konsult som har arbetat mer än 25
                    år i IT branschen.
                  </p>
                  <p>
                    Enkelhet, användbarhet och säkerhet är hans ledord och han
                    arbetar även med IT utbildning och är uppskattad för sin
                    enkla och pedagogiska metodik.
                  </p>
                </div>
                <br />
                <div>
                  <h3 class="w-program-heading">Vad är Darkwebb? (50 min)</h3>
                  <p class="bold w-speaker-name">Rune Carlsen</p>
                  <p>
                    Du har hört talas om det, men du har verkligen ingen aning
                    om vad de pratar om. Men, - Dark Web är en del av internet
                    där de flesta kriminella tjänster handlas. Både de mindre
                    seriösa, - men också de du aldrig i din vildaste fantasi
                    kunnat föreställa dig existerade.
                  </p>
                  <p>
                    Men, hur fungerar Dark Web egentligen? Hur ser det ut? Hur
                    kommer man in? Vad handlas, till vilket pris? Hur hemsk är
                    den här platsen? Är den för någon och vilka kan
                    konsekvenserna bli av att besöka den? Kom och se och upplev
                    Dark Web. Vi varnar dig i förväg! - Besök ALDRIG Dark Web -
                    det kan få extremt allvarliga konsekvenser för dig
                    personligen, - och som företag.
                  </p>
                  <p>
                    Den här föreläsningen kommer att förändra din syn på
                    internet, för alltid.
                  </p>
                </div>
              </div>
              <div class="w-program-item">
                <p class="w-pill">Spår 2</p>
                <h3 class="w-program-heading">
                  Compliance Scoreboard - Hackaton (2h inkl paus)
                </h3>
                <p class="bold w-speaker-name">Andrea Berglund</p>

                <p>
                  Vi är många som jobbar i organisationer som behöver följa
                  samma eller liknande lagstiftning. Hur väl vi uppfyller dessa
                  är generellt olika mellan organisationer och/eller mellan team
                  och område inom en organisation.
                </p>
                <p>
                  Med inspiration från gameing, idéer från GitHub, Swedbank och
                  Omegapoint så vill jag med detta hackaton ta fram ett utkast
                  till hur vi skulle kunna visualisera vår Complience-status i
                  vår kod på ett roligare och mer lustfyllt sätt.
                </p>

                <p class="bold w-about-stuff" style="margin-bottom: 0">
                  Upplägg
                </p>

                <ul>
                  <li>
                    Vi börjar med en
                    <span class="bold">introduktion och lite inspiration </span>
                    - jag visar lite exempel som jag tror vi kan inspireras av!
                  </li>
                  <li>
                    <span class="bold">Hackaton</span> - vi delar in oss i
                    grupper med lite olika fokus: design, utveckling, lagar och
                    mätningar.
                  </li>
                  <li>
                    <span class="bold">Metod</span> - vi jobbar en bit och demar
                    ofta mellan grupperna. Jag agerar produktägare och kan
                    hjälpa till om ni kör fast. Jag har även med mig Mia
                    Petersson och Adam Sernheim från Umedev som kommer hjälpa
                    till i respektive grupp.
                  </li>
                  <li>
                    <span class="bold">Koden och designen</span> kommer
                    publiceras med Apache 2 licens och läggs upp GitHub.
                  </li>
                </ul>
                <p>
                  Obs! Begränsat antal platser, anmäl ditt intresse i formuläret
                  till Winter edition.
                </p>
                <p class="w-info">
                  <span>Tid: 12.30 - 14.30</span><br />
                  Plats:
                  <a
                    href="https://use.mazemap.com/#v=1&campusid=289&zlevel=2&center=20.307195,63.822666&zoom=18&sharepoitype=poi&sharepoi=755719"
                    rel="noopener noreferrer"
                    target="_blank"
                    >HUM.G.219</a
                  >
                </p>

                <h4 class="bold w-about-stuff" style="margin-bottom: 0">
                  Om talaren
                </h4>
                <p>
                  Andrea Berglund är systemutvecklare, lösningsarkitekt och
                  tillgänglighetsexpert med fokus på att skapa trygga och
                  tillgängliga digitala upplevelser för alla användare.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="home-content-container">
          <!-- <div class="a">
            <v-card class="a-plus">
              <v-card-title style="text-align: center; display: block"
                >Umedev Winter Edition</v-card-title
              >
              <v-card-text>
                <p style="margin-bottom: 0" class="bold">Torsdag 20 november</p>
                <p class="bold">kl.10.00 - 15.00</p>
                <p>Humanisthuset Umeå Universitet.</p>
                <p>Anmälan öppnar inom kort!</p>
              </v-card-text>
            </v-card>
          </div> -->
          <div class="a">
            <v-card class="a-plus">
              <v-card-title style="text-align: center; display: block"
                >Save the Date för Umedev 2026</v-card-title
              >
              <v-card-text>
                <p class="bold">Torsdag 26 mars</p>
                <p>Humanisthuset Umeå Universitet.</p>
                <p>Anmälan öppnar senare i vår.</p>
              </v-card-text>
            </v-card>
          </div>

          <!--      <KeynoteSpeakerCard
            title="Umedev Winter Edition 2025"
            :openingKeynote="{
              title: 'Opening keynote: Cybershowen',
              description: '',
              url: '/program',
              speaker: {
                name: 'Rune Carlsen',
                title: '',
                imageUrl: 'Xlent.jpg',
              },
            }"
            :endingKeynote="{
              title: 'Ending Keynote: Vad är Darkwebb',
              description: '',
              url: '/program',
              speaker: {
                name: 'Rune Carlsen',
                title: '',
                imageUrl: 'Xlent.jpg',
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
  background-color: rgba(86, 171, 47, 0.2);
}

.link {
  margin-top: 0.5rem;
  display: block;
}
.link-button {
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: rgba(86, 171, 47, 0.2);
  margin-bottom: 2.2rem;
  display: block;
  width: fit-content;
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
.w-wrapper {
  padding: 2rem;
}
.w-keynote {
  font-size: 2.5rem;
  font-weight: normal;
}
.w-keynote-image {
  margin-top: 4rem;
  max-width: 300px;
  width: 100%;
}
.w-keynote-item {
  width: 100%;
}
.w-program-wrapper,
.w-keynote-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  gap: 1rem;
  flex-grow: 1;
  margin-top: 1rem;
}
.w-speaker-name {
  font-size: 1.125rem;
  margin-top: 1.5rem;
}
.w-pill {
  border-radius: 8px;
  background-color: rgba(86, 171, 47, 0.2);
  padding: 0.25rem 0.5rem;
  width: fit-content;
  font-weight: 600;
}
.w-program-item {
  width: 100%;
  padding-left: 0.75rem;
  border-left: 3px solid #56ab2f;
}
.w-about-stuff {
  font-size: 1.15rem;
}
.w-program-heading {
  font-size: 1.6rem;
  margin: 0;
  line-height: 1.25;
  font-weight: normal;
}

@media screen and (max-width: 600px) {
  a,
  .a {
    width: 100%;
  }
  .w-keynote {
    font-size: 2rem;
  }
  .w-wrapper {
    padding: 0;
    margin: 1rem;
  }
  .w-program-wrapper,
  .w-keynote-wrapper {
    flex-direction: column;
  }
  .w-keynote-image {
    margin-top: 0;
  }
  .w-program-item {
    /*border-bottom: 3px solid #56ab2f;*/
  }
}
</style>
