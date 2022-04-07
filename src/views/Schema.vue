<template>
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
          Digitalization Disrupts: How software, data and AI transform industry
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
          <a href="#spar-2-pass-5">Cyber&shy;säkerhet, varför vi behöver det</a>
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
          The Metaverse - will it revolutionize innovation and social relations
          - or bring down our democracies?
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
  </div>
</template>
<script>
export default {
  name: "Schema",
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
</style>
