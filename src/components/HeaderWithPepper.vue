<template>
  <div class="header-with-pepper">
    <h1>{{ header }}</h1>
    <h2>{{ subHeader1 }}</h2>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "HeaderWithPepper",
  props: ["header", "subHeader1", "subHeader2"],
};
</script>

<style scoped>
.header-with-pepper {
  margin: 0 auto;
  padding: 0;
}
.header-with-pepper h1,
h2 {
  font-size: 4rem;
  margin: 0 auto;
  padding-top: 4rem;
  color: black;
  display: table;
  text-align: center;
}
h2 {
  padding: 0;
  font-size: 2.5rem;
}

@media screen and (max-width: 600px) {
  .header-with-pepper h1 {
    font-size: 2rem;
    padding: 2rem 0 1rem 0;
  }
  .header-with-pepper h2 {
    font-size: 1.5rem;
    padding: 0rem;
  }
}
</style>
