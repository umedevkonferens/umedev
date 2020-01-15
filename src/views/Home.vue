<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT - konferens"
      sub-header2="23 april 2020"
    />
    <div class="home-content-container content">
      <a href="/cfp">
        <v-card>
          <v-card-title>Call For Papers öppnar i december 2019!</v-card-title>
          <v-card-text>
            Detta är en konferens för oss - till oss själva, vi behöver lokala
            talare inom alla discipliner. Dela med dig av din framtidsspaning,
            ett misstag, en effektiv metod eller en cool teknik. Du kan välja
            upplägg mellan en 45 min föreläsning eller en 15 min
            blixtföreläsning.
          </v-card-text>
        </v-card>
      </a>
      <v-card min-height="167" class="a">
        <v-card-title>Anmälan öppnar igen under 2020!</v-card-title>
        <v-card-text>
          Konferensen hålls den 23 april 2020 i Humanisthuset, Umeå universitet.
          Deltagandet är kostnadsfritt! Välkommen!
        </v-card-text>
      </v-card>
      <a href="/sponsra">
        <v-card>
          <v-card-title>Hur kan min organisation bidra?</v-card-title>
          <v-card-text>
            Vårt motto är För oss, av oss, för att vi vill det! Och vi hoppas
            att alla IT-företag i vår region vill vara med och genomföra Umedev.
            Det kan man göra genom att ställa upp med
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
      </a>
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
