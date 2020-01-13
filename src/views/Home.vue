<template>
  <div>
    <div class="main-title">
      <h1>Umedev</h1>
      <h2>23 april 2020</h2>
    </div>

    <div class="home-content-container content">
      <v-card min-height="167">
        <v-card-title>Anmälan öppnar igen under 2020!</v-card-title>
        <v-card-text>
          Konferensen hålls den 23 april 2020 i Humanisthuset, Umeå universitet.
          Deltagandet är kostnadsfritt! Välkommen!
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>Call for Papers öppnar i december 2019!</v-card-title>
        <v-card-text>
          Detta är en konferens för oss - till oss själva, vi behöver lokala
          talare inom alla discipliner. Dela med dig av din framtidsspaning, ett
          misstag, en effektiv metod eller en cool teknik. Du kan välja upplägg
          mellan en 45 min föreläsning eller en 15 min blixtföreläsning.
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title>Hur kan min organisation bidra?</v-card-title>
        <v-card-text>
          Vårt motto är För oss, av oss, för att vi vill det! Och vi hoppas att
          alla IT-företag i vår region vill vara med och genomföra Umedev. Det
          kan man göra genom att ställa upp med
          <router-link :to="{ path: 'cfp' }">talare</router-link>, delta i någon
          av de
          <router-link :to="{ path: 'organisation' }"
            >arbetsgrupper</router-link
          >
          som organiserar konferensen, eller
          <router-link :to="{ path: 'sponsra' }">sponsra</router-link>.
        </v-card-text>
      </v-card>
      <v-card min-height="190">
        <v-card-title>UmeDev Kidz</v-card-title>
        <v-card-text>
          Vi är glada att meddela att vi även detta år kommer kunna erbjuda
          UmeDev Kidz i samband med konferensen. Mer info kommer dyka upp här på
          hemsidan inom kort.
        </v-card-text>
      </v-card>
    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    //
  }),
});
</script>

<style scoped>
.content {
  max-width: 1024px;
}
.main-title {
  width: 100%;
  background-image: url('../assets/Umedevpepper_svartvit.jpg');
  background-color: white;
  min-height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin: 0 auto;
}
.main-title h1,
h2 {
  font-size: 4rem;
  margin: 0 auto;
  padding-top: 10%;
  color: white;
  text-shadow: black 1px 0 10px;
  display: table;
}
.main-title h2 {
  padding: 0;
  font-size: 2.5rem;
}
.home-content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
}
.v-card {
  width: 45%;
  margin: 10px;
}
@media screen and (max-width: 600px) {
  .v-card {
    width: 100%;
  }
  .main-title {
    min-height: 200px;
  }
}
</style>
