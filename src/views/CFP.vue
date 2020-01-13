<template>
  <div>
    <HeaderWithPepper header="Call for proposals" />
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
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'cfp',
  components: {
    CfpForm,
    HeaderWithPepper,
  },
};
</script>
