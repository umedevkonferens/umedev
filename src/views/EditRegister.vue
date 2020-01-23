<template>
  <div class="content">
    <br />
    <h1>Anmälan: {{ $route.params.id }}</h1>
    <br />
    <div v-if="showRegister">
      <v-card class="mx-auto">
        <v-container>
          <p><span class="bold">Namn: </span> {{ anmalan.name }}</p>
          <p><span class="bold">Email adress: </span> {{ anmalan.email }}</p>
          <p><span class="bold">Företag: </span> {{ anmalan.company }}</p>
          <p>
            <span class="bold">Övrigt (specialkost): </span> {{ anmalan.other }}
          </p>
          <v-btn color="#C72A11" @click="deleteRegister">
            Avboka din plats
          </v-btn>
        </v-container>
      </v-card>
      <br />

      <p>
        Vill du ändra något i din anmälan var vänlig maila oss
        <a href="mailto:info@umedev.org!">info@umedev.org</a>
      </p>
    </div>

    <div v-if="deletedRegisterSuccess">
      <v-card class="mx-auto">
        <v-container>
          <p>
            Din plats på Umedev 2020 är nu avbokad. Vi hoppas se dig ett annat
            år.
          </p>
          <p>/ Umedev</p>
        </v-container>
      </v-card>
    </div>

    <div v-if="noRegisterWithId">
      <v-card class="mx-auto">
        <v-container>
          <p>
            Anmälan med id
            <span class="bold">{{ $route.params.id }}</span> finns inte.
          </p>
          <p>
            Har du frågor var vänlig maila oss
            <a href="mailto:info@umedev.org!">info@umedev.org</a>
          </p>
          <p>/ Umedev</p>
        </v-container>
      </v-card>
    </div>

    <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="0">
      {{ this.snackbarText }}
      <v-btn color="#56ab2f" @click="snackbar = false">
        Stäng
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { db } from '../db';

export default Vue.extend({
  name: 'EditRegister',
  created() {
    this.fetchData();
  },
  data: () => ({
    deletedRegisterSuccess: false,
    noRegisterWithId: false,
    showRegister: false,
    multiLine: true,
    snackbar: false,
    snackbarText: '',
    anmalan: {},
  }),
  methods: {
    deleteRegister() {
      const badConnection = this.checkInternetConnection();
      if (badConnection) {
        return;
      }

      const confirmDelete = window.confirm(
        'Är du säker på att du att du vill avboka din plats? ',
      );

      if (confirmDelete) {
        const that = this;
        db.ref('register/' + this.$route.params.id)
          .remove()
          .then(() => {
            that.deletedRegisterSuccess = true;
            that.showRegister = false;
          })
          .catch(error => {
            that.snackbarText =
              'Något gick fel. Var vänlig försök igen senare.';
            that.snackbar = true;
          });
      }
    },
    checkInternetConnection() {
      if (!navigator.onLine) {
        this.snackbarText =
          'Du verkar sakna internetuppkoppling. Anslut till internet och prova igen. ';
        this.snackbar = true;
        return true;
      }
    },
    fetchData() {
      const badConnection = this.checkInternetConnection();
      if (badConnection) {
        return;
      }
      const that = this;
      const registerDb = db.ref('register/' + this.$route.params.id);
      registerDb.once('value').then(
        snapshot => {
          if (snapshot.val() !== null) {
            that.anmalan = snapshot.val();
            that.showRegister = true;
          } else {
            that.noRegisterWithId = true;
          }
        },
        error => {
          that.snackbarText = 'Något gick fel. Var vänlig försök igen senare.';
          that.snackbar = true;
        },
      );
    },
  },
});
</script>
<style scoped>
.content {
  min-height: 80vh;
}
button {
  margin: 30px 0px;
}
</style>
