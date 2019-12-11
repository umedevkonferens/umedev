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
    <v-content class="content">
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
}
.content {
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
}
</style>
