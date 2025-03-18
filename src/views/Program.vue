<template>
  <div>
    <HeaderWithPepper header="Program Umedev" />
    <v-row
      class="mb-6"
      justify="start"
    >
      <v-col
        md="auto"
        class="content wrapper"
      >
      </v-col>
    </v-row>
    <!-- --------------------- -->

    <div class="current-program">
      <div class="current-program-inner">
        <h2>Program Umedev 2025</h2>

        <div class="program-container">
                <div class="program-row">
                  <br />
                  <div class="about-keynote">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/fredrik_bjoreman.jpg')
                          "
                          alt="Johanna Björklund"
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker"
                        >Fredrik Björeman</span
                      >
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Opening keynote: Utvecklare i AI-bubblan
                        </h2>
                      </div>
                      <p>
                        Hur ska man tänka om AI?<br/>
                        Vart är vi på väg? Som värld, som utvecklare, som byggare av tjänster och produkter?<br/>
                        Borde vi ha mer AI i våra tjänster?<br/>
                        Borde jag som utvecklare låta Copilot skriva min kod, luta mig tillbaka och håva in produktivitetsvinsten? Är det ute att skriva kod?<br/>
                        Borde jag som chef införa AI för och i allt tänkbart?<br/>
                        Låt oss försöka ta ner livet i - och kanske efter - AI-bubblan på jorden!<br/>

                      </p>
                      <span>
                        <h3>About Fredrik Björeman</h3>
                        <p>
                          Fredrik Björeman har jobbat med data sedan AJAX var det nya heta. Sedan 2012 driver han också Kodsnack - Sveriges högst numrerade podd om livet som utvecklare. En nyfiken diskussion i veckan med svenska och internationella utvecklare av alla slag ger ett brett perspektiv på världen - och ibland kanske till och med en god idé eller två.
                        </p>
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                <!-- <v-divider></v-divider>
                  <br />
                  <br />
                  <div class="about-keynote reverse">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/peter_bystrom.jpg')
                          "
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker">
                        Peter Byström
                      </span>
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Ending Keynote: Häng med i nuet, för det händer hela tiden
                        </h2>
                      </div>

                      <p>
                        Under den här presentationen så tittar vi på vad som händer nu med teknisk och social förändring i våran omgivning ur ett större perspektiv 
                        och vad du behöver tänka på för att hänga med. Hur vi kan lära oss att leva i, och vara en bidragande del av ett sociotekniskt ekosystem 
                        i ständig förändring där vi hela tiden måste innovera och anpassa oss till omvärldens nya förväntningar. Vi kommer titta på hur teorier om förändring 
                        sker i olika sammanhang och vilka fallgropar som vi behöver undvika för inte riskera att fastna och hamna efter i utvecklingen. 
                        Vi tittar också lite framåt i spåkulan och funderar kring var AI är på väg och hur nuet kan komma att se ut om inte allt för långt fram i tiden.<br> 
                        En kortare skulle kunna vara: Hur vi kan lära oss att leva i, och vara en bidragande del av ett sociotekniskt ekosystem i ständig förändring där vi 
                        hela tiden måste innovera och anpassa oss till omvärldens nya förväntningar. Vi kommer titta på hur teorier om förändring sker i olika sammanhang och 
                        vilka fallgropar som vi behöver undvika för inte riskera att fastna och hamna efter i utvecklingen.
                      </p>
                      <span>
                        <h3>About Peter Byström</h3>
                        <p>
                          Peter Boman Byström är en agil mentor, teoretiker och praktiker inom komplex system- och verksamhetsutveckling. Med en akademisk bakgrund inom 
                          kognitionsvetenskap är han en generalist med djup förankring inom teknik, design & arkitektur samt organisation & ledarskap. 
                          En profil som blir allt mer användbar i en värld av ständigt ökande komplexitet.
                        </p>
                      </span>
                    </div>
                  </div> -->
                </div>
              </div>
      </div>
    </div>

    <!-- --------------------- -->

    <div class="previous-program">
      <div class="previous-program-inner">
        <h2 class="previous-program-heading">Tidigare års program</h2>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>Program Umedev 2024 Winter Edition</v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="program-container">
          <div class="program-row">
            <div class="about-keynote">
              <div class="profile-container">
                <v-avatar
                  class="bio-image"
                  color="grey"
                  size="256"
                  rounded="1"
                >
                  <v-img
                    cover
                    v-bind:src="
                      require('../assets/img/HansBrattberg.png')
                    "
                  ></v-img>
                </v-avatar>
                <p class="keynote-speaker-name">
                  {{ schedule?.openingKeynote?.speakers[0].name }}
                </p>
                <p class="keynote-speaker-title">
                  {{ schedule?.openingKeynote?.speakers[0].title }},
                  {{ schedule?.openingKeynote?.speakers[0].company }}
                </p>
              </div>
              <div class="keynote-description">
                <div class="program-heading">
                  <h2>
                    {{ schedule?.openingKeynote?.title }}
                  </h2>
                </div>
                <span><i>Förmiddag 1,5h</i></span><br><br>
                <p v-for="(text, index) in schedule?.openingKeynote?.description.split('<br>', 2)" :key="index">
                  {{ text }}
                </p>
                <!-- Winter edition -->
                <h3>Målgrupp</h3>
                <p>Detta föredrag är skräddarsytt för både beslutsfattare och tekniska experter 
                  som vill framtidssäkra sina organisationer och projekt. Oavsett om du 
                  är VD, CTO, utvecklingschef, systemarkitekt, fullstack utvecklare eller 
                  annan IT-personal, kommer du att få värdefulla och direkt applicerbara 
                  insikter.</p>
                
                <h3>Innehåll</h3>
                <ol>
                  <li>
                    <b>Nuläget: GenAI i praktiken</b>
                    <ul>
                      <li>Insikter i hur ledande företag redan nu använder GenAI för att omforma sina arbetsprocesser</li>
                      <li>Konkreta fallstudier från olika branscher som visar på mångfalden av användningsområden</li>
                      <li>Realistisk bild av framgångar och utmaningar vid implementering</li>
                    </ul>
                  </li>
                  <li>
                    <b>Autonoma AI-agenter: Den nya medarbetaren</b>
                    <ul>
                      <li>Utforska potentialen hos autonoma AI-agenter och hur de kompletterar mänskliga team</li>
                      <li>Exempel på verkliga fall av optimering av värdeströmmar med hjälp av GenAI</li>
                      <li>Demonstration av hur autonoma AI-agenter fungerar som effektiva digitala medarbetare</li>
                    </ul>
                  </li>
                  <li>
                    <b>Implementering och ansvar</b>
                    <ul>
                      <li>Strategier och mindset för att få med din organisation i den AI-drivna arbetsplatsen</li>
                      <li>Hantering av utmaningar och potentiella hinder vid AI-implementering</li>
                      <li>Etiska överväganden och ansvarsfull användning av AI i arbetslivet</li>
                      <li>Exempel för att integrera AI-lösningar i existerande IT-infrastruktur</li>
                    </ul>
                  </li>
                  <li>
                    <b>Från vision till verklighet</b>
                    <ul>
                      <li>Konkreta steg för att börja implementera GenAI och autonoma agenter i din organisation idag</li>
                    </ul>
                  </li>
                </ol>
                <!-- <h3>Om {{ schedule?.openingKeynote?.speakers[0].name }}</h3>
                <p>
                  {{ schedule?.openingKeynote?.speakers[0].about }}
                </p> -->
                <br>
                <div class="program-heading">
                  <h2>
                    Implementering av Generativa Autonoma Agenter
                  </h2>
                </div>
                <span><i>Eftermiddag 2h</i></span><br><br>
                <p>
                  Från teori till praktik: Hur vi bygger och integrerar AI-agenter i verkliga miljöer
                  <br>
                  Jag delar med oss av min resa inom AI-agent utveckling, 
                  från våra första experiment till dagens sofistikerade 
                  lösningar. Du får en inblick i våra arbetsmetoder, 
                  verktyg och best practices för att skapa effektiva och 
                  skalbara AI-agenter. Inslag av hands-on kan förekomma.
                  <br>
                  Genom konkreta exempel och praktiska demonstrationer 
                  visar vi hur du kan börja implementera dessa teknologier 
                  i dina egna projekt och organisationer.
                </p>
                <!-- Winter edition -->
                <h3>Målgrupp</h3>
                <p>Detta riktar in sig på dig som är mer tekniskt 
                  intresserad. Du behöver inte vara programmerare, 
                  men du får ut mer av denna session om du någon gång 
                  har kodat någonting. Du kommer efteråt att känna 
                  “jag kan programmera” även om du aldrig känt så 
                  tidigare.</p>
                
                <h3>Innehåll</h3>
                <ol>
                  <li>
                    <b>Vår resa med AI-agenter: Från idé till implementation</b>
                    <ul>
                      <li>Historisk överblick: Hur vi började arbeta med AI-agenter</li>
                      <li>Lärdomar och milstolpar längs vägen</li>
                      <li>Hur vårt arbetssätt har utvecklats över tid</li>
                      <li>Hur vi håller oss uppdaterade med den senaste AI-teknologin</li>
                    </ul>
                  </li>
                  <li>
                    <b>Utvecklingsmiljö och verktyg för AI-agent programmering</b>
                    <ul>
                      <li>Översikt över vår tech stack och för AI-utveckling</li>
                      <li>Exempel av vår utvecklingsmiljö för AI-agenter</li>
                    </ul>
                  </li>
                  <li>
                    <b>Arbetsflöden och best practices</b>
                    <ul>
                      <li>Från spikes till produktion: Vår implementationsprocess</li>
                      <li>Versionshantering och samarbete i AI-projekt</li>
                      <li>Testning och kvalitetssäkring av AI-agenter</li>
                    </ul>
                  </li>
                  <li>
                    <b>Praktisk implementation av autonoma AI-agenter</b>
                    <ul>
                      <li>Tekniska detaljer om hur vi bygger och konfigurerar agenter</li>
                      <li>Arkitektur och design för system med flera samverkande AI-agenter</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Program Umedev 2024
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="program-container">
                <div class="program-row">
                  <br />
                  <div class="about-keynote">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/joh_hollstrom.jpg')
                          "
                          alt="Johanna Björklund"
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker"
                        >Johanna Björklund, Universitetslektor vid institutionen för datavetenskap, Umeå universitet</span
                      >
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Opening keynote: Trender och utmaningar i Media AI
                        </h2>
                      </div>
                      <p>
                        AI/ML för media och språk är en möjliggörande teknik med många tillämpningsområden. I denna keynote pratar vi om hur långt fältet har kommit med avseende på 
                        generering och analys av olika modaliteter, t.ex. bild, ljud, video etc., och om vilka utmaningar som fortfarande kvarstår. 
                        Vi tittar även på nationella forskningsinitiativ inom området, och vilka möjligheter det finns för industrin att engagera sig.<br> 
                        Hon utgår och svarar på frågorna; hur långt tekniken kommit med avseende på generering och analys av olika modaliteter, t.ex. bild, ljud, video etc. 
                        Vilka utmaningar kvarstår? Vilka nationella forskningsinitiativ finns inom området? Och finns det möjlighet för industrin att engagera sig?

                      </p>
                      <span>
                        <h3>About Johanna Björklund</h3>
                        <p>
                          Johanna Björklund är universitetslektor vid institutionen för datavetenskap vid Umeå universitet. Hennes forskning kretsar kringsemantisk analys av 
                          multimodala data, med målet att uppnå en människolik förståelse genom att integrera olika element såsom bilder, ljud, video och text. 
                          Utöver sin akademiska resa är hon medgrundare av Codemill och Aeterna Labs, deep-tech-företag som tillhandahåller produkter och tjänster 
                          för videoproducenter, digitala publicister och annonsörer.
                        </p>
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <v-divider></v-divider>
                  <br />
                  <br />
                  <div class="about-keynote reverse">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/peter_bystrom.jpg')
                          "
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker">
                        Peter Byström
                      </span>
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Ending Keynote: Häng med i nuet, för det händer hela tiden
                        </h2>
                      </div>

                      <p>
                        Under den här presentationen så tittar vi på vad som händer nu med teknisk och social förändring i våran omgivning ur ett större perspektiv 
                        och vad du behöver tänka på för att hänga med. Hur vi kan lära oss att leva i, och vara en bidragande del av ett sociotekniskt ekosystem 
                        i ständig förändring där vi hela tiden måste innovera och anpassa oss till omvärldens nya förväntningar. Vi kommer titta på hur teorier om förändring 
                        sker i olika sammanhang och vilka fallgropar som vi behöver undvika för inte riskera att fastna och hamna efter i utvecklingen. 
                        Vi tittar också lite framåt i spåkulan och funderar kring var AI är på väg och hur nuet kan komma att se ut om inte allt för långt fram i tiden.<br> 
                        En kortare skulle kunna vara: Hur vi kan lära oss att leva i, och vara en bidragande del av ett sociotekniskt ekosystem i ständig förändring där vi 
                        hela tiden måste innovera och anpassa oss till omvärldens nya förväntningar. Vi kommer titta på hur teorier om förändring sker i olika sammanhang och 
                        vilka fallgropar som vi behöver undvika för inte riskera att fastna och hamna efter i utvecklingen.
                      </p>
                      <span>
                        <h3>About Peter Byström</h3>
                        <p>
                          Peter Boman Byström är en agil mentor, teoretiker och praktiker inom komplex system- och verksamhetsutveckling. Med en akademisk bakgrund inom 
                          kognitionsvetenskap är han en generalist med djup förankring inom teknik, design & arkitektur samt organisation & ledarskap. 
                          En profil som blir allt mer användbar i en värld av ständigt ökande komplexitet.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <v-divider></v-divider>
              <br />
              <br />
              <div class="tracks-container">
                <embed type="text/html" src="https://sessionize.com/api/v2/eaasrgtn/view/GridSmart"  width="100%" height="1500">
                <!-- TRACK 1 -->
                <!-- <div class="track">
                  <h3 class="track-heading">Spår 1 - Hörsal E</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>
                      Intro till Actor-baserad utveckling med Project Orleans
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        I den här presentationen så tittar vi på vad det menas med att utveckla 
                        med en actor-baserad modell. Och framförallt på hur vi gör detta rent 
                        praktiskt med Project Orleans
                      </p>
                      <span class="track-speaker">
                        Chris Klug, Active Solution
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>10 sätt att misslyckas med Kubernetes</h4>
                    <span class="content">
                      <p class="program-description">
                        Kubernetes har tagit IT-världen med storm senaste åren och används i 
                        produktion av 64% av organisationerna i en nylig studie från Linux Foundation. 
                        Vanliga motiv att börja använda Kubernetes är skalbarhet, förenklad releasehantering,
                         och ökad produktivitet för utvecklare. I kontrast till detta har Johan på nära 
                         håll följt ett flertal misslyckade införandeprojekt där effekterna helt uteblir. 
                         Detta talk diskuterar dessa erfarenheter och fokuserar på förutsättningarna för att 
                         lyckas med Kubernetes. \n\nSpoiler: Kubernetes är egentligen en PaaS. Det finns 
                         ingen gratislunch utan applikationsutvecklare behöver göra en (hel) del jobb, 
                         det är bara inte alltid tydligt vad.
                      </p>
                      <span class="track-speaker">
                        Johan Tordsson, Elastisys
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Low latency video over public internet</h4>
                    <span class="content">
                      <p class="program-description">
                        Att sända live-video över välfungerande nätverk är enkelt. Den här 
                        föreläsningen går igenom de problem och lösningar som krävs för att sända 
                        live-video när det är allt annat än enkelt. En lösning som ska göra det bästa 
                        av situationen oavsett om du har 3G/4G/5G, Wi-Fi, KA-SAT, Starlink, fiber eller 
                        något annat.
                      </p>
                      <span class="track-speaker">
                        Anders Martinsson, Intinor
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-4"
                      >13.40 - 14.00</span
                    >
                    <h4>I, ChatGPT. En kort överblick.</h4>
                    <span class="content">
                      <p class="program-description">
                        För dig som är intresserad men inte expert på AI, neurala nät eller machine 
                        learning. OpenAI:s ChatGPT är en av många large language models (LLM) som slagit
                         världen med häpnad på väldigt kort tid. Vid första anblicken är det lätt att tro 
                         att ChatGPT ger dig fakta, men det visar sig snart inte stämma. ChatGPT är kreativ 
                         till den grad att vissa kallar den hallucinogen. Vi kommer att titta på vad en LLM 
                         är, vad ChatGPT kan göra bra, dåligt, och vad du kan få den att göra trots dess 
                         inbyggda spärrar.
                      </p>
                      <span class="track-speaker">
                        Jonas Andersson, Algoryx
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-5"
                      >14.30 - 15.10</span
                    >
                    <h4>
                      The Developers Guide to Awesome Code: 5 questions that will boost your career
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Om du är som mig, gillar du att jobba med kod och projekt med hög kvalité. 
                        Utvecklare som du berättar för mig att även fast de föredrar att fokusera på 
                        kodkvalité, är inte alltid företaget eller kollegorna intresserade. Känner du 
                        igen dig? Denna presentation ger dig verktyg som är enkla att använda för att 
                        förbättra denna situation, förbättra kvalitén på din kod och ditt projekt, även 
                        om ditt team inte är intresserade. Under denna presentation kommer du att (1) 
                        lära dig 5 frågor som är enkla att använda och som kommer hjälpa dig i din karriär 
                        (2) få en förståelse för varför personer runt dig inte gör det som är bäst för 
                        dem eller deras karriär och (3) införa en process som hjälper dig och ditt team 
                        förbättra kodkvalitén på ert projekt NU!
                      </p>
                      <span class="track-speaker"
                        >Markus Westergren, Umecon AB</span
                      >
                    </span>
                  </div>
                </div> -->
                <!-- TRACK 2 -->
                <!-- <div class="track">
                  <h3 class="track-heading">Spår 2 - Hörsal F</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>Säkerheten genom historien</h4>
                    <span class="content">
                      <p class="program-description">
                        Detta pass kommer gå igenom hur man sett på säkerhet och teknik genom historien. 
                        Vilka säkerhetsaspekter användes förr och hur har dessa utvecklats över åren? 
                        Detta pass är för den som älskar historia, säkerhet och teknik. Inga förkunskapskrav
                         krävs, kom och luta dig tillbaka för en resa genom vår teknologiska historia.
                      </p>
                      <span class="track-speaker">
                        Emilia Modig, Omegapoint
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>
                      HARA, TARA vänta bara - Utveckling av säkra maskinstyrsystem
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Vi tar ofta för givet att maskiner i vår omgivning är säkra för såväl operatören 
                        som för förbipasserande, men vad innebär det egentligen och hur utvecklas dessa 
                        maskiner så att de blir säkra? Här går vi igenom översiktligt hur projekt inom 
                        maskinsäkerhet kan se ut.
                      </p>
                      <span class="track-speaker">
                        Claes Gahlin, Ålö AB
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Agil säkerhet</h4>
                    <span class="content">
                      <p class="program-description">
                        Säkerhet blir alltför ofta bortglömt i vår agila värld, där fokus ligger på 
                        effektivitet och snabba leveranser. Detta trots att säkerhet är en avgörande 
                        faktor för framgångsrik mjukvaruutveckling.\n\nFrån början till slut och alla 
                        steg däremellan, kommer vi att se på helhetsbilden av vilken typ av 
                        säkerhetsåtgärder som passar var, samt ge konkreta exempel som du kan ta 
                        med dig och börja implementera direkt.
                      </p>
                      <span class="track-speaker">Cecilia Wirén, Active Solution</span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-4"
                      >13.40 - 14.00</span
                    >
                    <h4>Huruvida du ska, eller inte ska, använda kö:er i din arkitektur</h4>
                    <span class="content">
                      <p class="program-description">
                        Meddelandeköer används av många företag över hela världen för att underlätta 
                        smidig, enkel skalning under tillväxt eller som ett sätt för 
                        applikationsmikrotjänster att kommunicera. Detta föredrag ger en översikt över 
                        hur en kö passar in i en arkitektur ur RabbitMQs perspektiv.
                      </p>
                      <span class="track-speaker">
                        Lovisa Johansson, CloudAMQP by 84codes
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-5"
                      >14.30 - 15.10</span
                    >
                    <h4>Från vilda gissningar till mätbara leveranser</h4>
                    <span class="content">
                      <p class="program-description">
                        Frågestund med UX-proffs som vet att UX mognad: - Låter utvecklare fokusera 
                        på utveckling - Förbättrar interna/externa processer för att leverera rätt 
                        värde \n- Når en större marknad \n- Ger konkurrensfördel - Ger ökat kundengagemang
                         - Reducerar kostnader - Följer lagkrav \n\nStäll era frågor och vi svarar!
                      </p>
                      <span class="track-speaker">
                        Mia Petersson, Umecon <br>
                        Paul Alvarado Mendoza, Sartorius <br>
                        Andrea Berglund, Omegapoint <br>
                        Tea Berglund, VK media <br>
                      </span>
                    </span>
                  </div>
                </div> -->
                <!-- TRACK 3 -->
                <!-- <div class="track">
                  <h3 class="track-heading">Spår 3 - Hörsal G</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>Design systems - Less decisions, more time</h4>
                    <span class="content">
                      <p class="program-description">
                        In this talk we will explain how design systems help you free time, to focus on 
                        solving real problems. One key element in a successful design system is bridging 
                        the gap between design and code. Coming from both a design and tech background, 
                        we will share our insights on this.
                      </p>
                      <span class="track-speaker">
                        Joakim Olsson, Daresay by Knightec <br>
                        Anna Viklund, Daresay by Knightec
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>Feedback loops and how to refine them</h4>
                    <span class="content">
                      <p class="program-description">
                        Short Feedback loops and limiting context switching is one of the most important 
                        cornerstones in developer efficiency and developer experience. This talk will 
                        show were you can find improvements and tools to use.
                      </p>
                      <span class="track-speaker"> Mikael Svensson, Nasdaq Umeå </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Hack the Accessibility Crisis</h4>
                    <span class="content">
                      <p class="program-description">
                        Trots lagkrav och riktlinjer så är fortfarande stora delar av webben otillgänglig 
                        för användare med funktionsnedsättningar och funktionsvariationer. \n\nPå detta 
                        pass kommer jag live-testa en sidas tillgänglighet, visa vilka verktyg jag använder 
                        för att identifiera olika tillgänglighetsbuggar, samt rätta till det jag hittar i 
                        koden.
                      </p>
                      <span class="track-speaker"> Andrea Berglund, Omegapoint </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-3"
                      >13.40 - 14.00</span
                    >
                    <h4>Vanliga Myter om Scrum</h4>
                    <span class="content">
                      <p class="program-description">
                        Scrum är det mest kända agila ramverket och många organisationer använder sig av 
                        det i sin produktutveckling. Men det cirkulerar också många myter och felaktigheter 
                        om Scrum. Vi kommer att gå igenom några av dessa och försöka förklara var de kommer 
                        från.
                      </p>
                      <span class="track-speaker"> Rikard Skelander, Trygg-Hansa </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-4"
                      >14.30 - 15.10</span
                    >
                    <h4>Terapi-kaffe-samtal med en smula sammanbrott?</h4>
                    <span class="content">
                      <p class="program-description">
                        Du känner säkert igen dig i den gnagande känslan av att något inte stämmer efter 
                        en lång planeringsdag. Urban är agilcoach och Adam är systemutvecklare, dom ska 
                        tillsammans gräva i de saker som vi suckar åt i våra arbetssätt. \n\nSe det lite 
                        som en fika mellan en agilcoach och en utvecklare efter en utpumpande planering.
                      </p>
                      <span class="track-speaker">
                        Adam Sernheim, Kvadrat AB <br>
                        Urban Sandström, Kvadrat AB
                      </span>
                    </span>
                  </div>
                </div> -->
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Program Umedev 2023
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="program-container">
                <div class="program-row">
                  <br />
                  <div class="about-keynote">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/johanna_skarpman_sundholm.jpg')
                          "
                          alt="Johanna Skarpman Sundholm"
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker"
                        >Johanna Skarpman Sundholm, Data scientist, Metriat</span
                      >
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Opening Keynote: Nya analyser möjliga med fjärranalys och AI
                        </h2>
                      </div>
                      <p>
                        Fjärranalys används för att på ett effektivt sätt kartlägga och observera det som 
                        sker på jorden med hjälp av data som samlats in från ovan. Med nya satelliter 
                        och nationella laserskanningar öppnar sig nya möjligheter att studera och övervaka 
                        natur och miljö från ovan. Detta har drivit en våg av innovativa tilltag, särskilt 
                        kopplat till skogssektorn. Nu testas också greppet att ta till AI för att i högre 
                        grad nyttja de stora datamängderna för att ta fram helt nya eller förbättrade 
                        analyser.

                      </p>
                      <span>
                        <h3>About Helena Holmström Olsson</h3>
                        <p>
                          Johanna Skarpman Sundholm började jobba med data science på Metria 2018. 
                          Hon läste teknisk fysik på KTH med masterprogrammet inom maskininlärning. 
                          Efter examen flyttade hon till Luleå och jobbade några år som algoritmutvecklare 
                          på en start-up i Luleå Science Park innan hon hamnade på Metria. Skarpman 
                          Sundholm har ena benet i Metrias GIS och fjärranalyskonsultverksamhet och det 
                          andra i företagets karttjänstutveckling.
                        </p>
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <v-divider></v-divider>
                  <br />
                  <br />
                  <div class="about-keynote reverse">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/johan_lindfors.jpg')
                          "
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker">
                        Johan Lindfors, CINO, Truesec
                      </span>
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Ending Keynote: Att vara superhjälte när superskurkarna använder kod!
                        </h2>
                      </div>

                      <p>
                        Johan Lindfors har jobbat med Microsofts ekosystem sedan 1998 och är en 
                        återkommande talare vid olika evenemang, oftast med fokus på programmering 
                        och säkerhet. Under 2011 grundade han företaget Coderox som fokuserade uteslutande 
                        på Microsofts plattform med olika tekniker, allt från XAML och C# till C++ och 
                        DirectX. Innan dess jobbade han på Microsoft och sedan 2021 är han anställd på 
                        Truesec där han leder ett affärsområde med konsulter som jobbar med och utbildar 
                        i säker utveckling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <v-divider></v-divider>
              <br />
              <br />
              <div class="tracks-container">
                <!-- TRACK 1 -->
                <div class="track">
                  <h3 class="track-heading">Spår 1 - Hörsal E</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>
                      Intro till Actor-baserad utveckling med Project Orleans
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        I den här presentationen så tittar vi på vad det menas med att utveckla 
                        med en actor-baserad modell. Och framförallt på hur vi gör detta rent 
                        praktiskt med Project Orleans
                      </p>
                      <span class="track-speaker">
                        Chris Klug, Active Solution
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>10 sätt att misslyckas med Kubernetes</h4>
                    <span class="content">
                      <p class="program-description">
                        Kubernetes har tagit IT-världen med storm senaste åren och används i 
                        produktion av 64% av organisationerna i en nylig studie från Linux Foundation. 
                        Vanliga motiv att börja använda Kubernetes är skalbarhet, förenklad releasehantering,
                         och ökad produktivitet för utvecklare. I kontrast till detta har Johan på nära 
                         håll följt ett flertal misslyckade införandeprojekt där effekterna helt uteblir. 
                         Detta talk diskuterar dessa erfarenheter och fokuserar på förutsättningarna för att 
                         lyckas med Kubernetes. \n\nSpoiler: Kubernetes är egentligen en PaaS. Det finns 
                         ingen gratislunch utan applikationsutvecklare behöver göra en (hel) del jobb, 
                         det är bara inte alltid tydligt vad.
                      </p>
                      <span class="track-speaker">
                        Johan Tordsson, Elastisys
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Low latency video over public internet</h4>
                    <span class="content">
                      <p class="program-description">
                        Att sända live-video över välfungerande nätverk är enkelt. Den här 
                        föreläsningen går igenom de problem och lösningar som krävs för att sända 
                        live-video när det är allt annat än enkelt. En lösning som ska göra det bästa 
                        av situationen oavsett om du har 3G/4G/5G, Wi-Fi, KA-SAT, Starlink, fiber eller 
                        något annat.
                      </p>
                      <span class="track-speaker">
                        Anders Martinsson, Intinor
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-4"
                      >13.40 - 14.00</span
                    >
                    <h4>I, ChatGPT. En kort överblick.</h4>
                    <span class="content">
                      <p class="program-description">
                        För dig som är intresserad men inte expert på AI, neurala nät eller machine 
                        learning. OpenAI:s ChatGPT är en av många large language models (LLM) som slagit
                         världen med häpnad på väldigt kort tid. Vid första anblicken är det lätt att tro 
                         att ChatGPT ger dig fakta, men det visar sig snart inte stämma. ChatGPT är kreativ 
                         till den grad att vissa kallar den hallucinogen. Vi kommer att titta på vad en LLM 
                         är, vad ChatGPT kan göra bra, dåligt, och vad du kan få den att göra trots dess 
                         inbyggda spärrar.
                      </p>
                      <span class="track-speaker">
                        Jonas Andersson, Algoryx
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-5"
                      >14.30 - 15.10</span
                    >
                    <h4>
                      The Developers Guide to Awesome Code: 5 questions that will boost your career
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Om du är som mig, gillar du att jobba med kod och projekt med hög kvalité. 
                        Utvecklare som du berättar för mig att även fast de föredrar att fokusera på 
                        kodkvalité, är inte alltid företaget eller kollegorna intresserade. Känner du 
                        igen dig? Denna presentation ger dig verktyg som är enkla att använda för att 
                        förbättra denna situation, förbättra kvalitén på din kod och ditt projekt, även 
                        om ditt team inte är intresserade. Under denna presentation kommer du att (1) 
                        lära dig 5 frågor som är enkla att använda och som kommer hjälpa dig i din karriär 
                        (2) få en förståelse för varför personer runt dig inte gör det som är bäst för 
                        dem eller deras karriär och (3) införa en process som hjälper dig och ditt team 
                        förbättra kodkvalitén på ert projekt NU!
                      </p>
                      <span class="track-speaker"
                        >Markus Westergren, Umecon AB</span
                      >
                    </span>
                  </div>
                </div>
                <!-- TRACK 2 -->
                <div class="track">
                  <h3 class="track-heading">Spår 2 - Hörsal F</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>Säkerheten genom historien</h4>
                    <span class="content">
                      <p class="program-description">
                        Detta pass kommer gå igenom hur man sett på säkerhet och teknik genom historien. 
                        Vilka säkerhetsaspekter användes förr och hur har dessa utvecklats över åren? 
                        Detta pass är för den som älskar historia, säkerhet och teknik. Inga förkunskapskrav
                         krävs, kom och luta dig tillbaka för en resa genom vår teknologiska historia.
                      </p>
                      <span class="track-speaker">
                        Emilia Modig, Omegapoint
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>
                      HARA, TARA vänta bara - Utveckling av säkra maskinstyrsystem
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Vi tar ofta för givet att maskiner i vår omgivning är säkra för såväl operatören 
                        som för förbipasserande, men vad innebär det egentligen och hur utvecklas dessa 
                        maskiner så att de blir säkra? Här går vi igenom översiktligt hur projekt inom 
                        maskinsäkerhet kan se ut.
                      </p>
                      <span class="track-speaker">
                        Claes Gahlin, Ålö AB
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Agil säkerhet</h4>
                    <span class="content">
                      <p class="program-description">
                        Säkerhet blir alltför ofta bortglömt i vår agila värld, där fokus ligger på 
                        effektivitet och snabba leveranser. Detta trots att säkerhet är en avgörande 
                        faktor för framgångsrik mjukvaruutveckling.\n\nFrån början till slut och alla 
                        steg däremellan, kommer vi att se på helhetsbilden av vilken typ av 
                        säkerhetsåtgärder som passar var, samt ge konkreta exempel som du kan ta 
                        med dig och börja implementera direkt.
                      </p>
                      <span class="track-speaker">Cecilia Wirén, Active Solution</span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-4"
                      >13.40 - 14.00</span
                    >
                    <h4>Huruvida du ska, eller inte ska, använda kö:er i din arkitektur</h4>
                    <span class="content">
                      <p class="program-description">
                        Meddelandeköer används av många företag över hela världen för att underlätta 
                        smidig, enkel skalning under tillväxt eller som ett sätt för 
                        applikationsmikrotjänster att kommunicera. Detta föredrag ger en översikt över 
                        hur en kö passar in i en arkitektur ur RabbitMQs perspektiv.
                      </p>
                      <span class="track-speaker">
                        Lovisa Johansson, CloudAMQP by 84codes
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-5"
                      >14.30 - 15.10</span
                    >
                    <h4>Från vilda gissningar till mätbara leveranser</h4>
                    <span class="content">
                      <p class="program-description">
                        Frågestund med UX-proffs som vet att UX mognad: - Låter utvecklare fokusera 
                        på utveckling - Förbättrar interna/externa processer för att leverera rätt 
                        värde \n- Når en större marknad \n- Ger konkurrensfördel - Ger ökat kundengagemang
                         - Reducerar kostnader - Följer lagkrav \n\nStäll era frågor och vi svarar!
                      </p>
                      <span class="track-speaker">
                        Mia Petersson, Umecon <br>
                        Paul Alvarado Mendoza, Sartorius <br>
                        Andrea Berglund, Omegapoint <br>
                        Tea Berglund, VK media <br>
                      </span>
                    </span>
                  </div>
                </div>
                <!-- TRACK 3 -->
                <div class="track">
                  <h3 class="track-heading">Spår 3 - Hörsal G</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>Design systems - Less decisions, more time</h4>
                    <span class="content">
                      <p class="program-description">
                        In this talk we will explain how design systems help you free time, to focus on 
                        solving real problems. One key element in a successful design system is bridging 
                        the gap between design and code. Coming from both a design and tech background, 
                        we will share our insights on this.
                      </p>
                      <span class="track-speaker">
                        Joakim Olsson, Daresay by Knightec <br>
                        Anna Viklund, Daresay by Knightec
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-2"
                      >10.50 - 11.30</span
                    >
                    <h4>Feedback loops and how to refine them</h4>
                    <span class="content">
                      <p class="program-description">
                        Short Feedback loops and limiting context switching is one of the most important 
                        cornerstones in developer efficiency and developer experience. This talk will 
                        show were you can find improvements and tools to use.
                      </p>
                      <span class="track-speaker"> Mikael Svensson, Nasdaq Umeå </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-3"
                      >12.50 - 13.30</span
                    >
                    <h4>Hack the Accessibility Crisis</h4>
                    <span class="content">
                      <p class="program-description">
                        Trots lagkrav och riktlinjer så är fortfarande stora delar av webben otillgänglig 
                        för användare med funktionsnedsättningar och funktionsvariationer. \n\nPå detta 
                        pass kommer jag live-testa en sidas tillgänglighet, visa vilka verktyg jag använder 
                        för att identifiera olika tillgänglighetsbuggar, samt rätta till det jag hittar i 
                        koden.
                      </p>
                      <span class="track-speaker"> Andrea Berglund, Omegapoint </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-3"
                      >13.40 - 14.00</span
                    >
                    <h4>Vanliga Myter om Scrum</h4>
                    <span class="content">
                      <p class="program-description">
                        Scrum är det mest kända agila ramverket och många organisationer använder sig av 
                        det i sin produktutveckling. Men det cirkulerar också många myter och felaktigheter 
                        om Scrum. Vi kommer att gå igenom några av dessa och försöka förklara var de kommer 
                        från.
                      </p>
                      <span class="track-speaker"> Rikard Skelander, Trygg-Hansa </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-4"
                      >14.30 - 15.10</span
                    >
                    <h4>Terapi-kaffe-samtal med en smula sammanbrott?</h4>
                    <span class="content">
                      <p class="program-description">
                        Du känner säkert igen dig i den gnagande känslan av att något inte stämmer efter 
                        en lång planeringsdag. Urban är agilcoach och Adam är systemutvecklare, dom ska 
                        tillsammans gräva i de saker som vi suckar åt i våra arbetssätt. \n\nSe det lite 
                        som en fika mellan en agilcoach och en utvecklare efter en utpumpande planering.
                      </p>
                      <span class="track-speaker">
                        Adam Sernheim, Kvadrat AB <br>
                        Urban Sandström, Kvadrat AB
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Program Umedev 5 april 2022
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="program-container">
                <div class="program-row">
                  <br />
                  <div class="about-keynote">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/Helena_Holmstrom_Olsson_Mindre.jpg')
                          "
                          alt="Helena Holmström Olsson"
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker"
                        >Professor Helena Holmström Olsson, Malmö
                        Universitet</span
                      >
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Opening Keynote: Digitalization Disrupts: How
                          software, data and AI transform industry
                        </h2>
                      </div>
                      <p>
                        With digitalization and with technologies such as
                        software, data, and artificial intelligence, industry in
                        general, and companies in the embedded systems domain in
                        particular, are experiencing a rapid transformation of
                        their conventional businesses.
                      </p>
                      <p>
                        While the physical products and associated product sales
                        still provide the core revenue, these are increasingly
                        being complemented with service offerings, new
                        data-driven services, and digital products that allow
                        for continuous value creation and delivery to customers.
                      </p>
                      <p>
                        This talk explores the difference between what
                        constitutes a traditional and a digital company and
                        details the typical evolution path embedded systems
                        companies take when transitioning towards becoming
                        digital companies. The talk focuses on the opportunities
                        and challenges that companies face in their digital
                        transformation and it highlights the importance, and
                        disruptive forces, of software, data and artificial
                        intelligence. The talk provides concrete examples based
                        on action-oriented research conducted in close
                        collaboration with companies in the the embedded systems
                        domain.
                      </p>
                      <span>
                        <h3>About Helena Holmström Olsson</h3>
                        <p>
                          Helena Holmström Olsson is a Professor in Computer
                          Science at the Department of Computer Science and
                          Media Technology at Malmö University, Sweden, and a
                          senior researcher in
                          <a
                            href="https://www.software-center.se/"
                            rel="noopener noreffer"
                            target="_blank"
                            >Software Center </a
                          >. She received her Ph.D. in Informatics from
                          University of Gothenburg in 2004 and did her Post doc
                          in LERO (‘The Irish Software Research Center’) at
                          University of Limerick, Ireland. Her research is
                          conducted in close collaboration with industry and
                          primarily with software-intensive companies in the
                          embedded systems domain. Her research interests
                          include engineering aspects of AI systems, data driven
                          development practices, data management, digital
                          transformation and software and business ecosystems.
                        </p>
                        <a
                          href="https://scholar.google.com/citations?user=bjGw_5QAAAAJ&hl=en&oi=ao"
                          >Google Scholar profile</a
                        >
                      </span>
                    </div>
                  </div>
                  <br />
                  <br />
                  <v-divider></v-divider>
                  <br />
                  <br />
                  <div class="about-keynote reverse">
                    <div class="profile-container">
                      <v-avatar
                        class="bio-image"
                        color="grey"
                        size="256"
                        rounded="1"
                      >
                        <v-img
                          cover
                          v-bind:src="
                            require('../assets/img/Kenneth_Bodin_mindre.jpg')
                          "
                        ></v-img>
                      </v-avatar>
                      <span class="keynote-speaker">
                        Kenneth Bodin, CEO and co-founder Algoryx
                      </span>
                    </div>
                    <div class="keynote-description">
                      <div class="program-heading">
                        <h2>
                          Ending Keynote: The Metaverse - will it revolutionize
                          innovation and social relations - or bring down our
                          democracies?
                        </h2>
                      </div>

                      <p>
                        Kenneth Bodin is CEO and co-founder of Algoryx. He has a
                        research background in computational physics and virtual
                        reality before co-founding Algoryx. Algoryx brings
                        real-world physics to virtual engineering environments
                        to realize an open engineering metaverse for innovation
                        and collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <v-divider></v-divider>
              <br />
              <br />
              <div class="tracks-container">
                <!-- TRACK 1 -->
                <div class="track">
                  <h3 class="track-heading">Spår 1 - Hörsal E</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>
                      Migrera till .NET 6 Blazor med hjälp av Strangler Fig
                      Pattern
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Introduktion till webbutveckling med .NET Blazor. Hur vi
                        använde Strangler Fig Pattern för att börja använda den
                        nya tekniken utan att först behöva skriva om hela
                        applikationen på en gång.
                      </p>
                      <span class="track-speaker">
                        Tommy Hörnlund, Trimma AB
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-2"
                      >10.50 - 11.10</span
                    >
                    <h4>Mår man mindre Python efter en Java?</h4>
                    <span class="content">
                      <p class="program-description">
                        Efter ca 15 år med i huvudsak Enterprise Java (och en
                        del Javascript såklart) så var det spännande att bryta
                        av helt till en miljö där större delen av kodbasen är i
                        C++, och där jag i huvudsak spenderar min tid med
                        Python. Jag funderar över en del av Pythons bra saker,
                        över att Python nu är etta på TIOBE Index över världens
                        mest populära språk. Och över att det finns ett par
                        saker jag saknar från Java.
                      </p>
                      <span class="track-speaker">
                        Jonas Andersson, Algoryx
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-3"
                      >11.20 - 11.40</span
                    >
                    <h4>The Future is Dark</h4>
                    <span class="content">
                      <p class="program-description">
                        Vad är ett programmeringsspråk? Varför kan inte våra
                        verktyg skriva koden åt oss? Kan man skriva kod direkt i
                        produktion, och vad händer om man gör det? Samt, kan man
                        inte bara kompilera koden medan man skriver den och
                        därmed aldrig behöva råka ut för ett kompileringsfel
                        igen?
                      </p>
                      <p />
                      <p>
                        Beväpnade med en nyckel till en stängd beta tar vi oss
                        en titt på programmeringsspråket Dark. Ett språk som
                        utmanar gamla (och i vissa fall, förlegade)
                        föreställningar om hur vi utvecklar mjukvara och som
                        visar oss hur man återuppfinner mjukvaruutveckling på
                        2020-talet.
                      </p>
                      <span class="track-speaker">
                        Linus Lagerhjelm, Omegapoint
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-4"
                      >12.50 - 13:30</span
                    >
                    <h4>Jakarta EE 10 is Coming Your Way!</h4>
                    <span class="content">
                      <p class="program-description">
                        Jakarta EE 9 lowered the barriers of entry and
                        established a foundation for future innovation paving
                        the way for Jakarta EE 10.
                      </p>

                      <p />
                      With Jakarta EE 10, we introduced Jakarta EE Core Profile
                      which targets smaller runtimes suitable for microservices.
                      The Jakarta EE Core Profile also aims to be an even better
                      fit for compiling to native images. But it does not stop
                      there. Both Jakarta EE Web Profile and Jakarta EE Platform
                      is moving forward as well with updates to almost all the
                      individual specifications.
                      <p />
                      Join this session for the latest updates on the progress
                      with Jakarta EE 10. I will go through what Jakarta EE 10
                      brings to the table, and what to expect when the
                      specifications are moving forward. The session will also
                      give you a clear understanding of how to migrate from
                      previous versions of Jakarta EE and Java EE as well as
                      show how to leverage Java SE 17 and newer features with
                      Jakarta EE.
                      <span class="track-speaker">
                        Ivar Grimstad, Eclipse Foundation
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-5"
                      >13:40 - 14:00</span
                    >
                    <h4>
                      Service blueprint - How user interactions affect front-end
                      and back-end
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Jag kommer att prata om hur vi på Sartorius använder oss
                        av verktyget - Service Blueprint som annars används för
                        tjänstedesign, och hur vi använder det för vår
                        mjukvaruutveckling för att synka, kommunicera och
                        diskutera olika idéers påverkan på systemet från
                        front-end till back-end.
                      </p>
                      <span class="track-speaker"
                        >Paul Alvarado Mendoza, Sartorius</span
                      >
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-1-pass-6"
                      >14:30 - 15:10</span
                    >
                    <h4>Jetpack Compose - Nutiden är här för UI på Android</h4>
                    <span class="content">
                      <p class="program-description">
                        Vi har sett förändringen ske på webben, där vi gick från
                        statiska hemsidor till de dynamiska webbplatser vi tar
                        för givet idag. I takt med användarens växande behov och
                        krav, utvecklades också de tekniker och ramverk som vi
                        använder oss av idag.
                      </p>
                      Under den här presentationen kommer ni att få följa
                      drivkrafterna bakom denna utvecklingen fram till dagens
                      deklarativa ramverk som t.ex. React. Vi kommer sedan se
                      hur samma kliv just nu tas inom utvecklingen av mobila
                      appar, där markup i XML ersätts av nya deklarativa ramverk
                      som Jetpack Compose, något som helt förändrar vårt sätt
                      att bygga appar på Android. Nutiden är här!
                      <span class="track-speaker">
                        Michael Knutsson, Swedbank
                      </span>
                    </span>
                  </div>
                </div>
                <!-- TRACK 2 -->
                <div class="track">
                  <h3 class="track-heading">Spår 2 - Hörsal F</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>The future of blockchain technology in gaming</h4>
                    <span class="content">
                      <p class="program-description">
                        Möjligheter och utmaningar med att integrera blockchain
                        med spel.
                      </p>

                      <p />
                      <p>
                        Hur vi har tacklat det i vårat spel och vilka lärdomar
                        som finns.
                      </p>
                      <span class="track-speaker">
                        Åke André, Crypto Rogue Games AB
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-2"
                      >10.50 - 11.10</span
                    >
                    <h4>
                      Utmaningar med att bygga ett multiplayer spel med ekonomi
                    </h4>
                    <span class="content">
                      <p class="program-description">
                        Crystal of Naramunz är ett free-2-play multiplayer
                        action RPG med hållbar spelekonomi.
                      </p>

                      <p />
                      <p>
                        Vi kommer att prata om vilka problem vi ser framför oss?
                        Vilka unika krav vi har? Och lite om hur det här
                        projektet skiljer sig mot andra liknande spel?
                      </p>
                      <span class="track-speaker">
                        Klaas Tojkander & Viktor Svensson, Crypto Rogue Games AB
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-3"
                      >11.20 - 11.40</span
                    >
                    <h4>Prediktion av vårdtid på IVA</h4>
                    <span class="content">
                      <p class="program-description">
                        Vi ha med hjälp av elektroniska journaler och
                        maskininlärning skapat en modell som predikterar hur
                        länge en patient kommer att ligga inne på NUS
                        intensivvårdsavdelning. Detta för att underlätta
                        resurssättning och logistikplanering kring sängplatser.
                      </p>
                      <span class="track-speaker">Petter Lindgren, Sogeti</span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-4"
                      >12.50 - 13:30</span
                    >
                    <h4>Space, the final frontier</h4>
                    <span class="content">
                      <p class="program-description">
                        Swedbank valde för ett antal år sedan att investera att
                        ta fram en ny utvecklingsplatform baserat på
                        micro-services, containers, CI/CD, autonoma teams,
                        DevOps, m.m.
                      </p>

                      <p>
                        Plattformen fick namnet Andromeda, efter våran närmaste
                        galax, för att hänvisa till den långa resa som team
                        behöver göra kompetensmässigt, processmässigt och
                        kulturmässigt. Men för att överbrygga och göra denna
                        resa snabbare och smidigare skapade ett platform team
                        som drivs utifrån att leverera en smidigt produkt till
                        sina kunder, dvs utvecklingsteamen. Att bygga en
                        utvecklingsplatform som ska möta 100-tals
                        utvecklingsteams förväntningar, driva kulturförändring
                        gentemot moderna utvecklingsprinciper, säkerställa en
                        stabil drift av de applikationer som byggs på
                        plattformen, etc är en svår balansgång. Denna
                        presentation lyfter de erfarenheter och vägval som har
                        uppkommit under resan från att erbjuda en smidig
                        ombordning för team, utveckling på plattformen samt
                        drift från de team som bygger upp och erbjuder
                        plattformen som tjänst.
                      </p>
                      <span class="track-speaker">
                        Markus Backman, Swedbank
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-5"
                      >13:40 - 14:00</span
                    >
                    <h4>Cybersäkerhet, varför vi behöver det.</h4>
                    <span class="content">
                      <p class="program-description">
                        En grundläggande introduktion till cybersäkerhet och
                        varför vi behöver det. Enkla begrepp och förklaringar
                        kopplas till kända incidenter.
                      </p>
                      <span class="track-speaker">
                        Mirjam Borén, Omegapoint
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-2-pass-6"
                      >14:30 - 15:10</span
                    >
                    <h4>Arkitektur i en snabbt växande organisation</h4>
                    <span class="content">
                      <p class="program-description">
                        Vi tar en titt på hur mjukvaruarkitektur och en
                        organisation som växer kan samverka för att på ett
                        effektivt sätt kunna uppfylla det önskvärda syftet. I
                        Sartorius fall handlar det om att skynda på time to
                        market för nya produkter och med bibehållen kvalité
                      </p>
                      <span class="track-speaker">
                        Mats Wikström, Sartorius
                      </span>
                    </span>
                  </div>
                </div>
                <!-- TRACK 3 -->
                <div class="track">
                  <h3 class="track-heading">Spår 3 - Hörsal G</h3>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-1"
                      >10.00 - 10.40</span
                    >
                    <h4>Trygghetsskapande tester</h4>
                    <span class="content">
                      <p class="program-description">
                        I alla projekt har vi krav uppifrån på hög testtäckning.
                        Men sover vi verkligen tryggare om natten när vi vet att
                        vi har 90% av koden täckt av tester?
                      </p>
                      <p />
                      Jag pratar i min presentation om hur jag tycker att vi ska
                      jobba med våra automatiserade tester, vilka angreppssätt
                      vi kan använda oss av och varför jag tycker att den här
                      förändringen av våra testsätt är viktig.
                      <span class="track-speaker">
                        Adam Sernheim, Kvadrat
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-2"
                      >10.50 - 11.10</span
                    >
                    <h4>Design för färgblinda - en personlig reflexion</h4>
                    <span class="content">
                      <p class="program-description">
                        En personlig berättelse om hur det är att vara
                        "färgblind" och hur det påverkar vad som kan bli svårt i
                        ett gränssnitt.
                      </p>
                      <span class="track-speaker"> Ellen Jacobsson, ITS </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-3"
                      >11.20 - 11.40</span
                    >
                    <h4>Ledarskap som ökar engagemang och prestation</h4>
                    <span class="content">
                      <p class="program-description">
                        En kort föreläsning om hur kontinuerliga samtal med sina
                        medarbetare ökar engagemang och prestation.
                      </p>
                      <span class="track-speaker"> Tommy Eriksson, Evity </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-4"
                      >12.50 - 13:30</span
                    >
                    <h4>Norrsken i fyra dimensioner</h4>
                    <span class="content">
                      <p class="program-description">
                        Genom att matematiskt analysera bilder på norrsken kan
                        fysiker forska kring magnetfält, solaktivitet och
                        atmosfärsfysik. Bättre om de kan beräkna en
                        tredimensionell modell. Än bättre om den görs
                        fyrdimensionell, genom att analysera förändring över
                        tid. Vilka sorters utmaningar ställs man inför som
                        utvecklare i ett sådant projekt? Vi börjar med en
                        grundkurs i vad norrsken är, innan vi går in på
                        datadriven utveckling. För när datamängderna räknas i
                        terabyte börjar det bli viktigt med lågnivåoptimering
                        och växling mellan programspråk. Hur testar man
                        förresten matematiska formler?
                      </p>
                      <span class="track-speaker">
                        Lars-Henrik Snow, IRF - Institutet för Rymdfysik
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-5"
                      >13:40 - 14:00</span
                    >
                    <h4>Konfiguration för kreativitet</h4>
                    <span class="content">
                      <p class="program-description">
                        Hur något så torrt som konfiguration kan avgöra den
                        kreativa höjden. Hur man hittar en balans för
                        användbarhet, enkelhet och flexibilitet för att skapa
                        kreativitet för rätt person. I allt från spelutveckling
                        till bokföring.
                      </p>
                      <span class="track-speaker"
                        >Anders Gunnarsson, Coeo
                      </span>
                    </span>
                  </div>
                  <div class="program-row">
                    <span
                      class="time"
                      id="spar-3-pass-6"
                      >14:30 - 15:10</span
                    >
                    <h4>Daglig automatiserad uppgradering av Ladok</h4>
                    <span class="content">
                      <p class="program-description">
                        Vi gör en djupdykning i de system som automatiskt rullar
                        ut förbättringar till produktion i Ladok.
                        Utvecklingsteamen tar själva beslut om när rättningar
                        och förbättringar ska levereras och gör ändringen i GIT.
                        Förändringarna testas i en automatisk pipeline i Jenkins
                        och driftmiljöerna uppgraderas morgonen efter med hjälp
                        av Ansible. Detta sker sömlöst utan att påverka
                        användare. Vi kommer att prata om hur detta är
                        implementerat från början till slut.
                      </p>
                      <span class="track-speaker"> Fredrik Domeij, ITS </span>
                    </span>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Program Umedev sessions 27 maj 2020
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <h3 class="previous-program-heading">
                Program Umedev sessions 27 maj 2020
              </h3>
              <div class="program-container">
                <div class="program-row">
                  <div class="program-heading">
                    <span class="time">11.35 - 11.55</span>
                    <h3>Keynote - Designkompetenser i en föränderlig värld</h3>
                  </div>
                  <span class="content">
                    <p>
                      Utbredningen av covid-19 pandemin har inneburit utmaningar
                      och behov av snabba förändringar för många branscher.
                      Omställning är idag ett dagsaktuellt begrepp.
                      <br />Förändring är samtidigt nära besläktat med design
                      och utveckling och i vår bransch måste vi alltid se hur vi
                      kan arbeta med design för positiv förändring - dvs god
                      utveckling. <br /><br />Men vilka kompetenser behövs?
                      <br />
                      Och hur kan vi tänka kring utveckling av våra kompetenser?
                      <br />
                      <br />
                      I denna keynote kommer professor Mikael Wiberg att
                      fokusera på designkompetenser i en föränderlig värld
                      utifrån dagsaktuella frågor om specialistkompetenser vs.
                      att vara generalist. Han kommer även belysa vad design-
                      och utvecklingsteam behöver reflektera över vad gäller
                      kompetensförsörjning, inte minst i en tid då såväl
                      teknologier, som samhället och dess behov snabbt
                      förändras.
                    </p>
                    <span class="speaker">
                      Mikael Wiberg, Professor i Informatik, Umeå Universitet
                    </span>
                  </span>
                </div>
                <div class="tracks-container">
                  <div class="track">
                    <h3 class="track-heading">Spår 1</h3>
                    <div class="program-row">
                      <span class="time">12.00 - 12.20</span>
                      <h4>Microservices och meddelandeköer</h4>
                      <span class="content">
                        <p class="program-description">
                          Dagens monolitiska system ersätts i snabb takt av
                          system byggda av flertalet microservices. Den här
                          presentationen förklarar sambandet mellan
                          microservices och meddelandeköer. Vi tittar på hur
                          84codes AB, världens största leverantör av “RabbitMQ
                          as a Service” använder RabbitMQ som kärna i deras
                          arkitekturen.
                        </p>
                        <span class="speaker"> Lovisa Johansson, 84Codes </span>
                      </span>
                    </div>
                    <div class="program-row">
                      <span class="time">12.30 - 12.50</span>
                      <h4>Specification by example - frontend</h4>
                      <span class="content">
                        <p class="program-description">
                          Att använda många exempel för att beskriva ett tänkt
                          beteende är ofta lättare än att förklara den generella
                          principen. Det blir särskilt uppenbart vid utveckling
                          av automatiska tester.
                          <br />Det här passet lajv-refaktoriserar
                          svårtillgänglig testkod till något som både går
                          snabbare att exekvera, är lättare att förstå och
                          enkelt att lägga till fler exempel till.
                          <br />
                          <br />
                          Om du eller ditt team kommer på er själva att någon
                          gång säga "vi skulle behöva mer tester men det är för
                          jobbigt att skriva fler" eller "nu har jag en
                          fungerande implementation men vet inte hur jag ska
                          testa den" är detta passet för er!
                        </p>
                        <span class="speaker"
                          >Lars-Henrik Snow, Umeå Universitet
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="track">
                    <h3 class="track-heading">Spår 2</h3>
                    <div class="program-row">
                      <span class="time">12.00 - 12.20</span>
                      <h4>Produktivitetstips för team</h4>
                      <span class="content">
                        <p class="program-description">
                          Spelar det någon roll *när* man gör saker? Ja, tiden
                          påverkar vår produktivitet på många olika sätt och
                          denna blixtföreläsning handlar om hur team kan jobba
                          mer effektivt genom att planera vissa saker på vissa
                          tider.
                        </p>
                        <span class="speaker">Christina Skaskiw, Acino</span>
                      </span>
                    </div>
                    <div class="program-row">
                      <span class="time">12.30 - 12.50</span>
                      <h4>När politiken styr utvecklingen</h4>
                      <span class="content">
                        <p class="program-description">
                          En politisk överenskommelse i en skattefråga som kan
                          sammanfattas på mindre än 30 sekunder kan kosta
                          tiotals miljoner i systemutveckling på Skatteverket
                          och andra myndigheter. Det kan vara omöjligt att
                          invänta färdigskrivna lagar innan utvecklingen
                          påbörjas, på grund av kort tid fram till när de ska
                          börja gälla.
                          <br />
                          <br />
                          Hur utvecklar man med sådana förutsättningar? Vad gör
                          man när ett politiskt utspel i pressen dramatiskt kan
                          påverka redan pågående utveckling? Hur påverkas
                          utvecklingsteam när medlemmarna börjar tvivla på att
                          koden som skrivs någonsin kommer att
                          produktionssättas?
                          <br />
                          Roger Nilsson, Product Owner på Skatteverket, berättar
                          om sina erfarenheter från utveckling av en del av
                          innehållet i Januariöverenskommelsen. Från uppgång
                          till fall.
                        </p>
                        <span class="track-speaker"
                          >Roger Nilsson, Skatteverket</span
                        >
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Program från 2019
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <h3 class="previous-program-heading">Program från 2019</h3>
              <img
                class="program-img"
                src="../assets/img/Tidigare-schema.png"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="program-end"></div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderWithPepper from '@/components/HeaderWithPepper.vue'
