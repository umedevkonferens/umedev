<template>
  <v-app>
    <v-app-bar app class="teal darken-2 grey--text text--lighten-2">
      <v-toolbar-title class="headline text-uppercase">
        <span>UME</span>
        <span class="font-weight-light">DEV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey lighten-2" text to="/">Hem</v-btn>
      <v-btn color="grey lighten-2" text to="/program">Program</v-btn>
      <v-btn color="grey lighten-2" text to="/kidz">Kidz</v-btn>
      <v-btn color="grey lighten-2" text to="/about">Om Umedev</v-btn>
    </v-app-bar>
    <v-content class="green lighten-3">
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
    CfpForm
  },
  data: () => ({
    //
  })
});
</script>

