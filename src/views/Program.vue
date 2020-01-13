<template>
  <div>
    <HeaderWithPepper header="Program" />

    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <p>
          Mer info inom kort.
        </p>
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
