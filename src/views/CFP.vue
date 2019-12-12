<template>
  <v-container>
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content">
        <h1>Call for proposals</h1>
        <p>
          Information om format, riktlinjer etc.
        </p>
        <cfp-form />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// @ is an alias to /src
import CfpForm from '@/components/CfpForm.vue';

export default {
  name: 'cfp',
  components: {
    CfpForm,
  },
};
</script>
