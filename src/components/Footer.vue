<template>
  <v-footer padless>
    <div class="footer">
      <div class="sponsorer">
        <h3>Tack till våra sponsorer!</h3>
        <div
          class="sponsor-tier"
          v-for="tier in sponsorTiers"
          v-bind:key="tier.name"
          v-bind:class="tier.class"
        >
          <h5>{{ tier.name }}</h5>
          <div class="flex-container">
            <a
              class="spons-container"
              v-for="item in tier.sponsors"
              v-bind:key="item.name"
              target="_blank"
              rel="noopener noreferrer"
              v-bind:href="item.url"
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
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    sponsorTiers: [
      {
        name: 'Guldsponsorer',
        class: 'gold',
        sponsors: [
          {
            name: 'Pure',
            url: 'https://www.pure.se/',
            icon: '/logos/pure.png',
            alt: 'Länk till Pures hemsida',
          },
          {
            name: 'Vitec',
            url: 'https://www.vitecsoftware.com/',
            icon: '/logos/vitec.jpg',
            alt: 'Länk till Vitecs hemsida',
          },
          {
            name: 'Skatteverket',
            url: 'https://www.skatteverket.se/',
            icon: '/logos/skv.png',
            alt: 'Länk till Skatteverkets hemsida',
            class: 'square',
          },
          {
            name: 'Kvadrat',
            url: 'https://www.kvadrat.se/',
            icon: '/logos/kvadrat.png',
            alt: 'Länk till Kvadrats hemsida',
          },
        ],
      },
      {
        name: 'Silversponsorer',
        class: 'silver',
        sponsors: [
          {
            name: 'Sartorius',
            url: 'https://www.sartorius.com/',
            icon: '/logos/Sartorius-Logo-RGB-Positiv-72dpi.png',
            alt: 'Länk till Sartorius hemsida',
          },
          {
            name: 'Dizparc',
            url: 'https://dizparc.se/',
            icon: '/logos/disparc.svg',
            alt: 'Länk till Dizparcs hemsida',
          },
          {
            name: 'Xlent',
            url: 'https://www.xlent.se/',
            icon: '/logos/xlent-dark.svg',
            alt: 'Länk till Xlents hemsida',
          },
          {
            name: 'Upkeeper',
            url: 'https://www.upkeeper.se/',
            icon: '/logos/upkeeper_logotyp_webb-1536x460.png.webp',
            alt: 'Länk till Upkeepers hemsida',
          },
          {
            name: 'Clear Street',
            url: 'https://clearstreet.io/',
            icon: '/logos/clearstreet.jpg',
            alt: 'Länk till Clear Streets hemsida',
          },
          {
            name: 'Release Finans',
            url: 'https://www.releasefinans.se/',
            icon: '/logos/release%20finans.png',
            alt: 'Länk till Release Finans hemsida',
          },
          {
            name: 'Omegapoint',
            url: 'https://www.omegapoint.se/',
            icon: '/logos/omegapoint.png',
            alt: 'Länk till Omegapoints hemsida',
            class: 'dense',
          },
        ],
      },
      {
        name: 'Bronssponsorer',
        class: 'bronze',
        sponsors: [
          {
            name: 'Tieto',
            url: 'https://www.tieto.com/',
            icon: '/logos/tieto.png',
            alt: 'Länk till Tietos hemsida',
          },
          {
            name: 'Bulbul',
            url: 'https://www.bulbul.se/',
            icon: '/logos/bulbul.svg',
            alt: 'Länk till Bulbuls hemsida',
          },
        ],
      },
    ],
    previousSponsors: [
      /*{
        name: "Umeå Universitet",
        url: "https://www.umu.se/",
        icon: require("../assets/img/UmeaUniversitat.png"),
        alt: "Länk till Umeå Universitets hemsida",
      },
      {
        name: "Intinor",
        url: "https://intinor.com/",
        icon: require("../assets/img/Intinor.png"),
        alt: "Länk till Intinors hemsida",
      },
      {
        name: "Crypto Rogue",
        url: "https://www.linkedin.com/company/crypto-rogue-games-ab/?originalSubdomain=se",
        icon: require("../assets/img/crg-logo.png"),
        alt: "Länk till Crypto Rogue",
      },
      {
        name: "Omegapoint",
        url: "https://www.omegapoint.se/",
        icon: require("../assets/img/OmegaPoint.png"),
        alt: "Länk till Omgeapoints hemsida",
      },
      {
        name: "Visionite",
        url: "https://visionite.se/",
        icon: require("../assets/img/visionite.png"),
        alt: "Länk till One Groups hemsida",
      },
      {
        name: "Kvardrat",
        url: "https://www.kvadrat.se/",
        icon: require("../assets/img/Kvadrat.png"),
        alt: "Länk till Kvadrats hemsida",
      },
      {
        name: "84 Codes",
        url: "https://www.84codes.com/",
        icon: require("../assets/img/84codes-original.png"),
        alt: "Länk till 84 Codes hemsida",
      },
      {
        name: "Xlent",
        url: "https://www.xlent.se/",
        icon: require("../assets/img/Xlent.jpg"),
        alt: "Länk till Xlents hemsida",
      },
      {
        name: "Clear Street",
        url: "https://clearstreet.io/",
        icon: require("../assets/img/clear_street_logo.png"),
        alt: "Länk till Clear Street hemsida",
      },
      {
        name: "Pure IT",
        url: "http://www.pure.se/",
        icon: require("../assets/img/PureIT.svg"),
        alt: "Länk till Pure IT:s hemsida",
      },
      // {
      //   name: "Teknikhuset",
      //   url: "https://www.teknikhuset.se/",
      //   icon: require("../assets/img/Teknikhuset.png"),
      //   alt: "Länk till Teknikhuset hemsida",
      // },
      {
        name: "Dizparc",
        url: "https://dizparc.se/",
        icon: require("../assets/img/Dizparc.png"),
        alt: "Länk till Dizparcs hemsida",
      },
      {
        name: "Algoryx",
        url: "https://www.algoryx.se/",
        icon: require("../assets/img/algoryx.png"),
        alt: "Länk till Algoryx hemsida",
      },
      // {
      //   name: "Umecon",
      //   url: "https://umecon.se/",
      //   icon: require("../assets/img/UmeCon.jpg"),
      //   alt: "Länk till Umecons hemsida",
      // },
      {
        name: "Metria",
        url: "https://metria.se/",
        icon: require("../assets/img/metria_logotyp.png"),
        alt: "Länk till Metrias hemsida",
        class: "metria",
      },
      {
        name: "Biometria",
        url: "https://biometria.se/",
        icon: require("../assets/img/biometria_logo_liggande-rgb.png"),
        alt: "Länk till Biometria hemsida"
      },
      {
        name: "Sartorius",
        url: "https://www.sartorius.com/",
        icon: require("../assets/img/Sartorius-Logo.jpg"),
        alt: "Länk till Sartorius hemsida"
      },
      {
        name: "Vitec",
        url: "https://www.vitecsoftware.com/",
        icon: require("../assets/img/Vitec-Logo-vertical-software.jpg"),
        alt: "Länk till Vitecs hemsida"
      },
      {
        name: "Skatteverket",
        url: "https://www.skatteverket.se/",
        icon: require("../assets/img/SKV_RGB_st.png"),
        alt: "Länk till Skatteverket hemsida"
      },
      {
        name: "Upkeeper",
        url: "https://www.upkeeper.se/",
        icon: require("../assets/img/upkeeper-logo.png"),
        alt: "Länk till Upkeeper hemsida"
      },
      {
        name: "Bulbul",
        url: "https://www.bulbul.se/",
        icon: require("../assets/img/Logo-bulbul-yellow.png"),
        alt: "Länk till Bulbul hemsida"
      },
      {
        name: "Umecon",
        url: "https://umecon.se/",
        icon: require("../assets/img/UmeCon.jpg"),
        alt: "Länk till Umecons hemsida",
      },
      {
        name: "Euroclear",
        url: "https://euroclear.com/",
        icon: require("../assets/img/euroclear.png"),
        alt: "Länk till Euroclear hemsida",
        class: "metria",
      }
    ,
      {
        name: "Umecon",
        url: "https://umecon.se/",
        icon: require("../assets/img/UmeCon.jpg"),
        alt: "Länk till Umecons hemsida",
      },
      {
        name: "Pure IT",
        url: "http://www.pure.se/",
        icon: require("../assets/img/PureIT.png"),
        alt: "Länk till Pure IT:s hemsida",
      },
      {
        name: "MFEX",
        url: "https://www.mfex.com/",
        icon: require("../assets/img/MFEX.png"),
        alt: "Länk till MFEX IT:s hemsida",
      },
      {
        name: "Algoryx",
        url: "https://www.algoryx.se/",
        icon: require("../assets/img/algoryx.png"),
        alt: "Länk till Algoryx hemsida",
      },
      {
        name: "Teknikhuset",
        url: "https://www.teknikhuset.se/",
        icon: require("../assets/img/Teknikhuset.png"),
        alt: "Länk till Teknikhuset hemsida",
      },
   */
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

.sponsor-tier {
  --logo-width: 160px;
  --logo-height: 80px;
  max-width: 1400px;
  margin: 0 auto 24px;
}
.sponsor-tier.gold {
  --logo-width: 260px;
  --logo-height: 110px;
}
.sponsor-tier.bronze {
  --logo-width: 170px;
  --logo-height: 70px;
}

.sponsor-tier h5 {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #555;
  margin: 16px 0 8px;
}

.sponsorer .flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px 32px;
}
.sponsorer a {
  text-decoration: none;
}
.spons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--logo-width);
  height: var(--logo-height);
  padding: 8px;
  margin: 0;
  transition: transform 0.2s ease;
}
.spons-container:hover {
  background-color: transparent;
  transform: scale(1.05);
}
.spons-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
/* Square logos would otherwise fill the whole box height and look heavier */
.spons-container img.square {
  max-height: 85%;
}
/* Stacked, heavy wordmarks need less room to match the lighter logos */
.spons-container img.dense {
  max-height: 60%;
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
    text-align: center;
  }
  .sponsorer .flex-container {
    gap: 12px 16px;
  }
  .spons-container {
    width: calc(50% - 8px);
    height: calc(var(--logo-height) * 0.7);
  }
}
</style>