import Schedule from '@/components/Schedule.vue'
import { schedule2024Winter } from '../data/schedule2024Winter'
export default {
  name: 'Program',
  components: {
    HeaderWithPepper,
    Schedule,
  },
  data() {
    return {
      panel: 0,
      schedule: schedule2024Winter ,
    }
  },
}
</script>
<style scoped>
.program-container {
  margin: 0px auto 10px auto;
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
  margin-bottom: 1rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
}

.program-heading h2 {
  margin-top: 0;
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

h4 {
  font-size: 1.15rem;
}
.program-img {
  width: 100%;
  height: auto;
}

/* Keynote CSS
---------------- */
.keynote-speaker {
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 15px;
  margin-top: 10px;
  display: block;
  text-align: center;
}

.keynote-speaker-name {
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 0px;
}

.keynote-speaker-title {
  font-size: 0.95rem;
  color: #585656;
}

.about-keynote {
  /*display: block;*/
  display: flex;
  padding-top: 17px;
  gap: 2rem;
}

.about-keynote.reverse {
  flex-direction: row-reverse;
}

.keynote-description {
  /*   padding-left: 2rem;
 */
}

.about-keynote img {
  max-height: 300px;
  margin-right: 1rem;
  height: auto;
  width: auto;
  float: left;
}
@media screen and (max-width: 600px) {
  .about-keynote img {
    float: none;
    margin: 8px auto;
    display: block;
  }
}

/*
Schedule
----------- */
.schedule {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #56ab2f;
  max-width: 1024px;
  margin: 0 auto;
  display: block;
}
.time-slot-row {
  display: flex;
  flex-direction: row;
  flex-basis: 1;
  align-content: flex-start;
  justify-content: center;
  border-top: 1px solid #56ab2f;
  flex-grow: 1;
}
.time-slot-row.paus {
  background-color: rgba(86, 171, 47, 0.2);
}
.time-slot-actual-time {
  width: 133px;
  padding: 8px;
  height: 100%;
  font-weight: bold;
  flex-grow: 1;
}
.time-slot-content {
  padding: 8px;
  border-left: 1px solid #56ab2f;
  justify-content: center;
  text-align: center;
  width: 100%;
}
.time-slot-content.with-tracks {
  display: flex;
  flex-direction: row;
  padding: 0;
}
.schedule-track {
  flex-grow: 1;
  border-left: 1px solid #56ab2f;
  padding: 4px;
  width: 100%;
}
.time-slot-content .schedule-track:first-of-type {
  border-left: none;
}
.time-slot-content p {
  margin-bottom: 4px;
}
.schedule-name {
  font-weight: bold;
  font-size: 0.875rem;
}
/*
Tracks CSS
------------ */
.tracks-container {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
  padding: 1rem;
  column-gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
}
.tracks-container .program-row {
  border: 1px solid rgba(86, 171, 47, 0.5);
  padding: 10px;
  margin-bottom: 1rem;
}
.track-speaker {
  font-size: 0.85rem;
  margin: 1rem 0;
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  padding-left: 0.25rem;
}
.content {
  padding: 10px 15px;
}
.track-heading {
  padding: 10px;
  background-color: rgba(86, 171, 47, 0.2);
}
h3.track-heading {
  margin-bottom: 0;
}
.track {
  width: 47%;
}
h2 {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: bold;
  margin-top: 16px;
}

/*
Previous program CSS
------------ */
.previous-program {
  padding: 1rem 0;
  background-color: rgba(86, 171, 47, 0.2);
}

.current-program {
  padding: 0.5rem 0;
  background-color: #fff;
}

.previous-program-inner,
.current-program-inner {
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 24px;
}

.current-program-inner {
  /*-webkit-box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%); */
}

.previous-program-heading,
.current-program-heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
h3.previous-program-heading,
h3.current-program-heading {
  font-size: 1.5rem;
  border-bottom: 2px solid #56ab2f;
  margin-top: 1rem;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .tracks-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .track {
    width: 100%;
  }
  .program-row {
    margin-bottom: 20px;
  }
  .program-container,
  .program-heading,
  h2:first-of-type {
    margin-top: 0;
  }
  h2 {
    font-size: 1.75rem;
  }
  .previous-program-inner {
    padding: 1rem;
  }

  .about-keynote,
  .about-keynote.reverse {
    flex-direction: column;
  }
}
.program-row {
  display: flex;
  flex-direction: column;
}
.program-info {
  margin: 3rem 0;
}

.program-end {
  height: 4px;
  width: 100%;
  background-color: #56ab2f;
  margin-bottom: 100px;
}

.extra-information-text {
  margin-top: 2rem;
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
