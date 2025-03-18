<template>
  <v-footer padless>
    <div class="footer">
      <div class="sponsorer">
        <!-- <h3>Tack till våra sponsorer!</h3> -->
        <div class="flex-container">
          <div
            class="spons-container"
            v-for="item in sponsors"
            v-bind:key="item.url"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              v-bind:href="item.url"
              v-bind:class="item.class"
            >
              <img
                v-bind:src="item.icon"
                v-bind:alt="item.alt"
                v-bind:class="item.class"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="sociala-media">
        <h3>Följ oss på</h3>
        <div class="follow-container">
          <v-icon class="mdi" color="black" large>mdi-instagram</v-icon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/umedevkonferens/"
            >Instagram
          </a>
        </div>
        <div class="follow-container">
          <v-icon class="mdi" color="black" large>mdi-facebook</v-icon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/umedevkonferens/"
            >Facebook
          </a>
        </div>

        <div class="follow-container">
          <v-icon class="mdi" color="black" large>mdi-linkedin</v-icon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/umedev/"
            >LinkedIn
          </a>
        </div>
        <h4>Läs vår <a href="/integritetspolicy">integritetspolicy </a></h4>
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    sponsors: [
      //Guld
      {
        name: "Kvardrat",
        url: "https://www.kvadrat.se/",
        icon: require("../assets/img/Kvadrat.png"),
        alt: "Länk till Kvadrats hemsida",
      },
      { 
        name: "Skatteverket",
        url: "https://www.skatteverket.se/",
        icon: require("../assets/img/SKV_RGB_st.png"),
        alt: "Länk till Skatteverket hemsida"
      },
      {
        name: "Umeå Universitet",
        url: "https://www.umu.se/",
        icon: require("../assets/img/UmeaUniversitat.png"),
        alt: "Länk till Umeå Universitets hemsida",
      },
      {
        name: "Pure IT",
        url: "http://www.pure.se/",
        icon: require("../assets/img/PureIT.svg"),
        alt: "Länk till Pure IT:s hemsida",
      },
      {
        name: "Biometria",
        url: "https://biometria.se/",
        icon: require("../assets/img/biometria_logo_liggande-rgb.png"),
        alt: "Länk till Biometria hemsida"
      },
      {
        name: "Algoryx",
        url: "https://www.algoryx.se/",
        icon: require("../assets/img/algoryx.png"),
        alt: "Länk till Algoryx hemsida",
      },
      {
        name: "Umecon",
        url: "https://umecon.se/",
        icon: require("../assets/img/UmeCon.jpg"),
        alt: "Länk till Umecons hemsida",
      },
      {
        name: "Metria",
        url: "https://metria.se/",
        icon: require("../assets/img/Metria_Logotyp.png"),
        alt: "Länk till Metrias hemsida",
        class: "metria",
      },

   
      //silver
      {
        name: "Clear Street",
        url: "https://clearstreet.io/",
        icon: require("../assets/img/clear_street_logo.png"),
        alt: "Länk till Clear Street hemsida",
      },
      {
        name: "Omegapoint",
        url: "https://www.omegapoint.se/",
        icon: require("../assets/img/OmegaPoint.png"),
        alt: "Länk till Omgeapoints hemsida",
      },
      {
        name: "Xlent",
        url: "https://www.xlent.se/",
        icon: require("../assets/img/Xlent.jpg"),
        alt: "Länk till Xlents hemsida",
      },
      {
        name: "Dizparc",
        url: "https://dizparc.se/",
        icon: require("../assets/img/Dizparc.png"),
        alt: "Länk till Dizparcs hemsida",
      },
      {
        name: "Sartorius",
        url: "https://www.sartorius.com/",
        icon: require("../assets/img/Sartorius-Logo.jpg"),
        alt: "Länk till Sartorius hemsida"
      },
      { 
        name: "Upkeeper",
        url: "https://www.upkeeper.se/",
        icon: require("../assets/img/upkeeper-logo.png"),
        alt: "Länk till Upkeeper hemsida"
      },
      //Brons
      { 
        name: "Bulbul",
        url: "https://www.bulbul.se/",
        icon: require("../assets/img/Logo-bulbul-yellow.png"),
        alt: "Länk till Bulbul hemsida"
      },
      { 
        name: "Tietoevry",
        url: "https://www.tietoevry.com/se/",
        icon: require("../assets/img/tietoevry.png"),
        alt: "Länk till Tietoevrys/ hemsida"
      },
    ],
  }),
});
</script>

<style scoped>
.footer {
  padding: 40px 16px;
  width: 100%;
  color: black;
  background-color: white;
}

.sociala-media {
  margin: 0 auto;
  display: table;
  padding-bottom: 50px;
}

h3 {
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 15px;
  margin-top: 20px;
  display: inline-block;
}
.sponsorer {
  width: 100%;
  border-bottom: 4px solid #56ab2f;
  padding-bottom: 32px;
}

.sponsorer h3 {
  text-align: center;
  width: 100%;
}

.sponsorer .flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.sponsorer a {
  text-decoration: none;
}
.spons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  width: 20%;
  margin: 10px;
}
.metria {
  max-height: 120px;
  width: fit-content;
}
.spons-container img {
  width: 100%;
}
.spons-container a {
  display: block;
}
.spons-container a:hover {
  background-color: transparent;
}
.follow-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block: 0.2rem;
}

h4 {
  border-top: 1px solid #56ab2f;
  padding-top: 3px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: normal;
}
h4 a {
  margin-left: 0;
  font-weight: normal;
}
a {
  margin-bottom: 1rem;
  font-size: 18px;
  color: black !important;
}
@media screen and (max-width: 600px) {
  .sociala-media {
    width: 100%;
  }
  .sponsorer {
    width: 100%;
  }
  .sponsorer .flex-container {
    /* justify-content: flex-start; */
    align-items: center;
    justify-content: center;
  }
  .sponsorer h3 {
    margin-top: 30px;
    text-align: start;
  }
  .spons-container {
    margin: 10px 0px;
    width: 100%;
  }
}
</style>
