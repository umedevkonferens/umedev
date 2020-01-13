<template>
  <v-footer padless>
    <div class="footer">
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
      </div>
      <div class="sponsorer">
        <h3>Tack till våra sponsorer!</h3>
        <div class="container">
          <div
            class="spons-container"
            v-for="item in sponsors"
            v-bind:key="item.url"
          >
            <a target="_blank" rel="noopener noreferrer" v-bind:href="item.url">
              <img v-bind:src="item.icon" v-bind:alt="item.alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    sponsors: [
      {
        name: 'Omegapoint',
        url: 'https://www.omegapoint.se/',
        icon: require('../assets/OmegaPoint.png'),
        alt: 'Länk till Omgeapoints hemsida',
      },
      {
        name: 'Pure IT',
        url: 'http://www.pureitgroup.se/',
        icon: require('../assets/PureIT.png'),
        alt: 'Länk till Pure IT:s hemsida',
      },
      {
        name: 'Sartorius',
        url: 'https://www.sartorius.com/en',
        icon: require('../assets/Sartorius.png'),
        alt: 'Länk till Sartorius hemsida',
      },
      {
        name: 'Teknikhuset',
        url: 'https://www.teknikhuset.se/',
        icon: require('../assets/Teknikhuset.png'),
        alt: 'Länk till Teknikhuset hemsida',
      },
      {
        name: 'Umeå Universitet',
        url: 'https://www.umu.se/',
        icon: require('../assets/UmeaUniversitat.png'),
        alt: 'Länk till Umeå Universitets hemsida',
      },
      {
        name: 'Umecon',
        url: 'https://umecon.se/',
        icon: require('../assets/UmeCon.jpg'),
        alt: 'Länk till Umecons hemsida',
      },
      {
        name: 'Xlent',
        url: 'https://www.xlent.se/',
        icon: require('../assets/Xlent.jpg'),
        alt: 'Länk till Xlents hemsida',
      },
    ],
  }),
});
</script>

<style scoped>
.footer {
  padding: 16px;
  width: 100%;
  color: black;
  background-color: white;
  min-height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 4px solid #56ab2f;
}
@media screen and (max-width: 600px) {
  .footer {
    flex-direction: column;
  }
}
.sociala-media {
  width: 20%;
}
h3 {
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
  display: inline-block;
}
.sponsorer {
  width: 80%;
}

.sponsorer h3 {
  text-align: center;
  width: 100%;
}

.sponsorer .container {
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
  .sponsorer .container {
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
