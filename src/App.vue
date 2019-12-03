<template>
  <v-app class="umedev-header">
    <v-app-bar app class="umedev-header">
      <v-toolbar-title class="headline text-uppercase">
        <span>UME</span>
        <span class="font-weight-light">DEV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="" text to="/">Hem</v-btn>
      <v-btn color="" text to="/program">Program</v-btn>
      <v-btn color="" text to="/kidz">Kidz</v-btn>
      <v-btn color="" text to="/cfp">Cfp</v-btn>
      <v-btn color="" text to="/about">Om Umedev</v-btn>
    </v-app-bar>
    <v-content class="">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CfpForm from './components/CfpForm.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    CfpForm,
  },
  data: () => ({
    //
  }),
});
</script>
<style scoped>
.umedev-header {
  background-color: #56ab2f;
  color: white;
}
.theme--light.v-btn {
  color: white;
}
</style>
