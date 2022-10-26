<template>
  <div>
    <HeaderWithPepper header="Sponsra!" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content">
        <h2>Hjälp oss genomföra Umedev!</h2>
        <p>
          Kan ditt företag hjälpa oss att genomföra Umedev 2020? Vi har några
          färdiga paket sponsorpaket som du kan läsa om längre ner på sidan. Om
          inget av dem passar så är går det såklart bra att höra av sig till oss
          för en enskild lösning, mejla oss på
          <a href="mailto:info@umedev.org">info@umedev.org</a>.
        </p>
        <h2>Sponsorpaket</h2>
        <h3>Guldsponsor ca 15 000 kr</h3>
        <p>Ni får:</p>
        <ul>
          <li>
            Särskilt omnämnande i samband med inledning och avslutning
          </li>
          <li>
            Ställa upp information om att ni sponsrar i form av vepa e.dyl. samt
            informera om ert företag/produkt i en monter vid konferenslokalerna
          </li>
          <li>Finnas med på trycksaker</li>
          <li>Finnas med på webbsidan</li>
          <li>
            Inlägg om ert bidrag till konferensen på våra sociala kanaler
            (twitter, instagram, facebook). Vi länkar/taggar efter era önskemål.
          </li>
        </ul>
        <h3>Silversponsor ca 10 000 kr</h3>
        <p>Ni får:</p>
        <ul>
          <li>
            Ställa upp information om att ni sponsrar i form av vepa e.dyl. samt
            informera om ert företag/produkt i en monter vid konferenslokalerna
          </li>
          <li>Finnas med på trycksaker</li>
          <li>Finnas med på webbsidan</li>
          <li>
            Inlägg om ert bidrag till konferensen på våra sociala kanaler
            (twitter, instagram, facebook). Vi länkar/taggar efter era önskemål.
          </li>
        </ul>
        <h3>Bronssponsor ca 5 000 kr</h3>
        <p>Ni får:</p>
        <ul>
          <li>
            Ställa upp information om att ni sponsrar i form av vepa e.dyl.
          </li>
          <li>Finnas med på webbsidan</li>
        </ul>

        <br />

        <h3>Praktisk information</h3>
        <p>
          Det praktiska kring sponsringen kommer att fungera likadant som i år,
          dvs efter konferensen kommer en faktura för konferensens omkostnader
          som motsvarar det belopp ni har valt att sponsra med. Vi har tagit
          till oss av feedback och fakturorna kommer vara tydligare.
        </p>

        <p>
          Vi har tyvärr inte möjlighet att tillhandahålla bord, skärmar eller
          liknande. Ni är välkommen att ta med er sådant själva.
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import HeaderWithPepper from "@/components/HeaderWithPepper.vue";

export default {
  name: "Sponsring",
  components: {
    HeaderWithPepper,
  },
};
</script>

<style scoped>
.content {
  max-width: 700px;
  width: 100%;
}
h1,
h2 {
  font-weight: normal;
}
h3 {
  margin-bottom: 15px;
}
</style>
