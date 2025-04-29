<template>
  <div>
    <HeaderWithPepper header="Umedev kidz" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <!-- <h1>Mer info kommer sen! </h1> -->
        <div class="kids-intro">
          <h3 style="font-size: 1rem">Om kvällen</h3>
          <ul>
            <li>Alla workshops är gratis.</li>
            <li>Föreläsnignen för vuxna är samtidigt som barnens workshop</li>
            <li>Plats: HUM-huset Umeå Universitet</li>
            <li>Tid: 10 april kl: 18.00 - 20.00</li>
            <li>
              Får du förhinder och kan inte komma, eller om du har några frågor
              så kontakta
              <a href="mailto:john.eriksson@metria.se">John Eriksson</a> på
              Metria.
            </li>
          </ul>
        </div>

        <h2>Årets workshops</h2>
        <div class="kids-workshop">
          <h3>Spelutveckling med Godot</h3>
          <img src="../assets/img/godot_logo.png" aria-hidden="true" />
          <div>
            <p class="bold">
              Max deltagare: 10 st, ålder: 10-15 år
              <br />
              John Eriksson (Metria)
            </p>
            <p>
            Godot är en snabbt växande spelmotor som kan användas för att skapa nästan alla typer av spel. 
            Under workshopen går vi igenom de allra enklaste grunderna och bygger ett litet spel tillsammans. 
            Vi kommer också att prova på lite av spelens magi – programmering! 
            </p>
            <h2>🔧 Installera Godot 4</h2>
            <h3>Windows</h3>
            <ol>
              <li>Gå till <a href="https://godotengine.org/download">https://godotengine.org/download</a></li>
              <li>Klicka på knappen <strong>“Godot Engine 4.4.1”</strong></li>
              <li>Öppna mappen <i>Nedladdade filer (Downloads)</i> och högerklicka på zip-filen 
                (ex: Godot_v4.4.1-stable_win64.exe.zip)</li>
              <li>Välj <strong>“Extrahera alla…”</strong></li>
              <li>Gå in i den nya mappen och dubbelklicka på Godot_v4.4.1-stable_win64.exe för att starta editorn</li>
            </ol>
            <h3>Mac</h3>
            <ol>
              <li>Gå till <a href="https://godotengine.org/download">https://godotengine.org/download</a></li>
              <li>Klicka på knappen <strong>“Godot Engine 4.4.1”</strong></li>
              <li>Öppna mappen <i>Nedladdade filer (Downloads)</i> och dubbelklicka på zip-filen
                (ex: Godot_v4.4.1-stable_macos.universal.zip)</li>
              <li>En fil med namnet Godot.app skapas – dubbelklicka på den för att starta editorn</li>
            </ol>
            <h2>📁 Packa upp projektet “DonutMadness_start.zip”</h2>
            <ol>
              <li>Ladda ner <a href="../assets/resources/DonutMadness_start.zip">DonutMadness_start.zip</a></li>
              <li>Spara den på en plats du hittar lätt, t.ex. Skrivbordet eller Dokument</li>
              <li><strong>Windows:</strong> Högerklicka på filen och välj “Extrahera alla…”</li>
              <li><stong>Mac:</stong> Dubbelklicka på zip-filen – en ny mapp skapas automatiskt</li>
              <li>Vi kommer gå igenom hur projektet öppnas i Godot 4 under workshoppen!</li>
            </ol>

            <p>Om du har några frågor eller stöter på problem med installationen, hör gärna av dig innan workshopen – så hjälper vi till!
              <br/>
            Vi ses snart – det ska superkul! 🎮</p>
          </div>
        </div>
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
