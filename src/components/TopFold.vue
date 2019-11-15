<template>
  <!-- above the fold -->
  <section id="top" class="component white--text">
    <v-container fluid>
      <v-row no-gutters>
        <v-col class="col-12 text-center">
          <img src="../assets/jd-cube-border.png" alt="JD Cube Logo" id="jd-cube" />
        </v-col>
      </v-row>
      <v-row no-gutters class="home-text-bar font-weight-black main-name black-shadow pb-0">
        <v-col class="col-6 text-right">Jason</v-col>
        <v-col class="col-6 text-left accent--text">Dudley</v-col>
      </v-row>
      <v-row no-gutters class="home-text-bar font-weight-black main-tag black-shadow pt-0">
        <v-col class="col-6 text-right accent--text">
          Web
          <span class="d-sm-none">
            <br />
          </span> Development
        </v-col>
        <v-col class="col-6 text-left">
          Data
          <span class="d-sm-none">
            <br />
          </span> Analytics
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="col-12 ma-3 text-center">
          <v-btn large light color="mt-5" href="#portfolio" v-smooth-scroll="{offset:-56}">
            View Portfolio
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="sass">

</style>

<script>
export default {
  data: () => ({
    bottomNav: "contact"
  })
};
</script>
