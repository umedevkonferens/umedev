<template>
  <v-app>
    <v-app-bar class="umedev-header">
      <v-toolbar-title class="text-uppercase">
        <a class="home-link" href="/">
          <span class="quicksand bold">UME</span>
          <span class="quicksand font-weight-light">DEV</span>
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <button class="toggle-menu-btn" v-on:click="toggleMenu">
        <v-icon class="mdi" color="black" large>mdi-menu</v-icon>
      </button>
      <ul v-if="largeScreen || showMenu">
        <li v-for="item in menu" v-bind:key="item.link">
          <v-btn text :to="item.link">{{ item.title }}</v-btn>
        </li>
      </ul>
    </v-app-bar>

    <v-content>
      <div v-on:click="clickListener" class="main-wrapper">
        <router-view></router-view>
      </div>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CfpForm from "./components/CfpForm.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    CfpForm,
    Footer,
  },
  watch: {
    $route(to: any, from: any) {
      this.showMenu = false;
    },
  },
  methods: {
    toggleMenu(event: any) {
      this.showMenu = !this.showMenu;
    },
    clickListener(event: any) {
      this.showMenu = false;
    },
    getWindowWidth() {
      this.largeScreen = window.innerWidth > 700;
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  data: () => ({
    showMenu: false,
    largeScreen: window.innerWidth > 700,
    menu: [
      {
        link: "/",
        title: "Hem",
      },
      // {
      //   link: "/anmalan",
      //   title: "Anmälan",
      // },
      {
        link: "/program",
        title: "Program",
      },
      {
        link: "/kidz",
        title: "Kidz",
      },
      // {
      //   link: "/cfp",
      //   title: "Cfp",
      // },
      {
        link: "/sponsra",
        title: "Sponsra!",
      },
      {
        link: "/about",
        title: "Om Umedev",
      },
    ],
  }),
});
</script>
<style scoped>
.umedev-header {
  background-color: #56ab2f;
  z-index: 5;
  display: block;
  width: 100%;
}
.quicksand {
  font-family: "Quicksand", sans-serif;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
}

.toggle-menu-btn {
  display: none;
  margin-right: 5px;
}

@media screen and (max-width: 700px) {
  .toggle-menu-btn {
    display: block;
  }
  .v-application ul {
    position: absolute;
    right: 0;
    top: 56px;
    flex-direction: column;
    background-color: #56ab2f;
    margin: 0;
    padding: 0;
  }
  ul {
    width: 100%;
  }
  li {
    padding: 5px 10px;
    border-bottom: 2px solid white;
  }
  li a {
    width: 100%;
  }
  li:first-of-type {
    border-top: 2px solid white;
  }
}
</style>
<style>
html {
  scroll-behavior: smooth;
}
body {
  overflow: hidden;
}
.content {
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  padding: 1rem 1.5rem;
  margin: 0 auto;
}
@media screen and (max-width: 600px) {
  .content {
    padding: 0 1rem;
  }
}
h1,
h2 {
  font-weight: normal;
}
h1 {
  margin-bottom: 10px;
  margin-top: 10px;
}
h2 {
  margin-bottom: 5px;
}
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
p {
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
}
a,
.v-application a {
  padding: 4px;
  color: #224412 !important;
}
a:hover {
  background-color: rgba(86, 171, 47, 0.2);
}
a:focus {
  outline: 2px solid #224412;
}
.home-link {
  color: black;
  text-decoration: none;
}
</style>
