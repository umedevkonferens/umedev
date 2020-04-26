<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT - konferens"
      sub-header2="27 maj 2020"
    />
    <div class="home-content-container content">
      <div class="a">
        <v-card min-height="167">
          <v-card-title>Umedev konferens uppskjuten!</v-card-title>
          <!-- <div class="image-container">
            <img src="../assets/postponed.png" alt="Bild av texten postponed" />
          </div> -->
          <v-card-text>
            Planeringsgruppen har i veckan beslutat att ställa in Umedev. Det
            känns väldigt tråkigt, men det är det enda beslut som går att ta vid
            de här omständigheterna.
            <br /><br />
            Om läget ser annorlunda ut i höst så hoppas vi kunna genomföra
            Umedev då istället.
            <br /><br />
            Tack alla ni som skickat in bidrag, vi hoppas att ni vill vara med
            oss vid ett senare tillfälle. <br /><br /><span class="bold"
              >För att åtminstone kunna ses virtuellt så undersöker vi
              möjligheten att hålla en eller ett par föreläsningar online den 23
              april.</span
            >
            Håll utkik efter det! <br /><br />
            <br />Vi ses online!
            <br />
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
