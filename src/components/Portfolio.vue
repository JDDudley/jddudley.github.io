<template>
  <v-container fluid class="secondary--text" id="portfolio">
    <h2 class="text-uppercase font-weight-bold text-center ma-3">Portfolio</h2>
    <v-row wrap>
      <v-col class="col-sm-6 col-md-4 col-lg-3 px-0" v-for="site in sites" :key="site.key">
        <v-hover>
          <v-card
            tile
            class="full-width box-shadow portfolio-card"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            :click="'showMore(' + site.key + ')'">
            <v-img :src="require('@/assets/work/' + site.key + '.jpg')">
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-in-fast-out white v-card--reveal black--text">
                  <span style="opacity: 1.0 !important;">
                    <!-- <h3 class="pa-2">{{ site.name }}</h3> -->
                    <hr>
                    <div class="text-center">
                      <!-- tech stack -->
                      <v-layout>
                        <v-row align-center no-gutters>
                          <v-col v-for="tech in site.stack" :key="tech.icon" class="font-weight-bold">
                            <v-icon class="accent--text">{{ 'mdi-' + tech.icon }}</v-icon><br>
                            {{ tech.text }}
                          </v-col>
                        </v-row>
                      </v-layout>
                      <span v-for="tech in site.stack" :key="tech.icon" class="font-weight-bold">
                      </span>
                    </div>
                    <hr>
                    <div class="text-left pa-2 body-2">
                      {{ site.description }}
                    </div>
                    <div class="text-right pa-2">
                      <v-btn dark tile v-if="site.github" :href="site.github" class="pr-2" color="accent" target="_blank">GitHub</v-btn>
                      <v-btn dark tile v-if="site.url" :href="site.url" color="primary" target="_blank">Visit</v-btn>
                    </div>
                  </span>
                </div>
              </v-expand-transition>
              <div class="site-title text-uppercase white--text"><h3 style="opacity: 1.0 !important;">{{ site.name }}</h3></div>
            </v-img>
          </v-card>
        </v-hover>
        <!-- <v-card class="mx-auto" color="secondary">
          <v-img class="white--text" height="240px" :src="require('../assets/work/' + site.key + '.jpg')">
          <v-card-title>{{ site.name }}</v-card-title>
          </v-img>
          <v-card-text class="fill-height">{{ site.description }}</v-card-text>
          <v-card-actions>
            <v-btn text color="primary">GitHub</v-btn>
            <v-btn text color="primary" :href="site.url" target="_blank">Visit</v-btn>
          </v-card-actions>
        </v-card>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="sass">
    .full-height .flex
        display: flex

    .full-height .flex > .card
        flex: 1 1 auto
</style>

<script>
let tech = {
  javascript: {
    icon: 'language-javascript',
    text: 'Javascript'
  },
  vuejs: {
    icon: 'vuejs',
    text: 'VueJS'
  },
  vuetify: {
    icon: 'vuetify',
    text: 'Vuetify'
  },
  quasar: {
    icon: 'octagram-outline',
    text: 'Quasar'
  },
  firebase: {
    icon: 'firebase',
    text: 'Firebase'
  },
  googleMaps: {
    icon: 'google-maps',
    text: 'Maps API'
  },
  finalCut: {
    icon: 'movie-open',
    text: 'Final Cut Pro'
  },
  appleMotion: {
    icon: 'rotate-orbit',
    text: 'Motion'
  },
  bootstrap: {
    icon: 'bootstrap',
    text: 'Bootstrap'
  },
  jQuery: {
    icon: 'jquery',
    text: 'JQuery'
  },
  wordpress: {
    icon: 'wordpress',
    text: 'Wordpress'
  },
  shopify: {
    icon: 'shopify',
    text: 'Shopify'
  }

};

export default {
  name: 'portfolio',
  data: () => ({
    active: null,
    sites: [
      {
        key: 'g2gotravelclub.com',
        name: 'G2 Go Travel Club',
        stack: [tech.vuejs,tech.vuetify],
        url: 'https://g2gotravelclub.com',
        description:
          'Custom-built travel club site tied into existing back office systems for seamless launch of new product.'
      },
      // {
      //   key: 'g2gotravelclub.net',
      //   name: 'G2GoTravelClub.net',
      //   stack: [tech.vuejs,tech.vuetify],
      //   url: 'http://guest.g2gotravelclub.net',
      //   description:
      //     'Direct sales companion of G2GoTravelClub.com features automatic duplication across custom subdomains for registered users.'
      // },
      {
        key: 'fivestar',
        name: 'Five Star Plumbing',
        stack: [tech.vuejs,tech.vuetify],
        url: 'https://5star.jddudley.com',
        url: 'http://5star.jddudley.com',
        description: 'Prerendered SEO-optimized site built in VueJS for limitless expandability across service fields.'
      },
      {
        key: 'meetingsnow',
        name: 'Meetings Now',
        stack: [tech.vuejs,tech.vuetify,tech.firebase,tech.googleMaps],
        url: 'https://meetingsnow.org',
        github: 'https://github.com/JDDudley/MeetingsNow',
        description:
          'Prototype built for local non-profit to begin process of updating outdated systems and integrating all data sources into easily accessible interfaces.'
      },
      {
        key: 'bacypaa',
        name: 'BACYPAA',
        stack: [tech.bootstrap,tech.jQuery],
        url: 'https://bacypaa.org',
        github: 'https://github.com/JDDudley/bacy',
        description:
          'Site built for local non-profit as means of communicating event information nationally.'
      },
      {
        key: 'vue-proposal',
        name: 'Vue Proposal',
        stack: [tech.vuejs,tech.quasar],
        github: 'https://github.com/JDDudley/vueProposal',
        url: 'http://vue-proposal.jddudley.com',
        description:
          'Site Proposal built using Quasar as a demonstration of components that could be easily integrated into mobile apps wrapped from the same code as the web app.'
      },
      {
        key: 'music-proposal',
        name: 'Music Proposal',
        stack: [tech.vuejs,tech.quasar],
        url: 'http://music-proposal.herokuapp.com/',
        github: 'https://github.com/JDDudley/music-proposal',
        description:
          'Proposal for music educators applying for a grant to build a GUI interface for a Bassoon.'
      },
      {
        key: 'penetrex',
        name: 'Penetrex',
        stack: [tech.googleMaps,tech.shopify],
        url: 'https://penetrex.com/pages/where-to-buy',
        description: 'Built and integrated a location-enabled store locator with an intial dataset of over 3,800 stores across the United States.'
      },
      {
        key: 'dudley-analytics',
        name: 'Dudley Analytics',
        stack: [tech.wordpress],
        url: 'https://dudleyanalytics.com',
        description:
          'Site dedicated to database and data processing information; built in WordPress as a demonstration of speed and versatility of WordPress development for end users.'
      },
      {
        key: 'tic-tac-toe',
        name: 'Tic Tac Toe',
        stack: [tech.javascript],
        url: 'https://jddudley.com/games/tictactoe/',
        description: 'Built as a teaching tool for students learning the basics of logic-based Vanilla Javascript.'
      },
      {
        key: 'quemesh',
        name: 'QueMesh',
        stack: [tech.vuejs,tech.quasar,tech.firebase],
        description:
          'Custom full stack solution to read remote barbeque sensor information, track and graph data over time, and control blowers based on set temperature thresholds.'
      }
    ]
  })
};
</script>