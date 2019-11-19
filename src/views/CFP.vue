<template>
  <div class="cfp">
    <cfp-form/>
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

