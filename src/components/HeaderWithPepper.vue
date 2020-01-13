<template>
  <div class="header-with-pepper">
    <h1>{{ header }}</h1>
    <h2>{{ subHeader1 }}</h2>
    <h2>{{ subHeader2 }}</h2>
  </div>
</template>
<script>
// @ is an alias to /src
import CfpForm from '@/components/CfpForm.vue';

export default {
  name: 'HeaderWithPepper',
  props: ['header', 'subHeader1', 'subHeader2'],
};
</script>

<style scoped>
.header-with-pepper {
  width: 100%;
  background-image: url('../assets/Umedevpepper_svartvit.jpg');
  background-color: white;
  min-height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin: 0 auto;
}
.header-with-pepper h1,
h2 {
  font-size: 4rem;
  margin: 0 auto;
  padding-top: 5%;
  color: white;
  text-shadow: black 1px 0 10px;
  display: table;
}
h2 {
  padding: 0;
  font-size: 2.5rem;
}
@media screen and (max-width: 1024px) {
  .header-with-pepper {
    min-height: 350px;
  }
}
@media screen and (max-width: 600px) {
  .header-with-pepper {
    min-height: 200px;
  }
}
</style>
