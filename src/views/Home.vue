<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT - konferens"
      sub-header2=""
    />
    <div class="home-content-container content">
      <div class="a">
        <v-card min-height="167">
          <v-card-title
            >Information till alla anmälda deltagare av Umedev
            session!</v-card-title
          >
          <v-card-text>
            Vi har skickat ut ett informations mail som kan ha hamnat i er
            skräppost.
            <br />
            <br />
            Här är länkarna till dom olika möterummen.
            <br />
            <br />

            <h3>Programmet:</h3>
            <h4>11.30 - 13.00 Inledning, keynote och avslutning</h4>
            <span class="bold">Rum: </span>
            <a
              target="_blank"
              noreferer
              noopener
              href="https://umu.zoom.us/j/66622138846?pwd=NXkzYndqNVNpbVBrQkpuS3BOcHluUT09"
              >https://umu.zoom.us/j/66622138846?pwd=NXkzYndqNVNpbVBrQkpuS3BOcHluUT09
            </a>
            <br />
            <h4>12.00 - 12.50 Spår 1</h4>
            <span class="bold">Rum: </span>
            <a
              target="_blank"
              noreferer
              noopener
              href="https://umu.zoom.us/j/68387253514?pwd=WE4yeENoZ0t2WFV2TEt3am5Xb1VPUT09"
            >
              https://umu.zoom.us/j/68387253514?pwd=WE4yeENoZ0t2WFV2TEt3am5Xb1VPUT09
            </a>
            <p class="speaker">
              Microservices och meddelandeköer, Lovisa Johansson, 84Codes
            </p>
            <p class="speaker">
              Specification by example - frontend, Lars-Henrik Snow, Umeå
              Universitet
            </p>
            <h4>12.00 - 12.50 Spår 2</h4>
            <span class="bold">Rum: </span>
            <a
              target="_blank"
              noreferer
              noopener
              href="https://umu.zoom.us/j/61998001836?pwd=amJwU1p3Smsxci80OEMrS3ZZSUxHQT09"
            >
              https://umu.zoom.us/j/61998001836?pwd=amJwU1p3Smsxci80OEMrS3ZZSUxHQT09
            </a>
            <p class="speaker">
              Produktivitetstips för team, Christina Skaskiw, Acino
            </p>
            <p class="speaker">
              När politiken styr utvecklingen, Roger Nilsson, Skatteverket
            </p>
            <br />
            <p>
              Hör av er på
              <a href="mailto:info@umedev.org">info@umedev.org </a> vid frågor
            </p>
          </v-card-text>
        </v-card>
      </div>
      <!-- <a href="/cfp">
        <v-card>
          <v-card-title>Call For Papers är öppet!</v-card-title>
          <v-card-text>
            Detta är en konferens för oss - till oss själva. Vi behöver lokala
            talare inom alla discipliner. Dela med dig av din framtidsspaning,
            ett misstag, en effektiv metod eller en cool teknik. Du kan välja
            upplägg mellan en 45 min föreläsning eller en 15 min
            blixtföreläsning.
            <br />
            <br />
            <p class="bold">
              Sista datum för att skicka in ditt bidrag är 23/3 - 20
            </p>
          </v-card-text>
        </v-card>
      </a>
      <a href="/anmalan">
        <v-card min-height="167">
          <v-card-title>Anmälan är nu öppen!</v-card-title>
          <v-card-text>
            Konferensen hålls den 23 april 2020 i Humanisthuset, Umeå
            universitet. Deltagandet är kostnadsfritt! Välkommen!
            <br />
            <br />
            <span class="bold">Anmäl dig här</span>
          </v-card-text>
        </v-card>
      </a>
      <a href="/sponsra">
        <v-card>
          <v-card-title>Hur kan min organisation bidra?</v-card-title>
          <v-card-text>
            Vårt motto är
            <span class="italic">För oss, av oss, för att vi vill det! </span
            >Och vi hoppas att alla IT-företag i vår region vill vara med och
            genomföra Umedev. Det kan man göra genom att ställa upp med
            <router-link :to="{ path: 'cfp' }">talare</router-link>, delta i
            någon av de
            <router-link :to="{ path: 'about' }">arbetsgrupper</router-link>
            som organiserar konferensen, eller
            <router-link :to="{ path: 'sponsra' }">sponsra</router-link>.
          </v-card-text>
        </v-card>
      </a>
      <a href="/kidz">
        <v-card min-height="190">
          <v-card-title>UmeDev Kidz</v-card-title>
          <v-card-text>
            Vi är glada att meddela att vi även detta år kommer kunna erbjuda
            UmeDev Kidz i samband med konferensen. Mer info kommer dyka upp här
            på hemsidan inom kort.
          </v-card-text>
        </v-card>
      </a> -->
    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'Home',
  components: {
    HeaderWithPepper,
  },
};
</script>

<style scoped>
.content {
  max-width: 1024px;
}
.home-content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
}
.image-container {
  display: flex;
  justify-content: center;
}
img {
  max-width: 80%;
}
.speaker {
  margin: 10px 0;
  margin-left: 10px;
}
h4 {
  margin-top: 30px;
}
h4:first-of-type {
  margin-top: 20px;
}
.a {
  width: 45%;
  text-decoration: none;
  margin: 10px;
}
.v-card__title {
  word-break: break-word;
}
@media screen and (max-width: 600px) {
  a,
  .a {
    width: 100%;
  }
  .main-title {
    min-height: 200px;
  }
}
</style>
