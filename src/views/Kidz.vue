<template>
  <div>
    <HeaderWithPepper header="Umedev kidz" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <br />

        <!-- <h1>Mer info kommer sen! </h1> -->
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
          <!-- <h3 style="font-size: 1rem">Om kvällen</h3>
          <ul>
            <li>
              Vi erbjuder två olika workshops med plats för 10 barn i vardera.
              Anmälan är bindande.
            </li>
            <li>Alla workshops är gratis.</li>
            <li>Plats: Kungsgatan 67 B (Metria i Utopiahuset)</li>
            <li>Tid: 29 mars kl: 17.30 - 19.30</li>
            <li>
              Får du förhinder och kan inte komma, eller om du har några frågor
              så kontakta
              <a href="mailto:john.eriksson@metria.se">John Eriksson</a> på
              Metria.
            </li>
          </ul> -->
          <br />
          <!-- <a
            href="https://forms.gle/JxajT56dZSXsgbw2A"
            rel="noopener noreferrer"
            target="_blank"
            class="link"
            style="font-size: 1.15rem"
            >Anmäl dig och ditt barn direkt via Google Forms</a
          > -->
        </div>
        <br />
        <br />

        <!-- <h2>Årets workshops</h2> -->
        <!-- <div class="kids-workshop">
          <h3>Kidz spår 1: Uppfinn med micro:bit</h3>
          <img src="../assets/img/microbit.jpeg" aria-hidden="true" />
          <div>
            <p class="bold">
              Max deltagare: 10 st, ålder: 10-15 år
              <br />
              Jens Andreasson (NTI-gymnasiet)
            </p>
            <p>
              En micro:bit är en jätteliten dator, även kallad en
              mikrokontroller eller enchipdator. Med den kan du skapa
              uppfinningar som både kan känna av sin omgiving och påverka den.
              Kanske ett tjuvalarm, en skattjakt, en ank-teleporter eller ett
              digitalt ljus som kan blåsas ut?
            </p>
            <p>
              I detta pass får du lära dig grunderna och själv prova på att
              uppfinna saker med hjälp av micro:bit! Ingen som helst förkunskap
              krävs, men du behöver ha med dig en egen dator. Micro:bits och
              annan labbutrustning kommer att finnas på plats.
            </p>
          </div>
        </div>
        <div class="kids-workshop">
          <h3>Kidz spår 2: Spelutveckling med Scratch</h3>
          <img src="../assets/img/scratch.png" aria-hidden="true" />
          <div>
            <p class="bold">
              Max deltagare: 10 st, ålder: 10-15 år
              <br />
              Evelina Malmqvist (Omegapoint)
            </p>
            <p>
              Många älskar att spela datorspel. Många drömmer om att kunna
              utveckla ett eget spel, och med hjälp av Scratch har det aldrig
              varit enklare! Skapa ett spel, ett äventyr, en film eller varför
              inte ett musikinstrument?
            </p>
            <p>
              I detta pass får du lära dig grunderna och själv prova på att
              skapa spel och program med hjälp av Scratch! Ingen som helst
              förkunskap krävs, men du behöver ha med dig en egen dator.
            </p>
          </div>
        </div>

        <div class="kids-workshop">
          <h3>Vuxenspåret: Hjälp, mitt barn vill bli programmerare!</h3>

          <p class="bold">
            Max deltagare: 15 st
            <br />John Eriksson (Metria)
          </p>
          <p>
            Digital konsumtion finns idag i överflöd, samtidigt är möjligheterna
            att utveckla egna spel och program oändliga. Men var börjar man och
            hur kan man stötta ett barn eller ungdom som visar intresse av att
            skapa digitalt?
          </p>
          <p>
            I detta pass får du lära dig vad Scratch och micro:bit är. Vad krävs
            för att komma igång och vad finns det för steg efter det? Ingen som
            helst förkunskap krävs.
          </p>
        </div> -->
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
