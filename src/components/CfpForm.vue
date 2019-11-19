<template>
  <v-card class="mx-auto" max-width="480">
    <v-container>
      <v-row align="center">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="title" label="Title" required></v-text-field>
            <v-textarea v-model="description" label="Desciption" required></v-textarea>

            <v-text-field v-model="name" :counter="30" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    valid: true,
    snackbar: false,
    name: "",
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) =>
        (v && v.length <= 30) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    title: '',
    description: '',
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
    validate() {
      console.log('Validate form');
      if (this.form.validate()) {
        this.snackbar = true;
        console.log('Submit form');
      }
      console.log('In valid form');
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
