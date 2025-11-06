<template>
  <div>
    <HeaderWithPepper header="Umedev kidz" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <br />
        <div class="kids-intro">
          <p>
            Kvällen innan konferensen organiserar vi ett event där
            <span class="bold">8 - 14 åringar</span> får prova på programmering.
          </p>
          <p>
            Programmering handlar om samarbete och kommunikation i team och det
            är också så vi kommer att arbeta under sessionerna - tillsammans.
          </p>
        </div>
        <br />
        <br />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderWithPepper from "@/components/HeaderWithPepper.vue";
import RegisterKidz from "@/components/RegisterKidz.vue";

export default {
  name: "Kidz",
  components: {
    HeaderWithPepper,
    RegisterKidz,
  },
};
</script>

<style scoped>
.kids-intro {
  max-width: 500px;
}
.kids-workshop {
  margin-bottom: 1rem;
  border: 1px solid #56ab2f;
  border-radius: 4px;
  padding: 1rem;
}
.flex {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.flex img {
  width: 45%;
  height: auto;
  margin-right: 15px;
}

h2 {
  margin: 30px 0;
  width: 100%;
  font-size: 1.95rem;
}
h3 {
  margin: 15px 0;
  font-size: 1.5rem;
}
img {
  margin-bottom: 10px;
  max-width: 100%;
  width: auto;
  max-height: 300px;
}
</style>
