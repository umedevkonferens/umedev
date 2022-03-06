<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT-konferens"
      sub-header2="5 april 2022 HUM huset, Umeå universitet"
    />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div>
          <h3 class="keynote-heading">Keynotes 2022 klara!</h3>
          <div class="keynotes">
            <div class="keynote-wrapper">
              <h4>
                Opening keynote: Digitalization Disrupts: How software, data and
                AI transform industry
              </h4>
              <img src="../assets/Helena_Holmstrom_Olsson_Mindre.jpg" />
              <p class="speaker-name">Professor Helena Holmström Olsson</p>
            </div>
            <div class="keynote-wrapper">
              <h4>
                Closing keynote: The Metaverse - will it revolutionize
                innovation and social relations - or bring down our democracies?
              </h4>
              <img src="../assets/Kenneth_Bodin_mindre.jpg" />
              <p class="speaker-name">
                Kenneth Bodin, CEO and co-founder Algoryx
              </p>
            </div>
          </div>
          <a href="/program">Kolla in programmet för mer info!</a>
        </div>
        <div class="home-content-container content">
          <div class="a">
            <v-card min-height="167">
              <v-card-title>Anmäl dig till årets konferens</v-card-title>
              <v-card-text>
                Du kan nu anmäla dig till årets konferens. <br />
                <br />
                <a href="/anmalan">Anmäl dig!</a>
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
  margin-top: 30px;
}
.image-container {
  display: flex;
  justify-content: center;
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
.keynotes {
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
}
.keynote-heading {
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: normal;
}
.keynote-wrapper {
  width: 49%;
}

.keynote-wrapper img {
  width: 80%;
  margin: 0 auto;
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
