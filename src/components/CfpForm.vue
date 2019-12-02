<template>
  <v-card class="mx-auto" max-width="480">
    <v-container>
      <v-row align="center">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="proposal.title" :counter="100" :rules="titleRules" label="Title" required></v-text-field>
            <v-textarea v-model="proposal.description" :counter="1000" :rules="descriptionRules" label="Desciption" required></v-textarea>
            <v-text-field v-model="proposal.name" :counter="30" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="proposal.email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../db';
const proposalsDb = db.ref('proposals');

export default Vue.extend({
  data: () => ({
    valid: true,
    snackbar: false,
    proposal: {
      name: '',
      title: '',
      email: '',
      description: '',
      approved: false
    },
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 30) || 'Name must be less than 30 characters'
    ],
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    titleRules: [
      (v: string) => !!v || 'Field is required',
      (v: string) => (v && v.length <= 100) || 'Field must be less than 100 characters'
    ],
    descriptionRules: [
      (v: string) => !!v || 'Description is required',
      (v: string) =>
        (v && v.length <= 1000) ||
        'Description must be less than 1000 characters'
    ]
  }),
  computed: {
    form(): Vue & { validate: () => boolean; reset: () => boolean } {
      return this.$refs.form as Vue & {
        validate: () => boolean;
        reset: () => boolean;
      };
    }
  }, // Use it like so: this.form.validate()
  methods: {
    submit() {
      if (this.form.validate()) {
        this.snackbar = true;
        proposalsDb.push(this.proposal);
        this.reset();
      }
    },
    reset() {
      this.form.reset();
    },
    resetValidation() {
      //    this.$refs.form.resetValidation();
    }
  }
});
</script>
