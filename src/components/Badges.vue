<template>
  <!-- above the fold -->
  <section>
    <v-container fluid class="badge-bar white--text">
      <v-row no-gutters>
        <v-col class="col-3 text-center" v-for="badge in badges" :key="badge.icon">
          <v-icon class="badge-icon accent--text display-2">{{ 'mdi-' + badge.icon }}</v-icon>
          <h4>{{ badge.name }}</h4>
          <!-- <h4>{{ badge.version }}</h4> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="sass">
.badge-bar
    background-color: rgba(0,0,0,0.5)
    padding: 12px 0
.badge-icon
    font-size: 4em
    color: white
</style>

<script>
export default {
  name: "badges",
  data: () => ({
    badges: [
      {
        icon: 'language-javascript',
        name: 'Javascript'
      },
      {
        icon: 'vuejs',
        name: 'VueJS'
      },
      {
        icon: 'vuetify',
        name: 'Vuetify'
      },
      {
        icon: 'firebase',
        name: 'Firebase'
      }
    ]
  })
};
</script>
