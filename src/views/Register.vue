<template>
  <div>
    <HeaderWithPepper header="Anmälan" />
    <br />
    <div class="content">
      <p>Anmäl dig till Umedev - 30 mars 2023</p>
      <p>
        Kom och utbyt erfarenheter, nätverka och utveckla ditt kunnande. Umedev
        är en endagskonferens för den norrländska IT-branschen. Det bjuds på
        förmiddagsfika, lunch, eftermiddagsfika och är kostnadsfri för alla våra
        deltagare.
      </p>
      <p>Välkomna!</p>
      <a
        href="https://forms.gle/Rx6d1USBoQkWH8B87"
        rel="noopener noreferrer"
        target="_blank"
        >Anmäl dig direkt via Google Forms</a
      >
      <p>Sista anmälningsdag onsdag 22/3 kl. 12.00</p>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { db } from '../db'
import HeaderWithPepper from '@/components/HeaderWithPepper.vue'
import RegisterForm from '@/components/RegisterForm.vue'

const proposalsDb = db.ref('register')
const registerDefault = {
  name: '',
  company: '',
  email: '',
  other: '',
}
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
        validate: () => boolean
        reset: () => boolean
      }
    },
  },
  methods: {
    submit() {
      if (!navigator.onLine) {
        this.snackbarText =
          'Du verkar sakna internetuppkoppling. Anslut till internet och prova igen. '
        this.snackbar = true
        return
      }

      const that = this

      const onComplete = (error: any) => {
        if (error) {
          that.snackbarText = 'Något gick fel. Var vänlig försök igen senare.'
        } else {
          that.reset()
          that.snackbarText = 'Tack för din anmälan!'
        }
        that.snackbar = true
      }

      if (this.form.validate()) {
        try {
          proposalsDb.push(this.register, onComplete)
        } catch (e) {
          this.snackbarText = 'Oväntat fel. Var vänlig försök igen senare.'
          this.snackbar = true
        }
      }
    },
    reset() {
      this.form.reset()
      this.register = JSON.parse(JSON.stringify(registerDefault))
    },
    resetValidation() {
      //    this.$refs.form.resetValidation();
    },
  },
})
</script>
