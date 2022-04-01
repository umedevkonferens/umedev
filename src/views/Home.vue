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
          <div class="keynotes">
            <div class="keynote-wrapper">
              <div class="kn-speaker text">
                <span class="kn-speaker-pre">Opening keynote: </span>
                <h3>
                  Digitalization Disrupts: How software, data and AI transform
                  industry
                </h3>
                <span class="kn-speaker-post">Helena Holmström Olsson</span>
                <a href="/program">Läs mer under program</a>
              </div>
              <div class="kn-speaker">
                <img src="../assets/Helena_Holmstrom_Olsson_Mindre.jpg" />
                <p class="speaker-name">Professor Helena Holmström Olsson</p>
              </div>
            </div>

            <div class="keynote-wrapper">
              <div class="kn-speaker">
                <img src="../assets/Kenneth_Bodin_mindre.jpg" />
                <p class="speaker-name">
                  Kenneth Bodin, CEO and co-founder Algoryx
                </p>
              </div>
              <div class="kn-speaker text">
                <span class="kn-speaker-pre">Closing keynote: </span>
                <h3>
                  The Metaverse - will it revolutionize innovation and social
                  relations - or bring down our democracies?
                </h3>
                <span class="kn-speaker-post">Kenneth Bodin</span>
                <a href="/program">Läs mer under program</a>
              </div>
            </div>
          </div>
        </div>
        <div class="home-content-container content">
          <div class="a">
            <v-card min-height="167">
              <v-card-title>After conference</v-card-title>
              <v-card-text>
                Umedev välkomnar deltagare och talare på After Conference på
                O'learys i Umeå 17:45 den 5e april. Mat och dryck beställes och
                betalas på plats av enskild person.
                <br />
                <br />

                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdAdMZiLWk2jGro6yJbRPAkX3tfd9n2ZbS-PtUPQNFxmk-4RQ/viewform"
                  rel="nooperner noreferrer"
                  >Anmäl dig till After conference</a
                >
                <br />
                <br />
                Avanmäl gärna din plats så att restaurangen får rätt antal
                besökare. Avanmälan finns i bekräftelsemailet.
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
  margin-top: 62px;
}
.keynote-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: content;
  border-top: 4px solid #56ab2f;
  padding-bottom: 22px;
  margin-top: 22px;
}
.kn-speaker {
  width: 100%;
}
.speaker-name {
  width: 100%;
  text-align: center;
}
.kn-speaker.text {
  padding-top: 20px;
}
.kn-speaker.text:first-of-type {
  padding-right: 16px;
}
.kn-speaker.text:last-of-type {
  padding-left: 16px;
}
.kn-speaker-pre {
  font-size: 1.25rem;
}
.kn-speaker h3 {
  font-size: 2.5rem;
  line-height: 1.2;
}
.kn-speaker a {
  margin-top: 22px;
  color: #56ab2f;
  margin-left: 0;
  font-size: 1.1rem;
  display: block;
}
.kn-speaker-post {
  font-size: 1.75rem;
  display: block;
}
.keynote-wrapper img {
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
}

@media screen and (max-width: 600px) {
  a,
  .a {
    width: 100%;
  }
  .main-title {
    min-height: 200px;
  }

  .keynote-wrapper {
    flex-direction: column;
  }
  .keynote-wrapper:last-of-type {
    flex-flow: column-reverse;
  }
  .kn-speaker.text:first-of-type {
    padding-right: 0;
  }
  .kn-speaker a {
    margin-top: 12px;
    margin-bottom: 2rem;
  }
  .kn-speaker.text:last-of-type {
    padding-left: 0;
  }
  .kn-speaker h3 {
    font-size: 2rem;
  }
}
</style>
