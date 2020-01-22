<template>
  <div class="content">
    <br />
    <h1>Ändra eller ta bort anmälan</h1>
    <p>
      {{ $route.params.id }}
    </p>
    <br />
    <RegisterForm />
    <br />
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
  name: 'EditRegister',
  components: {
    HeaderWithPepper,
    RegisterForm,
  },
  data: () => ({
    editRegistry: false,
  }),

  methods: {
    submit() {},
    deleteRegister() {},
  },
});
</script>
