<template>
  <div>
    <HeaderWithPepper header="Anmälan" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper"> </v-col>
    </v-row>
  </div>
</template>
<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'Register',
  components: {
    HeaderWithPepper,
  },
};
</script>

<style scoped></style>
