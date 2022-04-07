<template>
  <div>
    <HeaderWithPepper
      header="Umedev"
      sub-header1="- Vår norrländska IT-konferens"
      sub-header2=""
    />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="thanks-container">
          <h2 class="thanks">Tack för i år!</h2>
          <p class="thanks-note">
            Umedevs arbetsgrupp vill tacka alla
            <span class="bold">talare</span>,
            <span class="bold">volontärer </span> och
            <span class="bold">deltagare </span>för 2022:s upplaga av Umedev. Vi
            hoppas se er igen nästa år.
          </p>
          <p>
            Stort tack till våra keynote-talare,
            <span class="bold">Kenneth Brodin</span> och
            <span class="bold">Professor Helena Holmström Olsson</span>.
          </p>
          <div class="image-container">
            <div class="image">
              <img alt="Kenneth Bodin" src="../assets/Kenneth_800.jpg" />
            </div>
            <div class="image">
              <img
                alt="Professor Helena Holmström Olsson"
                src="../assets/Helena_800.jpg"
              />
            </div>
          </div>
        </div>
        <div class="home-content-container content">
          <div class="a">
            <v-card>
              <v-card-title>Var med i projektgruppen!</v-card-title>
              <v-card-text
                >Umedev organiseras av oss för oss för att vi vill det!
                Projektgruppen är alltid öppen för fler som vill vara med i
                konferensen olika delar. Vill du vara med och organsiera Umedev,
                eller vill veta mer så maila
                <a href="mailto:info@umedev.org">info@umedev.org</a>.
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
.image-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image-container img {
  width: 100%;
}
.image {
  width: 48%;
}
.thanks-container {
  padding-bottom: 2rem;
  border-bottom: 4px solid #56ab2f;
}
.thanks {
  border-top: 4px solid #56ab2f;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 2.5rem;
  line-height: 1.2;
}
.thanks-note {
  max-width: 65ch;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
}

@media screen and (max-width: 600px) {
  a,
  .a {
    width: 100%;
  }
  .main-title {
    min-height: 200px;
  }
  .image-container {
    flex-direction: column;
  }
  .image {
    width: 100%;
    margin-bottom: 1rem;
  }
  .thanks {
    font-size: 1.75rem;
  }
}
</style>
