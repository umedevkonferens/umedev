<template>
  <div>
    <HeaderWithPepper header="Program" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <h2>Program Umedev session 27 maj - 11.30 - 13.00</h2>
        <div class="program-container">
          <div class="row">
            <div class="program-heading">
              <span class="time">11.30 - 11.35</span>
              <h3>Välkommen!</h3>
            </div>
            <span class="content program">
              <span class="program-description"
                >Umedev hälsar alla välkomna och går igenom lite
                praktikaliteter.
              </span>
              <span class="speaker">
                Mattias Sällström, Umedev
              </span>
            </span>
          </div>

          <div class="row">
            <div class="program-heading">
              <span class="time">11.35 - 11.55</span>
              <h3>Keynote - Designkompetenser i en föränderlig värld</h3>
            </div>

            <span class="content">
              <p class="program-description">
                Utbredningen av covid-19 pandemin här inneburit utmaningar och
                behov av snabba förändringar för många branscher. Omställning är
                idag ett dagsaktuellt begrepp. <br />Förändring är samtidigt
                nära besläktat med design och utveckling och i vår bransch måste
                vi alltid se hur vi kan arbeta med design för positiv förändring
                - dvs god utveckling. <br /><br />Men vilka kompetenser behövs?
                <br />
                Och hur kan vi tänka kring utveckling av våra kompetenser?
                <br />
                <br />
                I denna keynote kommer professor Mikael Wiberg att fokusera på
                designkompetenser i en föränderlig värld utifrån dagsaktuella
                frågor om specialistkompetenser vs. att vara generalist. Han
                kommer även belysa vad design- och utvecklingsteam behöver
                reflektera över vad gäller kompetensförsörjning, inte minst i en
                tid då såväl teknologier, som samhället och dess behov snabbt
                förändras.
              </p>
              <span class="speaker">
                Mikael Wiberg, Professor i Informatik, Umeå universitet
              </span>
            </span>
          </div>
          <div class="tracks-container">
            <div class="track">
              <h3 class="track-heading">Spår 1</h3>
              <div class="row">
                <span class="time">12.00 - 12.20</span>
                <h4>Microservices och meddelandeköer</h4>
                <span class="content">
                  <p class="program-description">
                    Dagens monolitiska system ersätts i snabb takt av system
                    byggda av flertalet microservices. Den här presentationen
                    förklarar sambandet mellan microservices och meddelandeköer.
                    Vi tittar på hur 84codes AB, världens största leverantör av
                    “RabbitMQ as a Service” använder RabbitMQ som kärna i deras
                    arkitekturen.
                  </p>
                  <span class="speaker">
                    Lovisa Johansson, 84Codes
                  </span>
                </span>
              </div>
              <div class="row">
                <span class="time">12.30 - 12.50</span>
                <h4>TBD</h4>
                <span class="content">
                  <p class="program-description"></p>
                  <span class="speaker"> </span>
                </span>
              </div>
            </div>
            <div class="track">
              <h3 class="track-heading">Spår 2</h3>
              <div class="row">
                <span class="time">12.00 - 12.20</span>
                <h4>Produktivitetstips för team</h4>
                <span class="content">
                  <p class="program-description">
                    Spelar det någon roll *när* man gör saker? Ja, tiden
                    påverkar vår produktivitet på många olika sätt och denna
                    blixtföreläsning handlar om hur team kan jobba mer effektivt
                    genom att planera vissa saker på vissa tider.
                  </p>
                  <span class="speaker">Christina Skaskiw, Acino</span>
                </span>
              </div>
              <div class="row">
                <span class="time">12.30 - 12.50</span>
                <h4>En politisk överenskommelse i en skattefråga</h4>
                <span class="content">
                  <p class="program-description">
                    En politisk överenskommelse i en skattefråga som kan
                    sammanfattas på mindre än 30 sekunder kan kosta tiotals
                    miljoner i systemutveckling på Skatteverket och andra
                    myndigheter. Det kan vara omöjligt att invänta färdigskrivna
                    lagar innan utvecklingen påbörjas, på grund av kort tid fram
                    till när de ska börja gälla.
                    <br />
                    <br />
                    Hur utvecklar man med sådana förutsättningar? Vad gör man
                    när ett politiskt utspel i pressen dramatiskt kan påverka
                    redan pågående utveckling? Hur påverkas utvecklingsteam när
                    medlemmarna börjar tvivla på att koden som skrivs någonsin
                    kommer att produktionssättas?
                    <br />
                    Roger Nilsson, Product Owner på Skatteverket, berättar om
                    sina erfarenheter från utveckling av en del av innehållet i
                    Januariöverenskommelsen. Från uppgång till fall.
                  </p>
                  <span class="speaker">Roger Nilsson, Skatteverket</span>
                </span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="program-heading">
              <span class="time">12.50 - 13.00</span>
              <h3>Avslutning</h3>
            </div>
            <span class="content program">
              <span class="program-description"
                >Kort avslutning där vi sammanfattar vår första Umedev session.
              </span>
              <span class="speaker">
                Mattias Sällström, Umedev
              </span>
            </span>
          </div>
        </div>
        <div class="program-end"></div>

        <br />
        <h2>Tidigare års program</h2>
        <h3>Program från 2019</h3>
        <img src="../assets/Tidigare-schema.png" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';

export default {
  name: 'Program',
  components: {
    HeaderWithPepper,
  },
};
</script>
<style scoped>
.content img {
  width: 100%;
}
.program-container {
  margin: 50px auto 10px auto;
}
@media screen and (max-width: 600px) {
  .program-container {
    margin: 15px;
  }
}
.program-heading {
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  margin: 15px 0;
  border-bottom: 2px solid #56ab2f;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}
.time {
  font-size: 0.95rem;
  min-width: 90px;
  display: block;
  margin-right: 15px;
}
.program-description {
  margin: 5px 0;
  display: block;
}
.speaker {
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 15px;
  margin-top: 10px;
  display: block;
}
h4 {
  font-size: 1.15rem;
}
.tracks-container {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
}
.tracks-container .row {
  border: 1px solid rgba(86, 171, 47, 0.5);
  padding: 10px;
  margin-bottom: 20px;
}
.content {
  padding: 10px 15px;
}
.track-heading {
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(86, 171, 47, 0.2);
}
.track {
  width: 47%;
}

@media screen and (max-width: 600px) {
  .tracks-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .track {
    width: 100%;
  }
  .row {
    margin-bottom: 20px;
  }
}
.row {
  display: flex;
  flex-direction: column;
}
.program-end {
  height: 4px;
  width: 100%;
  background-color: #56ab2f;
  margin-bottom: 100px;
}
</style>
