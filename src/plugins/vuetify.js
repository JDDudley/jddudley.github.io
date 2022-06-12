import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#2292A4",
                secondary: "#0F0A0A",
                accent: "#BDBF09",
                error: "#D96C06",
                warning: "#D96C06",
                info: "#F5EFED",
                success: "#BDBF09"
            }
        }
    }
});
