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
            <a target="_blank" rel="noopener noreferrer" v-bind:href="item.url">
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
        <div>
          <v-icon class="mdi" color="black" large>mdi-instagram</v-icon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/umedevkonferens/"
            >Instagram
          </a>
        </div>

        <div>
          <v-icon class="mdi" color="black" large>mdi-twitter</v-icon>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/umedevkonferens"
            >Twitter
          </a>
        </div>

        <div>
          <v-icon class="mdi" color="black" large>mdi-facebook</v-icon>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/umedevkonferens/"
            >Facebook
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
      {
        name: "Umeå Universitet",
        url: "https://www.umu.se/",
        icon: require("../assets/UmeaUniversitat.png"),
        alt: "Länk till Umeå Universitets hemsida",
      },
      {
        name: "Omegapoint",
        url: "https://www.omegapoint.se/",
        icon: require("../assets/OmegaPoint.png"),
        alt: "Länk till Omgeapoints hemsida",
      },
      {
        name: "Algoryx",
        url: "https://www.algoryx.se/",
        icon: require("../assets/algoryx.png"),
        alt: "Länk till Algoryx hemsida",
      },
      {
        name: "Umecon",
        url: "https://umecon.se/",
        icon: require("../assets/UmeCon.jpg"),
        alt: "Länk till Umecons hemsida",
      },
      /*{
        name: "Xlent",
        url: "https://www.xlent.se/",
        icon: require("../assets/Xlent.jpg"),
        alt: "Länk till Xlents hemsida",
      },
      {
        name: "Umecon",
        url: "https://umecon.se/",
        icon: require("../assets/UmeCon.jpg"),
        alt: "Länk till Umecons hemsida",
      },
      {
        name: "Pure IT",
        url: "http://www.pure.se/",
        icon: require("../assets/PureIT.png"),
        alt: "Länk till Pure IT:s hemsida",
      },
      {
        name: "MFEX",
        url: "https://www.mfex.com/",
        icon: require("../assets/MFEX.png"),
        alt: "Länk till MFEX IT:s hemsida",
      },
      {
        name: "Intinor",
        url: "https://intinor.com/",
        icon: require("../assets/Intinor.png"),
        alt: "Länk till Intinors hemsida",
      },
      {
        name: "One Group",
        url: "https://one-group.se/",
        icon: require("../assets/Onegroup.jpg"),
        alt: "Länk till One Groups hemsida",
      },
      {
        name: "Algoryx",
        url: "https://www.algoryx.se/",
        icon: require("../assets/algoryx.png"),
        alt: "Länk till Algoryx hemsida",
      },
      {
        name: "Teknikhuset",
        url: "https://www.teknikhuset.se/",
        icon: require("../assets/Teknikhuset.png"),
        alt: "Länk till Teknikhuset hemsida",
      },
      {
        name: "Kvardrat",
        url: "https://www.kvadrat.se/",
        icon: require("../assets/Kvadrat.png"),
        alt: "Länk till Kvadrats hemsida",
      },*/
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
}
.sponsorer a {
  text-decoration: none;
}
.spons-container {
  max-width: 300px;
  width: 30%;
  margin: 10px;
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
  margin-left: 10px;
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
    justify-content: flex-start;
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
