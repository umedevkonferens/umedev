<template>
  <div>
    <HeaderWithPepper header="Umedev kidz" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <p>
          Kvällen innan konferensen Umedev organiserar vi en kväll där barn får
          prova på programmering. Genom att låta barn programmera så engagerar
          vi dem att bli aktiva producenter av den nya teknologin istället för
          passiva konsumenter.
        </p>
        <p>
          Barn i åldrarna 10-15 år är välkomna att experimentera och lära sig
          mer om programmering. Programmering handlar om samarbeta och
          kommunikation i ett team och det är också så vi kommer att arbeta
          under sessionerna - tillsammans.
        </p>
        <p>
          Vi har plats för 30 flickor och 30 pojkar. Enda kravet är att ta med
          en egen bärbar dator, vilket operativsystem som är inlagt på datorn
          spelar ingen roll, Windows, MacOS eller någon variant av Linux - alla
          går bra!
        </p>
        <br />

        <p class="bold">Mer info kommer senare under våren.</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'Kidz',
  components: {
    HeaderWithPepper,
  },
};
</script>
