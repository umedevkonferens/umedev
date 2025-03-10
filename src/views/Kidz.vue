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
            <p>
            Mer information om förberedelser, inklusive hur du installerar Godot, 
            skickas via e-post efter att anmälan stänger den 24 mars. 
            Instruktioner kommer också att finnas här.
            </p>
            <br/>

            <a
            href="https://forms.gle/5twJZedjjYvsr5qm7"
            rel="noopener noreferrer"
            target="_blank"
            class="link"
            style="font-size: 1.15rem"
            >Anmäl ditt barn här!</a>  
          </div>
        </div>

        <div class="kids-workshop">
          <h3>Elza Dunkels om forskning och skärmstarka barn</h3>

          <p class="bold">
            Max deltagare: 20 st
          </p>
          <p>Just nu diskuteras skärmtid en hel del, och det mesta har en negativ vinkel. Även Folkhälsomyndighetens forskningsöversikt pekade på övervägande negativa effekter, trots att det finns forskning som tydligt visar på att de flesta får ut positiva saker av sin skärmtid, som att lära sig, roa sig och umgås med andra. </p>
 
          <p>Elza Dunkels har forskat om barn, unga och nätet sedan slutet av 1990-talet och är en känd folkbildare och debattör. Elza har bland mycket annat tilldelats Guldäpplets jubileumsutmärkelse år 2021 för för sina bidrag till digitaliseringen i skolan, RFSU-priset år 2020 för sina folkbildningsinsatser och hon utsågs till Årets Nätängel år 2019, ett pris som MySafety instiftat för att motarbeta näthat och främja nätkärlek. Hon har också skrivit ett flertal böcker på temat nätkultur och skärmtid.</p>
 
          <p>I den här föreläsningen får du höra om resultatet av Elzas forskning. Målet med föreläsningen är att du ska få verktyg att stötta barn och unga att bli skärmstarka. Det blir också Umeåpremiär för Elzas egna, alternativa skärmtidsrekommendationer! Föreläsningen är gratis, och riktar sig till alla som är intresserade av ungas nätkulturer; till exempel föräldrar och pedagoger.</p>

            <a
            href="https://forms.gle/38aWWRjGCRo4tDaUA"
            rel="noopener noreferrer"
            target="_blank"
            class="link"
            style="font-size: 1.15rem"
            >Anmäl dig här!</a>  
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
