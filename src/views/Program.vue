<template>
  <div>
    <HeaderWithPepper header="Program Umedev 2022" />

    <v-row class="mb-6" justify="start">
      <v-col md="auto" class="content wrapper">
        <div class="program-container">
          <div class="program-row">
            <div class="program-heading">
              <h2>
                Opening Keynote: Digitalization Disrupts: How software, data and
                AI transform industry
              </h2>
            </div>
            <span class="keynote-speaker">
              Professor Helena Holmström Olsson, Malmö Universitet
            </span>
            <div class="about-keynote">
              <img
                v-bind:src="
                  require('../assets/Helena_Holmstrom_Olsson_Mindre.jpg')
                "
                alt="Helena Holmström Olsson"
              />

              <p>
                With digitalization and with technologies such as software,
                data, and artificial intelligence, industry in general, and
                companies in the embedded systems domain in particular, are
                experiencing a rapid transformation of their conventional
                businesses.
              </p>
              <p>
                While the physical products and associated product sales still
                provide the core revenue, these are increasingly being
                complemented with service offerings, new data-driven services,
                and digital products that allow for continuous value creation
                and delivery to customers.
              </p>
              <p>
                This talk explores the difference between what constitutes a
                traditional and a digital company and details the typical
                evolution path embedded systems companies take when
                transitioning towards becoming digital companies. The talk
                focuses on the opportunities and challenges that companies face
                in their digital transformation and it highlights the
                importance, and disruptive forces, of software, data and
                artificial intelligence. The talk provides concrete examples
                based on action-oriented research conducted in close
                collaboration with companies in the the embedded systems domain.
              </p>
            </div>
            <span>
              <span class="keynote-speaker">
                About Helena Holmström Olsson
              </span>
              <p>
                Helena Holmström Olsson is a Professor in Computer Science at
                the Department of Computer Science and Media Technology at Malmö
                University, Sweden, and a senior researcher in
                <a
                  href="https://www.software-center.se/"
                  rel="noopener noreffer"
                  target="_blank"
                  >Software Center </a
                >. She received her Ph.D. in Informatics from University of
                Gothenburg in 2004 and did her Post doc in LERO (‘The Irish
                Software Research Center’) at University of Limerick, Ireland.
                Her research is conducted in close collaboration with industry
                and primarily with software-intensive companies in the embedded
                systems domain. Her research interests include engineering
                aspects of AI systems, data driven development practices, data
                management, digital transformation and software and business
                ecosystems.
              </p>
              <a
                href="https://scholar.google.com/citations?user=bjGw_5QAAAAJ&hl=en&oi=ao"
                >Google Scholar profile</a
              >
            </span>
            <br />
            <br />
            <div class="program-heading">
              <h2>
                Ending Keynote: The Metaverse - will it revolutionize innovation
                and social relations - or bring down our democracies?
              </h2>
            </div>
            <span class="keynote-speaker">
              Kenneth Bodin, CEO and co-founder Algoryx
            </span>
            <div class="about-keynote">
              <img
                class="bio-image"
                v-bind:src="require('../assets/Kenneth_Bodin_mindre.jpg')"
                alt="Kenneth Bodin"
              />
              <p>
                Kenneth Bodin is CEO and co-founder of Algoryx. He has a
                research background in computational physics and virtual reality
                before co-founding Algoryx. Algoryx brings real-world physics to
                virtual engineering environments to realize an open engineering
                metaverse for innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="schedule">
      <div class="time-slot-row">
        <div class="time-slot-actual-time"><time>08:30</time></div>
        <div class="time-slot-content">
          <p>Inledning</p>
          <p class="schedule-name">Konferencier Ellen Jacobsson</p>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>08.45 - 09.30</time>
        </div>
        <div class="time-slot-content">
          <p>Keynote</p>
          <p class="bold">
            Digitalization Disrupts: How software, data and AI transform
            industry
          </p>
          <p class="schedule-name">Prof. Holmström Olsson</p>
        </div>
      </div>
      <div class="time-slot-row paus">
        <div class="time-slot-actual-time">
          <time>09.30 - 10.00</time>
        </div>
        <div class="time-slot-content">
          <p>Fika</p>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>10.00 - 10.40</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-1"
              >Migrera till .NET 6 Blazor med hjälp av Strangler Fig Pattern</a
            >
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-1"
              >The future of blockchain technology in gaming</a
            >
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-1">Trygghets&shy;skapande tester</a>
          </div>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>10.50 - 11.10</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-2">Mår man mindre Python efter en Java?</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-2">How we build our game using blockchain</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-2"
              >Design för färgblinda - en personlig reflexion</a
            >
          </div>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>11.20 - 11.40</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-3">The Future is Dark</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-3">Prediktion av vårdtid på IVA</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-3"
              >Ledarskap som ökar engage&shy;mang och prestation</a
            >
          </div>
        </div>
      </div>
      <div class="time-slot-row paus">
        <div class="time-slot-actual-time">
          <time>11.40 - 12.50</time>
        </div>
        <div class="time-slot-content">
          <p>Lunch</p>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>12.50 - 13:30</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-4">Jakarta EE 10 is Coming Your Way!</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-4">Space, the final frontier</a>
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-4">Norrsken i fyra dimen&shy;sioner</a>
          </div>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>13:40 - 14:00</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-5">
              Service blueprint - How user interactions affect front-end and
              back-end
            </a>
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-5"
              >Cyber&shy;säkerhet, varför vi behöver det</a
            >
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-5">Konfig&shy;uration för kreativitet</a>
          </div>
        </div>
      </div>
      <div class="time-slot-row paus">
        <div class="time-slot-actual-time">
          <time>14:00 - 14:30</time>
        </div>
        <div class="time-slot-content">
          <p>Fika</p>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>14:30 - 15:10</time>
        </div>
        <div class="time-slot-content with-tracks">
          <div class="schedule-track">
            <a href="#spar-1-pass-6"
              >Jetpack Compose - Nutiden är här för UI på Android</a
            >
          </div>
          <div class="schedule-track">
            <a href="#spar-2-pass-6"
              >Arkitektur i en snabbt växande organ&shy;isation</a
            >
          </div>
          <div class="schedule-track">
            <a href="#spar-3-pass-6"
              >Daglig automatisk upp&shy;gradering av Ladok</a
            >
          </div>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>15.20 - 16:05</time>
        </div>
        <div class="time-slot-content">
          <p>Keynote</p>
          <p class="bold">
            The Metaverse - will it revolutionize innovation and social
            relations - or bring down our democracies?
          </p>
          <p class="schedule-name">Kenneth Bodin, Algoryx</p>
        </div>
      </div>
      <div class="time-slot-row">
        <div class="time-slot-actual-time">
          <time>16:05 - 16.20</time>
        </div>
        <div class="time-slot-content">
          <p>Avslutning</p>
          <p class="schedule-name">
            Konferencier Ellen
          </p>
        </div>
      </div>
      <div class="time-slot-row paus">
        <div class="time-slot-actual-time">
          <time>17:45 -</time>
        </div>
        <div class="time-slot-content">
          <p class="bold">After conference 🎉</p>
          <p>Mat och dryck beställes och betalas på plats av enskild person.</p>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAdMZiLWk2jGro6yJbRPAkX3tfd9n2ZbS-PtUPQNFxmk-4RQ/viewform"
            rel="nooperner noreferrer"
            >Anmäl dig till After conference</a
          >
        </div>
      </div>
    </div>

    <!-- --------------------- -->
    <div class="tracks-container">
      <!-- TRACK 1 -->
      <div class="track">
        <h3 class="track-heading">Spår 1</h3>
        <div class="program-row">
          <span class="time" id="spar-1-pass-1">10.00 - 10.40</span>
          <h4>
            Migrera till .NET 6 Blazor med hjälp av Strangler Fig Pattern
          </h4>
          <span class="content">
            <p class="program-description">
              Introduktion till webbutveckling med .NET Blazor. Hur vi använde
              Strangler Fig Pattern för att börja använda den nya tekniken utan
              att först behöva skriva om hela applikationen på en gång.
            </p>
            <span class="track-speaker">
              Tommy Hörnlund, Trimma AB
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-1-pass-2">10.50 - 11.10</span>
          <h4>Mår man mindre Python efter en Java?</h4>
          <span class="content">
            <p class="program-description">
              Efter ca 15 år med i huvudsak Enterprise Java (och en del
              Javascript såklart) så var det spännande att bryta av helt till en
              miljö där större delen av kodbasen är i C++, och där jag i
              huvudsak spenderar min tid med Python. Jag funderar över en del av
              Pythons bra saker, över att Python nu är etta på TIOBE Index över
              världens mest populära språk. Och över att det finns ett par saker
              jag saknar från Java.
            </p>
            <span class="track-speaker">
              Jonas Andersson, Algoryx
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-1-pass-3">11.20 - 11.40</span>
          <h4>The Future is Dark</h4>
          <span class="content">
            <p class="program-description">
              Vad är ett programmeringsspråk? Varför kan inte våra verktyg
              skriva koden åt oss? Kan man skriva kod direkt i produktion, och
              vad händer om man gör det? Samt, kan man inte bara kompilera koden
              medan man skriver den och därmed aldrig behöva råka ut för ett
              kompileringsfel igen?
            </p>
            <p />
            <p>
              Beväpnade med en nyckel till en stängd beta tar vi oss en titt på
              programmeringsspråket Dark. Ett språk som utmanar gamla (och i
              vissa fall, förlegade) föreställningar om hur vi utvecklar
              mjukvara och som visar oss hur man återuppfinner
              mjukvaruutveckling på 2020-talet.
            </p>
            <span class="track-speaker">
              Linus Lagerhjelm, Omegapoint
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-1-pass-4">12.50 - 13:30</span>
          <h4>Jakarta EE 10 is Coming Your Way!</h4>
          <span class="content">
            <p class="program-description">
              Jakarta EE 9 lowered the barriers of entry and established a
              foundation for future innovation paving the way for Jakarta EE 10.
            </p>

            <p />
            With Jakarta EE 10, we introduced Jakarta EE Core Profile which
            targets smaller runtimes suitable for microservices. The Jakarta EE
            Core Profile also aims to be an even better fit for compiling to
            native images. But it does not stop there. Both Jakarta EE Web
            Profile and Jakarta EE Platform is moving forward as well with
            updates to almost all the individual specifications.
            <p />
            Join this session for the latest updates on the progress with
            Jakarta EE 10. I will go through what Jakarta EE 10 brings to the
            table, and what to expect when the specifications are moving
            forward. The session will also give you a clear understanding of how
            to migrate from previous versions of Jakarta EE and Java EE as well
            as show how to leverage Java SE 17 and newer features with Jakarta
            EE.
            <span class="track-speaker">
              Ivar Grimstad, Eclipse Foundation
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-1-pass-5">13:40 - 14:00</span>
          <h4>
            Service blueprint - How user interactions affect front-end and
            back-end
          </h4>
          <span class="content">
            <p class="program-description">
              Jag kommer att prata om hur vi på Sartorius använder oss av
              verktyget - Service Blueprint som annars används för
              tjänstedesign, och hur vi använder det för vår mjukvaruutveckling
              för att synka, kommunicera och diskutera olika idéers påverkan på
              systemet från front-end till back-end.
            </p>
            <span class="track-speaker">Paul Alvarado Mendoza, Sartorius</span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-1-pass-6">14:30 - 15:10</span>
          <h4>Jetpack Compose - Nutiden är här för UI på Android</h4>
          <span class="content">
            <p class="program-description">
              Vi har sett förändringen ske på webben, där vi gick från statiska
              hemsidor till de dynamiska webbplatser vi tar för givet idag. I
              takt med användarens växande behov och krav, utvecklades också de
              tekniker och ramverk som vi använder oss av idag.
            </p>
            Under den här presentationen kommer ni att få följa drivkrafterna
            bakom denna utvecklingen fram till dagens deklarativa ramverk som
            t.ex. React. Vi kommer sedan se hur samma kliv just nu tas inom
            utvecklingen av mobila appar, där markup i XML ersätts av nya
            deklarativa ramverk som Jetpack Compose, något som helt förändrar
            vårt sätt att bygga appar på Android. Nutiden är här!
            <span class="track-speaker">
              Michael Knutsson, Swedbank
            </span>
          </span>
        </div>
      </div>
      <!-- TRACK 2 -->
      <div class="track">
        <h3 class="track-heading">Spår 2</h3>
        <div class="program-row">
          <span class="time" id="spar-2-pass-1">10.00 - 10.40</span>
          <h4>The future of blockchain technology in gaming</h4>
          <span class="content">
            <p class="program-description">
              Möjligheter och utmaningar med att integrera blockchain med spel.
            </p>

            <p />
            <p>
              Hur vi har tacklat det i vårat spel och vilka lärdomar som finns.
            </p>
            <span class="track-speaker">
              Åke André, Crypto Rogue Games AB
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-2-pass-2">10.50 - 11.10</span>
          <h4>Utmaningar med att bygga ett multiplayer spel med ekonomi</h4>
          <span class="content">
            <p class="program-description">
              Crystal of Naramunz är ett free-2-play multiplayer action RPG med
              hållbar spelekonomi.
            </p>

            <p />
            <p>
              Vi kommer att prata om vilka problem vi ser framför oss? Vilka
              unika krav vi har? Och lite om hur det här projektet skiljer sig
              mot andra liknande spel?
            </p>
            <span class="track-speaker">
              Klaas Tojkander & Viktor Svensson, Crypto Rogue Games AB
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-2-pass-3">11.20 - 11.40</span>
          <h4>Prediktion av vårdtid på IVA</h4>
          <span class="content">
            <p class="program-description">
              Vi ha med hjälp av elektroniska journaler och maskininlärning
              skapat en modell som predikterar hur länge en patient kommer att
              ligga inne på NUS intensivvårdsavdelning. Detta för att underlätta
              resurssättning och logistikplanering kring sängplatser.
            </p>
            <span class="track-speaker">Petter Lindgren, Sogeti</span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-2-pass-4">12.50 - 13:30</span>
          <h4>Space, the final frontier</h4>
          <span class="content">
            <p class="program-description">
              Swedbank valde för ett antal år sedan att investera att ta fram en
              ny utvecklingsplatform baserat på micro-services, containers,
              CI/CD, autonoma teams, DevOps, m.m.
            </p>

            <p>
              Plattformen fick namnet Andromeda, efter våran närmaste galax, för
              att hänvisa till den långa resa som team behöver göra
              kompetensmässigt, processmässigt och kulturmässigt. Men för att
              överbrygga och göra denna resa snabbare och smidigare skapade ett
              platform team som drivs utifrån att leverera en smidigt produkt
              till sina kunder, dvs utvecklingsteamen. Att bygga en
              utvecklingsplatform som ska möta 100-tals utvecklingsteams
              förväntningar, driva kulturförändring gentemot moderna
              utvecklingsprinciper, säkerställa en stabil drift av de
              applikationer som byggs på plattformen, etc är en svår balansgång.
              Denna presentation lyfter de erfarenheter och vägval som har
              uppkommit under resan från att erbjuda en smidig ombordning för
              team, utveckling på plattformen samt drift från de team som bygger
              upp och erbjuder plattformen som tjänst.
            </p>
            <span class="track-speaker">
              Markus Backman, Swedbank
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-2-pass-5">13:40 - 14:00</span>
          <h4>Cybersäkerhet, varför vi behöver det.</h4>
          <span class="content">
            <p class="program-description">
              En grundläggande introduktion till cybersäkerhet och varför vi
              behöver det. Enkla begrepp och förklaringar kopplas till kända
              incidenter.
            </p>
            <span class="track-speaker">
              Mirjam Borén, Omegapoint
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-2-pass-6">14:30 - 15:10</span>
          <h4>Arkitektur i en snabbt växande organisation</h4>
          <span class="content">
            <p class="program-description">
              Vi tar en titt på hur mjukvaruarkitektur och en organisation som
              växer kan samverka för att på ett effektivt sätt kunna uppfylla
              det önskvärda syftet. I Sartorius fall handlar det om att skynda
              på time to market för nya produkter och med bibehållen kvalité
            </p>
            <span class="track-speaker">
              Mats Wikström, Sartorius
            </span>
          </span>
        </div>
      </div>
      <!-- TRACK 3 -->
      <div class="track">
        <h3 class="track-heading">Spår 3</h3>
        <div class="program-row">
          <span class="time" id="spar-3-pass-1">10.00 - 10.40</span>
          <h4>Trygghetsskapande tester</h4>
          <span class="content">
            <p class="program-description">
              I alla projekt har vi krav uppifrån på hög testtäckning. Men sover
              vi verkligen tryggare om natten när vi vet att vi har 90% av koden
              täckt av tester?
            </p>
            <p />
            Jag pratar i min presentation om hur jag tycker att vi ska jobba med
            våra automatiserade tester, vilka angreppssätt vi kan använda oss av
            och varför jag tycker att den här förändringen av våra testsätt är
            viktig.
            <span class="track-speaker">
              Adam Sernheim, Kvadrat
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-3-pass-2">10.50 - 11.10</span>
          <h4>Design för färgblinda - en personlig reflexion</h4>
          <span class="content">
            <p class="program-description">
              En personlig berättelse om hur det är att vara "färgblind" och hur
              det påverkar vad som kan bli svårt i ett gränssnitt.
            </p>
            <span class="track-speaker">
              Ellen Jacobsson, ITS
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-3-pass-3">11.20 - 11.40</span>
          <h4>Ledarskap som ökar engagemang och prestation</h4>
          <span class="content">
            <p class="program-description">
              En kort föreläsning om hur kontinuerliga samtal med sina
              medarbetare ökar engagemang och prestation.
            </p>
            <span class="track-speaker">
              Tommy Eriksson, Evity
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-3-pass-4">12.50 - 13:30</span>
          <h4>Norrsken i fyra dimensioner</h4>
          <span class="content">
            <p class="program-description">
              Genom att matematiskt analysera bilder på norrsken kan fysiker
              forska kring magnetfält, solaktivitet och atmosfärsfysik. Bättre
              om de kan beräkna en tredimensionell modell. Än bättre om den görs
              fyrdimensionell, genom att analysera förändring över tid. Vilka
              sorters utmaningar ställs man inför som utvecklare i ett sådant
              projekt? Vi börjar med en grundkurs i vad norrsken är, innan vi
              går in på datadriven utveckling. För när datamängderna räknas i
              terabyte börjar det bli viktigt med lågnivåoptimering och växling
              mellan programspråk. Hur testar man förresten matematiska formler?
            </p>
            <span class="track-speaker">
              Lars-Henrik Snow, IRF - Institutet för Rymdfysik
            </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-3-pass-5">13:40 - 14:00</span>
          <h4>Konfiguration för kreativitet</h4>
          <span class="content">
            <p class="program-description">
              Hur något så torrt som konfiguration kan avgöra den kreativa
              höjden. Hur man hittar en balans för användbarhet, enkelhet och
              flexibilitet för att skapa kreativitet för rätt person. I allt
              från spelutveckling till bokföring.
            </p>
            <span class="track-speaker">Anders Gunnarsson, Coeo </span>
          </span>
        </div>
        <div class="program-row">
          <span class="time" id="spar-3-pass-6">14:30 - 15:10</span>
          <h4>Daglig automatiserad uppgradering av Ladok</h4>
          <span class="content">
            <p class="program-description">
              Vi gör en djupdykning i de system som automatiskt rullar ut
              förbättringar till produktion i Ladok. Utvecklingsteamen tar
              själva beslut om när rättningar och förbättringar ska levereras
              och gör ändringen i GIT. Förändringarna testas i en automatisk
              pipeline i Jenkins och driftmiljöerna uppgraderas morgonen efter
              med hjälp av Ansible. Detta sker sömlöst utan att påverka
              användare. Vi kommer att prata om hur detta är implementerat från
              början till slut.
            </p>
            <span class="track-speaker">
              Fredrik Domeij, ITS
            </span>
          </span>
        </div>
      </div>
    </div>
    <div class="previous-program">
      <div class="previous-program-inner">
        <h2 class="previous-program-heading">Tidigare års program</h2>
        <v-expansion-panels>
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
                    <h3>
                      Keynote - Designkompetenser i en föränderlig värld
                    </h3>
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
                        <span class="speaker">
                          Lovisa Johansson, 84Codes
                        </span>
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
              <img class="program-img" src="../assets/Tidigare-schema.png" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="program-end"></div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderWithPepper from "@/components/HeaderWithPepper.vue";

export default {
  name: "Program",
  components: {
    HeaderWithPepper,
  },
};
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
  margin: 15px 0;
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
}

.about-keynote {
  display: block;
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
  font-family: "Quicksand", sans-serif;
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
  font-size: 2.25rem;
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

.previous-program-inner {
  max-width: 1024px;
  margin: 0 auto;
}

.previous-program-heading {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
h3.previous-program-heading {
  font-size: 1.5rem;
  border-bottom: 2px solid #56ab2f;
  margin-top: 1rem;
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
</style>
