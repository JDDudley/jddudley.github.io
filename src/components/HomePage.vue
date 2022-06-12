<template>
    <v-container mt-12 pa-3 info rounded id="top">
        <v-row>
            <v-col cols="12" md="4" class="text-center">
                <transition name="spin">
                <v-img
                    :src="require('../assets/logo.png')"
                    contain
                    height="200"
                />
                </transition>
            </v-col>
            <v-col cols="12" md="8" class="text-center" align-center>
                <h2 class="font-weight-black">Data Analytics & Full Stack Development</h2>
                <br>
                <p class="text-justify">Cross-discipline experience developing solutions for data management and processing has created the skillset needed to quiclkly adapt to new environments and requirements.</p>
                <p class="text-justify">Full stack development education complements more than 2 decades of personal and professional web development experience.</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    .spin-enter-active {
        animation: spin;
        animation-name: spin;
        animation-duration: 500ms;
        animation-iteration-count: 1;
        animation-timing-function: linear;
    }
</style>

<script>
export default {
    name: "HomePage",

    data: () => ({}),
};
</script>
