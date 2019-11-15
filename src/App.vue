<template>
  <v-app>
    <v-app-bar app dark fixed elevate-on-scroll id="top-navbar">
      <a href="#top" v-smooth-scroll="{offset:-56}">
        <v-img src="./assets/jd-nav.png" alt="JD" id="nav-logo" class="nav-logo--hidden"></v-img>
      </a>
      <v-btn
        text
        href="#portfolio"
        v-smooth-scroll="{offset:-56}"
      >
        <v-icon class="nav-icon" id="portfolio-icon">mdi-briefcase</v-icon>
        <span class="nav-text" id="portfolio-link">Portfolio</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="#contact"
        v-smooth-scroll="{offset:-56}"
      >
        <span class="nav-text" id="contact-link">Contact</span>
        <v-icon class="nav-icon" id="contact-icon">mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Top Fold -->
    <TopFold />
    <!-- Portfolio -->
    <Portfolio />
    <!-- Badges -->
    <Badges />
    <!-- Contact -->
    <Contact />
    <v-footer color="primary" dark>
      <v-layout row wrap class="full-width">
        <v-flex xs8 class="text-left">
          <span class="font-weight-black pl-5">&copy; {{ new Date().getFullYear() }}, JD Dudley</span>
        </v-flex>
        <v-flex xs4 class="text-right">
          <span>Boise, ID</span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<style lang="sass">
  @import "./main.sass"
</style>

<script>
import TopFold from "./components/TopFold";
import Portfolio from "./components/Portfolio";
import Badges from "./components/Badges";
import Contact from "./components/Contact";

export default {
  name: "App",
  components: {
    TopFold,
    Portfolio,
    Badges,
    Contact
  },
  data: () => ({
    //
  }),
  methods: {
    handleScroll() {
      let header = document.querySelector(".v-toolbar");
      let logo = document.querySelector("#nav-logo");
      let portfolioLink = document.querySelector("#portfolio-link");
      let contactLink = document.querySelector("#contact-link");
      let cutoff = 200

      // toolbar background
      if (
        window.scrollY > cutoff &&
        !header.className.includes("v-toolbar--scroll")
      ) {
        header.classList.add("v-toolbar--scroll");
      } else if (window.scrollY < cutoff) {
        header.classList.remove("v-toolbar--scroll");
      }
      // nav logo
      if (window.scrollY > cutoff && logo.className.includes("nav-logo--hidden")) {
        logo.classList.remove("nav-logo--hidden");
      } else if (window.scrollY < cutoff) {
        logo.classList.add("nav-logo--hidden");
      }
      // hide nav text
      if (window.scrollY < cutoff && portfolioLink.className.includes("nav-text--hidden")) {
        portfolioLink.classList.remove("nav-text--hidden");
      } else if (window.scrollY > cutoff) {
        portfolioLink.classList.add("nav-text--hidden");
      }
      if (window.scrollY < cutoff && contactLink.className.includes("nav-text--hidden")) {
        contactLink.classList.remove("nav-text--hidden");
      } else if (window.scrollY > cutoff) {
        contactLink.classList.add("nav-text--hidden");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.handleScroll();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>