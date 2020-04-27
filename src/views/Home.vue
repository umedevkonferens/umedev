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
          <v-card-title>Umedev sessions 27 maj 2020!</v-card-title>
          <!-- <div class="image-container">
            <img src="../assets/postponed.png" alt="Bild av texten postponed" />
          </div> -->
          <v-card-text>
            För att kunna träffas i någon form har vi tagit fram en digital
            minikonferens, Umedev sessions, som vi genomför över lunchen den 27
            maj. Även om den är kort så har vi både key-note och två spår, så se
            till att anmäla dig!
            <br />
            <br />
            <a href="/anmalan">Anmäl dig här!</a>
            <br />
            <a href="/program">Programmet finns här.</a>
            <br /><br />
            <h3>Inloggning i Zoom</h3>
            <p>
              Vi använder
              <a
                href="https://umu.zoom.us/j/63278091017?pwd=di9sc1djb2VtLzJWZWgwRzVFN0kxQT09"
                target="_blank"
                noopener
                noreferal
                >Umeå universitets Zoom, rummet Umedev</a
              >

              För att komma in i mötet krävs ett lösenord som du får när du
              anmäler dig. Testa gärna att du kan komma in innan mötet, så du
              vet att tekniken funkar. Har du frågor? Hör av dig till
              <a href="mailto:info@umedev.se"></a>
            </p>
            Välkommen!
            <br />
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

a,
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
