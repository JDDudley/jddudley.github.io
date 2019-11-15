import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(Vuetify);
Vue.use(vueSmoothScroll);

// original colors:
// primary: '#112d4e',
// accent: '#3f72af'

// logo colors:
// primary: #1b3765
// accent: #2baae2

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#112d4e',
        secondary: '#dbe2ef',
        accent: '#2baae2'
      },
      dark: {
        primary: '#112d4e',
        secondary: '#dbe2ef',
        accent: '#2baae2'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
});
