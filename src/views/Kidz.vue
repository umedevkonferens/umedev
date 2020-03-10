<template>
  <div>
    <HeaderWithPepper header="Umedev kidz" />
    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <br />
        <br />

        <h1>Välkomna på Kidz 22 april 17.30 - 19.30</h1>
        <br />

        <p>
          Kvällen innan konferensen Umedev organiserar vi en kostnadsfri kväll
          där
          <span class="bold">10-15-åringar</span> får prova på programmering.
          Genom att låta dem experimentera och programmera så engagerar vi dem
          att bli aktiva producenter av den nya teknologin istället för passiva
          konsumenter. Programmering handlar om samarbete och kommunikation i
          ett team och det är också så vi kommer att arbeta under sessionerna -
          tillsammans.
        </p>
        <h3>Om kvällen</h3>
        <ul>
          <li>Vi har plats för 30 flickor och 30 pojkar</li>
          <li>Alla deltagare behöver ha med sig egen dator</li>
          <li>Plats: Humanisthuset på Umeå Universitet</li>
          <li>Tid: 22 april kl: 17.30 - 19.30</li>
        </ul>
        <br />
        <p>
          Workshops-hållare under kvällen är en blanding av erfrana utvecklare,
          UX-designers och yngre förmågor.
        </p>
        <a href="#kidz-anmalan">Anmälan dig här nedan</a>
        <br />
        <br />

        <br />
        <hr />
        <h2>Årets workshops</h2>
        <div class="kids-workshop">
          <h3>Scratch</h3>
          <img src="../assets/scratch.png" aria-hidden="true" />
          <p>
            Den här sessionen vänder sig till dig om har gjort en del grejer i
            <a
              href="https://scratch.mit.edu/"
              target="_blank"
              noreferrer
              noopener
              >Scratch
            </a>
            och funderar på vad mer man kan göra. Vi går igenom olika tekniker
            som kommer att ge dig de verktyg du behöver för att ta nästa steg.
            Du får lära dig om kloner, animationer och hur du kan skapa element
            som anpassar sig. <br />Efter den här sessionen kommer du garanterat
            att ha vad du behöver för att ta dina Scratch-projekt till nästa
            nivå. <br />
          </p>
          <p class="bold">
            Du behöver en egen dator och en inloggning på Scratch.
          </p>
        </div>

        <div class="kids-workshop">
          <h3>Micro-bit</h3>
          <div class="flex">
            <img src="../assets/Microbit.jpg" aria-hidden="true" />
            <div>
              <p>
                <a
                  href="https://microbit.org/"
                  target="_blank"
                  noreferrer
                  noopener
                  >Micro:bit-datorer
                </a>
                är fyllda med sensorer som gör att den kan känna av ljus,
                riktning, rörelse, etc. Du kan skriva program som känner av
                detta och varna om någon flyttar på datorn. Det finns också
                möjlighet att styra de inbyggda lysdioderna för att skriva text
                eller göra olika mönster. För att göra det lite roligare så har
                vi med lite elektronik som du kan använda för att bygga ett
                tjuvalarm, testa hur snabb dina reaktioner är o.s.v.
                <br />För att skriva programmen så används ett så kallat
                "block-språk" som påminner mycket om Scratch. <br />På denna
                session får du alltså chansen att skriva program för att styra
                en dator med sensorer och styra olika typer av elektroniska
                komponenter.
              </p>
            </div>
          </div>
        </div>

        <div class="kids-workshop">
          <h3>Designworkshop</h3>
          <img src="../assets/Designworkshop.jpeg" aria-hidden="true" />
          <p>
            Varje system som byggs börjar med en idé! Och många av dessa behöver
            någonstans där idén möter användaren. Det kan vara i form av en app,
            en hemsida eller en fysisk produkt!
          </p>
          <p>
            I denna workshop väljer vi en eller ett par idéer som vi undersöker
            om de skulle hålla för lite konkurrens. Efter det får alla som vill
            designa hur de skulle vilja gestalta idén digitalt! Är det en app,
            en hemsida, ett spel, eller ett AR/VR-system?
          </p>
          <p>
            Har vi tid så väljer vi en av idéerna som kan gestaltas för webben
            och bygger en prototyp i HTML, CSS och ev lite Javascript.
          </p>
        </div>

        <div class="kids-workshop">
          <h3>CodeCombat</h3>
          <img src="../assets/Codecombat.png" aria-hidden="true" />
          <p>
            Du som tidigare har provat programmering med block som i t.ex
            Scratch får nu prova att programmera med text. Du lär dig språket
            Python genom spelet
            <a
              href="https://codecombat.com/"
              target="_blank"
              noreferrer
              noopener
              >CodeCombat</a
            >
            där man spelar med en fantasy-hjälte som slåss mot orcher, skyddar
            byar och annat spännande.
          </p>
        </div>

        <div class="kids-workshop">
          <h3>Kodstuga med Kattis</h3>
          <div class="flex">
            <img src="../assets/Kattis.png" aria-hidden="true" />
            <div>
              <p>
                För dig som redan programmerar och vill träffa andra som
                programmerar anordnar vi i år en kodstuga. Kom och umgås med
                andra i din ålder som programmerar. På plats kommer det att
                finnas möjlighet att ställa frågor, få tips och råd från
                personer med lång erfarenhet av programmering i olika
                programmeringsspråk
              </p>
              <p>
                För er som vill så finns möjlighet att få en introduktion till
                <a
                  href="https://open.kattis.com/"
                  target="_blank"
                  noreferrer
                  noopener
                  >Kattis</a
                >, en plattform för kodutmaningar.
              </p>
            </div>
          </div>
        </div>
        <div id="kidz-anmalan">
          <RegisterKidz />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';
import RegisterKidz from '@/components/RegisterKidz.vue';

export default {
  name: 'Kidz',
  components: {
    HeaderWithPepper,
    RegisterKidz,
  },
};
</script>

<style scoped>
.kids-workshop {
  margin-bottom: 75px;
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
  text-align: center;
}
h3 {
  margin: 15px 0;
  font-size: 1.5rem;
}
img {
  margin-bottom: 10px;
  max-width: 100%;
  width: auto;
}
</style>
