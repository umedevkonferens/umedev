<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>UME</span>
        <span class="font-weight-light">DEV</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/program">Program</v-btn>
      <v-btn text to="/kidz">Kidz</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>
    <v-content>
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
