<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT-konferens"
      sub-header2=""
    />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="home-content-container content">
          <div class="home-info">
            <h2>Umedev konferens 2022</h2>
            <p>
              Tisdagen den <span class="bold">5 april 2022 </span>planerar vi en
              Umedev heldagskonferens i HUM huset på Umeå universitet.
            </p>
            <p>
              All information går ut vi våra sociala medier som finns under
              namnet umedevkonferens på Facebook, Twitter och Instagram.
            </p>
            <p class="bold">
              Vi ses snart! / Umedev
            </p>
          </div>

          <div class="a">
            <v-card min-height="167">
              <v-card-title>Call for papers öppen!</v-card-title>
              <v-card-text>
                Vi söker talare till årets upplaga av Umedev.
                <br />
                <br />
                <a href="/cfp">Anmäl ditt bidrag!</a>
              </v-card-text>
            </v-card>
          </div>
          <div class="a">
            <v-card>
              <v-card-title>Följ oss på</v-card-title>
              <ul>
                <li>
                  <v-icon class="mdi" color="black" large>mdi-instagram</v-icon>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/umedevkonferens/"
                    >Instagram
                  </a>
                </li>

                <li>
                  <v-icon class="mdi" color="black" large>mdi-twitter</v-icon>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/umedevkonferens"
                    >Twitter
                  </a>
                </li>

                <li>
                  <v-icon class="mdi" color="black" large>mdi-facebook</v-icon>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/umedevkonferens/"
                    >Facebook
                  </a>
                </li>
              </ul>
              <br />
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

export default {
  name: "Home",
  components: {
    HeaderWithPepper,
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
li {
  list-style: none;
}
.v-application a {
  color: black;
  margin-left: 0.5em;
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
