<template>
  <div>
    <HeaderWithPepper header="Call For Papers (CFP)" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <p>
          Konferensen består av två typer av sessioner, presentationer och
          blixttal. Presentationer sträcker sig över 45 minuter inklusive 5
          minuter för frågor, vilket betyder att själva presentationen bör vara
          ca 40 minuter. Blixttal är 15 minuter utan någon tid för frågor.
          <br />
        </p>
        <p class="bold">Policy gällande produkter</p>
        <p>
          Sessionerna får inte användas av individer för att marknadsföra eller
          sälja produkter, konsulttjänster eller andra tjänster. Denna policy
          hindrar inte att produktanvändare hänvisar till specifika kommersiella
          produkter, men fokuseringen på presentationen bör inte vara
          produktrelaterad. Programutskottet förbehåller sig rätten att redigera
          och korta ner beskrivningar och texter för att passa in i det tryckta
          programmet.
        </p>
        <p>
          Sista datum för att skicka in ditt bidrag är 23/2 - 20
        </p>
        <p class="bold">Anmäl dig nedan!</p>
        <br />

        <cfp-form />
        <br />
        <br />
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
