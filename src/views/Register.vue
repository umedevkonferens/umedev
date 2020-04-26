<template>
  <div>
    <HeaderWithPepper header="Anmälan" />
    <br />
    <div class="content">
      <!-- <p class="bold">Anmälan</p> -->
      <!-- <p>
        Här görs anmälan till konferensen i Humanisthuset på Umeå Universitet.
        Om du får förhinder var snäll och avanmäl dig så att din plats kan gå
        till någon annan som vill delta.
      </p> -->
      <!-- <p class="bold">Anmälan livesänd konferens</p>
      <p>
        I år kan du anmäla dig till konferensen och se den live via länk om du
        inte har möjlighet att vara på plats. Anmälan sker i samma formulär,
        klicka i "Jag deltar på distans" så skickas det ut en länk samma morgon
        som konferens startar.
      </p> -->
      <!-- <p>Välkomna!</p> -->
      <br />
      <RegisterForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../db';
import HeaderWithPepper from '@/components/HeaderWithPepper.vue';
import RegisterForm from '@/components/RegisterForm.vue';

const proposalsDb = db.ref('register');
const registerDefault = {
  name: '',
  company: '',
  email: '',
  other: '',
};
export default Vue.extend({
  name: 'Register',
  components: {
    HeaderWithPepper,
    RegisterForm,
  },
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
          proposalsDb.push(this.register, onComplete);
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
    resetValidation() {
      //    this.$refs.form.resetValidation();
    },
  },
});
</script>
