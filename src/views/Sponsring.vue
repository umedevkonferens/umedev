<template>
  <div>
    <HeaderWithPepper header="Sponsra!" />
    <v-row class="mb-6" justify="start">
      <v-col class="content" md="auto">
        <!-- </v-col>
      <v-col md="auto" class="content"> -->
        <!-- <h2>Hjälp oss genomföra Umedev!</h2> -->
        <p>
          Umedev är en IT-konferens som är helt gratis för alla deltagare.
          Konferensen skapas av ett gäng engagerade personer som gör detta
          tillsammans, helt ideellt, vid sidan om sina ordinarie jobb. För att
          konferensen ska bli möjlig behöver vi inte bara drivna personer som
          bidrar med tid och engagemang, vi behöver även få in bidrag från
          sponsorer.
        </p>
        <p>
          Sponsorernas bidrag är det som gör konferensen möjlig. Utan er, inget
          Umedev.
        </p>
        <v-btn
          outlined
          target="_blank"
          href="https://forms.gle/VhaFhrF5XJQ4UWQp6"
          >Anmäl ditt företag som sponsor</v-btn
        >
        <p>
          <br />
          Likt tidigare år erbjuder vi 3 olika sponsornivåer; guld, silver och
          brons, där sponsorsumman är 25 000, 10 000 eller 5000 kr. Vad som
          ingår i specifik nivå hittar ni nedan.
        </p>
        <br />
        <div>
          <h2>Sponsringsnivåer</h2>
          <h3>Guld (ca. 25 000:-)</h3>
          <p>Ni får:</p>
          <ul>
            <li>
              Ställa upp bord/monter <strong>(maxbredd ca 2 m)</strong> i
              lokalen utanför föreläsningssalarna. Bord och annat material
              ansvarar företaget själv för att ta med. Det finns möjlighet att
              låna bord, men då måste det förbokas i samband med anmälan.
            </li>
            <li>Särskilt omnämnande i samband med inledning och avslutning.</li>
            <li>
              Inlägg om företagets bidrag till konferensen på våra sociala
              kanaler (twitter, instagram, LinkedIn).
            </li>
            <li>Företagslogga på webbsidan.</li>
          </ul>
          <h3>Silver (ca. 10 000:-)</h3>
          <p>Ni får:</p>
          <ul>
            <li>
              Ställa upp vepa/rollup. Vepan kommer stå tätt intill andra
              silversponsorers vepor, längs en vepa-vägg. Notera att det
              <strong>INTE</strong>
              finns plats för bord eller representanter från företaget att stå
              uppställda vid vepan.
            </li>
            <li>
              Inlägg om företagets bidrag till konferensen på våra sociala
              kanaler (twitter, instagram, LinkedIn).
            </li>
            <li>Företagslogga på webbsidan.</li>
          </ul>
          <h3>Brons (ca. 5 000:-)</h3>
          <p>Ni får:</p>
          <ul>
            <li>Företagslogga på webbsidan.</li>
          </ul>
        </div>

        <br />

        <h3>Praktisk information</h3>
        <ul>
          <li>
            Efter konferensen skickas fakturor ut till er sponsorer. Ni kommer
            alltså kunna få en faktura för t.ex. matkostnader och betalar då den
            direkt till cateringfirman.
          </li>
          <li>
            <strong>Deadline för anmälan</strong> av sponsorer är
            <strong>den 14 februari</strong>.
          </li>
          <li>
            Vi tar in max 10 guldsponsorer (först till kvarn). Detta för att det
            inte ska bli för många sponsorbord i lokalen.
          </li>
          <li>
            Umedev Winter Edition blev väldigt lyckad och vi siktar på att ha
            ett liknande event i år med. Eftersom Umedev är en ideell
            organisation som inte får hålla på pengarna innebär detta att en del
            sponsormedel faktureras till Umecon som håller pengarna tills winter
            edition bär av.
          </li>
          <li>
            <strong>Alla</strong> deltagare från sponsrande företag måste anmäla
            sig som deltagare till konferensen. Detta för att vi ska få korrekt
            antal mat/fika/specialkost samt veta hur många som rör sig i
            lokalerna.
          </li>
        </ul>
        <p>
          <br />
          Frågor eller funderingar? Hör av er till oss via
        </p>
        <v-btn
          class="text-none text-subtitle-1"
          text
          href="mailto:info@umedev.org"
          >info@umedev.org</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
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

.sponsor-btn {
  background-color: aquamarine;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  width: fit-content;
  text-decoration: none;
  border-radius: 5px;
}
</style>
