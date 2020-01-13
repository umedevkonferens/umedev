<template>
  <div>
    <div class="header-with-pepper">
      <h1>Call for proposals</h1>
    </div>
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <p>
          Information om format, riktlinjer etc.
        </p>
        <cfp-form />
      </v-col>
    </v-row>
  </div>
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
