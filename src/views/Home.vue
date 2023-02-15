<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="30 mars 2023"
      sub-header2="- Vår norrländska IT-konferens"
    />

    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="home-content-container">
          <div class="a">
            <v-card>
              <v-card-title>Deltagaranmälan är öppen!</v-card-title>
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
                  class="link"
                  >Anmäl dig direkt via Google Forms</a
                >
              </v-card-text>
            </v-card>
          </div>
          <div class="a">
            <v-card>
              <v-card-title>Call for Papers – anmäl ditt bidrag</v-card-title>
              <v-card-text>
                <p>
                  Nu har vi öppnat anmälan för bidrag till Umedev. Vi söker
                  talare från alla professioner och välkomnar såväl rutinerade
                  som förstagångs-talare. Se mer information och anmäl dig under
                  Call for Papers.
                </p>
                <a class="link" href="/cfp">Call for Papers </a>
                <a
                  href="https://forms.gle/hHtjADmCqSpq1AvG8"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="link"
                  >Anmäl dig direkt via Google Forms</a
                >
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
  max-width: 1024px;
  margin-top: 30px;
}

h4 {
  margin-top: 30px;
}

.a {
  width: 45%;
  text-decoration: none;
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
