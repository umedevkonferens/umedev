<template>
  <div>
    <v-card class="mx-auto" max-width="800">
      <v-container>
        <v-row>
          <v-col>
            <v-form ref="registerForm" v-model="valid" lazy-validation>
              <fieldset>
                <legend class="bold">
                  Anmälan till Umedev sessions 27 maj 2020
                  <br />
                  Tid: kl 11.30 - 13.00
                </legend>

                <v-text-field
                  v-model="register.name"
                  :rules="nameRules"
                  label="Namn *"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="register.email"
                  :rules="emailRules"
                  label="Email adress *"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="register.company"
                  :rules="companyRules"
                  label="Företag *"
                  required
                ></v-text-field>
                <!-- 
                <v-checkbox
                  class="mx-2"
                  v-model="register.remote"
                  label="Jag deltar på distans"
                ></v-checkbox>

                <v-text-field
                  v-if="!register.remote"
                  v-model="register.other"
                  label="Specialkost"
                ></v-text-field>

                <v-text-field
                  v-if="register.remote"
                  v-model="register.remoteCity"
                  label="Vart deltar du ifrån?"
                ></v-text-field> -->
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

const registerDb = db.ref('register-online');
const registerDefault = {
  name: '',
  company: '',
  email: '',
  other: '',
  remote: false,
  remoteCity: '',
};
export default Vue.extend({
  name: 'RegisterForm',
  data: () => ({
    valid: true,
    multiLine: true,
    snackbar: false,
    snackbarText: '',
    register: JSON.parse(JSON.stringify(registerDefault)),
    nameRules: [(v: string) => !!v || 'Namn är obligatoriskt'],
    emailRules: [
      (v: string) => !!v || 'Email adress är obligatoriskt',
      (v: string) => /.+@.+\..+/.test(v) || 'Email måste vara i rätt format',
    ],
    companyRules: [(v: string) => !!v || 'Företag är obligatoriskt'],
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
