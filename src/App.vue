<template>
  <v-app>
    <v-app-bar app class="umedev-header">
      <v-toolbar-title class="headline text-uppercase">
        <span>UME</span>
        <span class="font-weight-light">DEV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Hem</v-btn>
      <v-btn text to="/program">Program</v-btn>
      <v-btn text to="/kidz">Kidz</v-btn>
      <v-btn text to="/cfp">Cfp</v-btn>
      <v-btn text to="/sponsra">Sponsra!</v-btn>
      <v-btn text to="/about">Om Umedev</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CfpForm from './components/CfpForm.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    CfpForm,
    Footer,
  },
  data: () => ({
    //
  }),
});
</script>
<style scoped>
.umedev-header {
  background-color: #56ab2f;
}
</style>
<style>
.content {
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  padding: 20px;
}
.header-with-pepper {
  width: 100%;
  background-image: url('./assets/Umedevpepper_svartvit.jpg');
  background-color: white;
  min-height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin: 0 auto;
}
.header-with-pepper h1 {
  font-size: 4rem;
  margin: 0 auto;
  padding-top: 10%;
  color: white;
  text-shadow: black 1px 0 10px;
  display: table;
}
@media screen and (max-width: 1024px) {
  .header-with-pepper {
    min-height: 350px;
  }
}
@media screen and (max-width: 600px) {
  .header-with-pepper {
    min-height: 200px;
  }
}
h1,
h2 {
  font-weight: normal;
}
h1 {
  margin-bottom: 10px;
  margin-top: 10px;
}
h2 {
  margin-bottom: 5px;
}
</style>
