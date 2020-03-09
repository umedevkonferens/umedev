<template>
  <div>
    <HeaderWithPepper header="Anmälan" />
    <br />
    <div class="content">
      <p class="bold">Nytt för i år; följ konferensen via livesändning</p>
      <p>
        Tack vare Umedevs samarbetspartners så erbjuder vi i år möjligheten att
        delta på distans. Du kan då följa eventet via våra livesändningar.
        <br />Länk till video-feeden kommer mailas till dig i samband med
        eventstart.
      </p>
      <p class="bold">
        Här nedan anmäler du dig som deltagare/distans-deltagare
      </p>
      <p>
        Om du får förhinder var snäll och avanmäl dig så att din plats kan gå
        till någon annan som vill delta.
      </p>
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
