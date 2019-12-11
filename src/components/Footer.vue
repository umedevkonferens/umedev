<template>
  <v-footer padless>
    <div class="footer">
      <v-card-text>
        <h3>Följ oss på</h3>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/umedevkonferens/"
          >Instagram</a
        >
        <a rel="noopener noreferrer" href="https://twitter.com/umedevkonferens"
          >Twitter</a
        >
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/umedevkonferens/"
          >Facebook</a
        >
      </v-card-text>
    </div>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    icons: [],
  }),
});
</script>
<style scoped>
.footer {
  width: 100%;
  color: black;
  background-color: #56ab2f;
  min-height: 100px;
}
h3 {
  font-weight: normal;
  display: inline-block;
}
a {
  margin-left: 10px;
}
</style>
