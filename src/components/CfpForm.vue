<template>
  <v-card class="mx-auto" max-width="800">
    <v-container>
      <v-row align="start">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <fieldset>
              <legend class="bold">Information om bidraget</legend>
              <v-text-field
                v-model="proposal.title"
                :counter="100"
                :rules="titleRules"
                label="Titel på bidrag *"
                required
              ></v-text-field>

              <v-textarea
                v-model="proposal.description"
                :counter="1000"
                :rules="descriptionRules"
                label="Beskrivning av bidrag *"
                required
              ></v-textarea>

              <fieldset>
                <legend>Typ av pass *</legend>
                <v-radio-group
                  v-model="proposal.typeOfTalk"
                  :rules="typeOfTalkRules"
                  required
                >
                  <v-radio label="45 min" value="45"></v-radio>
                  <v-radio label="15 min" value="15"></v-radio>
                </v-radio-group>
              </fieldset>

              <v-text-field
                v-model="proposal.target"
                label="Målgrupp (vem eller vilka tror du uppskattar ditt pass mest?)"
              ></v-text-field>

              <fieldset>
                <legend>Utrustning</legend>
                <v-row justify="space-around">
                  <v-checkbox
                    class="mx-2"
                    v-model="proposal.equipment.internet"
                    label="Internet"
                  ></v-checkbox>
                  <v-checkbox
                    class="mx-2"
                    v-model="proposal.equipment.projector"
                    label="Projektor"
                  ></v-checkbox>
                  <v-checkbox
                    class="mx-2"
                    v-model="proposal.equipment.whiteboard"
                    label="Whiteboard"
                  ></v-checkbox>
                  <v-checkbox
                    class="mx-2"
                    v-model="proposal.equipment.flipboard"
                    label="Blädderblock"
                  ></v-checkbox>
                </v-row>
              </fieldset>
            </fieldset>

            <fieldset>
              <legend class="bold">Information om talaren</legend>
              <v-text-field
                v-model="proposal.name"
                :counter="30"
                :rules="nameRules"
                label="Talarens namn *"
                required
              ></v-text-field>
              <v-text-field
                v-model="proposal.descriptionOfSpeaker"
                :rules="descriptionOfSpeakerRules"
                label="Beskrivning av dig *"
                required
              ></v-text-field>
              <v-text-field
                v-model="proposal.email"
                :rules="emailRules"
                label="Email adress *"
                required
              ></v-text-field>
              <v-text-field
                v-model="proposal.otherInfo"
                label="Övrig information"
              ></v-text-field>
            </fieldset>
            <br />

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submit"
              >Skicka</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
      <br />
    </v-container>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="0">
      {{ this.snackbarText }}
      <v-btn color="#56ab2f" @click="snackbar = false">
        Stäng
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../db';
const proposalsDb = db.ref('proposals');
const proposalDefaults = {
  name: '',
  descriptionOfSpeaker: '',
  title: '',
  email: '',
  target: '',
  description: '',
  typeOfTalk: '',
  otherInfo: '',
  equipment: {
    internet: false,
    projector: false,
    whiteboard: false,
    flipboard: false,
  },
  approved: false,
};
export default Vue.extend({
  data: () => ({
    valid: true,
    multiLine: true,
    snackbar: false,
    snackbarText: '',
    proposal: JSON.parse(JSON.stringify(proposalDefaults)),
    nameRules: [
      (v: string) => !!v || 'Namn är obligatoriskt',
      (v: string) =>
        (v && v.length <= 30) || 'Namn måste vara mindre än 30 bokstäver',
    ],
    emailRules: [
      (v: string) => !!v || 'Email adress är obligatoriskt',
      (v: string) => /.+@.+\..+/.test(v) || 'Email måste vara i rätt format',
    ],
    titleRules: [
      (v: string) => !!v || 'Titel är obligatoriskt',
      (v: string) =>
        (v && v.length <= 100) || 'Titeln måste vara mindre än 100 bokstäver',
    ],
    descriptionRules: [
      (v: string) => !!v || 'Beskrivning är obligatoriskt',
      (v: string) =>
        (v && v.length <= 1000) ||
        'Beskrivningen måste vara mindre än 1000 bokstäver',
    ],
    typeOfTalkRules: [(v: string) => !!v || 'Typ av pass är obligatoriskt'],
    descriptionOfSpeakerRules: [
      (v: string) => !!v || 'Beskrivning av dig är obligatoriskt',
      (v: string) =>
        (v && v.length <= 1000) ||
        'Beskrivningen måste vara mindre än 1000 bokstäver',
    ],
  }),
  computed: {
    form(): Vue & { validate: () => boolean; reset: () => boolean } {
      return this.$refs.form as Vue & {
        validate: () => boolean;
        reset: () => boolean;
      };
    },
  }, // Use it like so: this.form.validate()
  methods: {
    submit() {
      if (!navigator.onLine) {
        this.snackbarText =
          'Du verkar sakna intenetuppkoppling. Anslut till internet och prova igen. ';
        this.snackbar = true;
        return;
      }

      const that = this;

      const onComplete = (error: any) => {
        if (error) {
          that.snackbarText = 'Något gick fel. Var vänlig försök igen senare.';
        } else {
          that.reset();
          that.snackbarText = 'Tack för ditt bidrag!';
        }
        that.snackbar = true;
      };

      if (this.form.validate()) {
        try {
          proposalsDb.push(this.proposal, onComplete);
        } catch (e) {
          this.snackbarText = 'Oväntat fel. Var vänlig försök igen senare.';
          this.snackbar = true;
        }
      }
    },
    reset() {
      this.form.reset();
      this.proposal = JSON.parse(JSON.stringify(proposalDefaults));
    },
    resetValidation() {
      //    this.$refs.form.resetValidation();
    },
  },
});
</script>
<style>
fieldset {
  border: 0 none;
}
legend {
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.6) !important;
}
</style>
