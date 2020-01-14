<template>
  <div>
    <HeaderWithPepper header="Program" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <h2>Program</h2>
        <p>Mer info om årets program kommer senare i vår.</p>
        <br />
        <h2>Tidigare års program</h2>
        <h3>Program från 2019</h3>
        <img src="../assets/Tidigare-schema.png" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'Program',
  components: {
    HeaderWithPepper,
  },
};
</script>
<style scoped>
.content img {
  width: 100%;
}
</style>
