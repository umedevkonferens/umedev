<template>
  <div class="cfp">
    <v-container>
      <v-row class="mb-6" justify="center">
        <v-col md="auto">
          <h1 class="display-2 font-weight-bold mb-3">Call for proposals</h1>
        </v-col>
      </v-row>
      <v-row class="mb-6" justify="center">
        <v-col md="auto">Information om format, riktlinjer etc</v-col>
      </v-row>
      <v-row>
        
      </v-row>
    </v-container>
    <cfp-form />
  </div>
</template>

<script>
// @ is an alias to /src
import CfpForm from '@/components/CfpForm.vue';

export default {
  name: 'cfp',
  components: {
    CfpForm
  }
};
</script>

