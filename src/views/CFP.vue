<template>
  <div>
    <HeaderWithPepper header="Call For Papers (CFP)" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <h3>Välj mellan två typer</h3>
        <p>Konferensen består av två typer av bidrag;</p>
        <ul>
          <li>Presentationer</li>
          <li>Blixttal</li>
        </ul>
        <p>
          Presentationer sträcker sig över 40 minuter inklusive 5 minuter för
          frågor, vilket betyder att själva presentationen bör vara ca 35
          minuter.
          <br />
          Blixttal är 20 minuter inklusive tid för eventuella frågor.
        </p>
        <br />
        <h4>Policy gällande produkter</h4>
        <p>
          Sessionerna får inte användas av individer för att marknadsföra eller
          sälja produkter, konsulttjänster eller företag. Denna policy hindrar
          inte att produktanvändare hänvisar till specifika kommersiella
          produkter, men fokuseringen på presentationen bör inte vara
          produktrelaterad. Programutskottet förbehåller sig rätten att redigera
          och korta ner beskrivningar och texter för att passa in i det tryckta
          programmet.
        </p>
        <br />

        <br />
        <br />
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import CfpForm from "@/components/CfpForm.vue";
import HeaderWithPepper from "@/components/HeaderWithPepper.vue";

export default {
  name: "cfp",
  components: {
    CfpForm,
    HeaderWithPepper,
  },
};
</script>
<style>
ul {
  margin: 1rem 0;
}
h3 {
  margin: 1rem 0;
}
.last-date {
  width: fit-content;
  padding: 0.5rem;
  margin: 1rem 0;
  font-weight: bold;
  border: 2px solid #56ab2f;
}
</style>
