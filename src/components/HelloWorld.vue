<template>
  <v-container>
    <v-row class="mb-6" justify="center">
      <v-col md="auto">
        <h1 class="display-4 mb-3">Umedev</h1>
      </v-col>
    </v-row>
    <v-row class="mb-6" justify="center">
      <v-col md="auto">
        <h3 class="display-1 font-weight-light mb-3">23 april 2020</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card min-height="190">
          <v-card-title>Anmälan öppnar igen under 2020!</v-card-title>
          <v-card-text>
            Konferensen hålls den 23 april 2020 i Humanisthuset, Umeå
            universitet. Deltagandet är kostnadsfritt! Välkommen!
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Call for Papers öppnar i december 2019!</v-card-title>
          <v-card-text>
            Detta är en konferens för oss - till oss själva, vi behöver lokala
            talare inom alla discipliner. Dela med dig av din framtidsspaning,
            ett misstag, en effektiv metod eller en cool teknik. Du kan välja
            upplägg mellan en 45 min föreläsning eller en 15 min
            blixtföreläsning.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Hur kan min organisation bidra?</v-card-title>
          <v-card-text>
            Vårt motto är För oss, av oss, för att vi vill det! Och vi hoppas
            att alla IT-företag i vår region vill vara med och genomföra Umedev.
            Det kan man göra genom att ställa upp med
            <router-link :to="{ path: 'cfp' }">talare</router-link>, delta i
            någon av de
            <router-link :to="{ path: 'organisation' }"
              >arbetsgrupper</router-link
            >
            som organiserar konferensen, eller
            <router-link :to="{ path: 'sponsra' }">sponsra</router-link>.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card min-height="190">
          <v-card-title>Följ oss på</v-card-title>
          <v-card-text>
            Få våra uppdateringar på våra sociala medier...
            https://www.instagram.com/umedevkonferens/
            https://twitter.com/umedevkonferens
            https://www.facebook.com/umedevkonferens/
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    //
  }),
});
</script>
