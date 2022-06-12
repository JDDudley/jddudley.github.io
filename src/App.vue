<template>
  <v-app>
    <v-navigation-drawer app color="primary" dark v-model="navDrawer" right temporary class="text-center">
      <v-list-item v-for="item in menuSet" :key="item.name" :href="item.href" :target="item.target">
        <v-list-item-content>
          <v-list-item-title class="text--white">
            <v-icon>{{ item.icon }}</v-icon> {{ item.name }}
          </v-list-item-title>
          <!-- <v-list-item-subtitle>
            {{ item.description }}
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

    </v-navigation-drawer>
    <v-app-bar app color="secondary" dark>

      <vue-typed-js :strings="['J.D. Dudley']" :showCursor="false">
        <h1 class="typing app-bar-title"></h1>
      </vue-typed-js>

      <v-spacer></v-spacer>

      <!-- App bar navigation buttons from menuSet array -->
      <v-btn v-for="item in menuSet" :key="item.name" :href="item.href" :target="item.target" text
        class="hidden-md-and-down">
        <span class="mr-2">{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

      <!-- Menu Control -->
      <v-btn text @click="navDrawer = !navDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main-body">
      <HomePage />
    </v-main>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.app-bar-title {
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 0em;
  text-shadow: 2px 2px black;
}

.main-body {
  background-image: url("./assets/bg.svg");
  background-size: cover;
  background-position: fixed;
}
</style>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    navDrawer: false, // null to default to closed on mobile, open on desktop
    menuSet: [
      {
        name: "Portfolio",
        href: "#!/portfolio",
        icon: "mdi-web",
        target: "_self"
      },
      {
        name: "Skills",
        href: "#!/skills",
        icon: "mdi-briefcase",
        target: "_self"
      },
      {
        name: "Results",
        href: "#!/results",
        icon: "mdi-chart-areaspline",
        target: "_self"
      },
      {
        name: "GitHub",
        href: "https://github.com/JDDudley",
        icon: "mdi-github",
        target: "_blank"
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jddudley",
        icon: "mdi-linkedin",
        target: "_blank"
      }
    ]
  }),
};
</script>
