<template>
  <div>
    <v-card class="mx-auto" max-width="800">
      <v-container>
        <v-row>
          <v-col>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
              <fieldset>
                <legend class="bold">
                  Anmälan Kidz 2020
                </legend>

                <v-text-field
                  v-model="register.name"
                  :rules="nameRules"
                  label="Namn på barnet *"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="register.age"
                  label="Ålder på barnet *"
                  :rules="ageRules"
                  required
                ></v-text-field>

                <v-select
                  v-model="register.selectedWorkshop1"
                  :items="workshops"
                  :rules="workshopRules"
                  label="Välj Workshop - förstahandsval *"
                ></v-select>

                <v-select
                  v-model="register.selectedWorkshop2"
                  :items="workshops"
                  label="Välj Workshop - andrahandsval"
                  :rules="[checkWorkshop]"
                ></v-select>

                <v-text-field
                  v-model="register.parentName"
                  label="Namnet på förälder *"
                  :rules="nameRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="register.parentEmail"
                  :rules="emailRules"
                  label="Email adress till förälder *"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="register.parentPhone"
                  label="Telefonnummer till förälder"
                ></v-text-field>

                <v-text-field
                  v-model="register.other"
                  label="Övrigt"
                ></v-text-field>
              </fieldset>
              <br />

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
      </v-container>
    </v-card>
    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="0">
      {{ this.snackbarText }}
      <v-btn color="#56ab2f" @click="snackbar = false">
        Stäng
      </v-btn>
    </v-snackbar>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../db';

const registerDb = db.ref('kidz');
const registerDefault = {
  name: '',
  age: '',
  selectedWorkshop1: '',
  selectedWorkshop2: '',
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  other: '',
};
export default Vue.extend({
  name: 'RegisterKidz',
  data: () => ({
    valid: true,
    multiLine: true,
    snackbar: false,
    snackbarText: '',
    workshops: [
      'Scratch',
      'Micro:bit',
      'Designworkshop',
      'CodeCombat',
      'Kodstuga med Kattis',
    ],
    register: JSON.parse(JSON.stringify(registerDefault)),
    nameRules: [(v: string) => !!v || 'Namn är obligatoriskt'],
    ageRules: [
      (v: string) => !!v || 'Ålder är obligatoriskt',
      (v: string) =>
        (v && parseInt(v) >= 10 && parseInt(v) < 16) ||
        'Ålder måste vara mellab 10 och 15',
    ],
    emailRules: [
      (v: string) => !!v || 'Email adress är obligatoriskt',
      (v: string) => /.+@.+\..+/.test(v) || 'Email måste vara i rätt format',
    ],
    workshopRules: [(v: string) => !!v || 'Val av workshop är obligatoriskt'],
  }),
  computed: {
    form(): Vue & { validate: () => boolean; reset: () => boolean } {
      return this.$refs.registerForm as Vue & {
        validate: () => boolean;
        reset: () => boolean;
      };
    },
  },
  methods: {
    checkWorkshop() {
      if (this.register.selectedWorkshop1 === this.register.selectedWorkshop2) {
        return 'Förstahandsval och andrahandsval kan inte vara samma';
      }
      return true;
    },

    submit() {
      if (!navigator.onLine) {
        this.snackbarText =
          'Du verkar sakna internetuppkoppling. Anslut till internet och prova igen. ';
        this.snackbar = true;
        return;
      }

      const that = this;

      const onComplete = (error: any) => {
        if (error) {
          that.snackbarText = 'Något gick fel. Var vänlig försök igen senare.';
        } else {
          that.reset();
          that.snackbarText = 'Tack för din anmälan!';
        }
        that.snackbar = true;
      };

      if (this.form.validate()) {
        try {
          registerDb.push(this.register, onComplete);
        } catch (e) {
          this.snackbarText = 'Oväntat fel. Var vänlig försök igen senare.';
          this.snackbar = true;
        }
      }
    },
    reset() {
      this.form.reset();
      this.register = JSON.parse(JSON.stringify(registerDefault));
    },
  },
});
</script>
