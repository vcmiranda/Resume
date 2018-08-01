<template>
  <v-container fluid class="ma-0 pa-0">
    <Topbar :visible="isVisible"></Topbar>
    <Banner style="height: 100vh;" class="m-0" id="banner" v-observe-visibility="visibilityChanged"></Banner>
    <About style="height: 100vh;" class="ma-0 py-5 primary" id="about"></About>
    <Resume style="height: 100vh;" class="ma-0 py-5 error" id="resume"></Resume>
    <Contact style="height: 100vh;" class="ma-0 py-5 primary" id="contact"></Contact>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import Topbar from './layout/Topbar.vue';
import Banner from './components/1_Banner.vue';
import About from './components/2_About.vue';
import Resume from './components/3_Resume.vue';
import Contact from './components/6_Contact.vue';

export default {
  name: 'home',
  components: {
    Topbar,
    Banner,
    About,
    Resume,
    Contact,
  },
  data: () => ({
    windowWidth: window.innerWidth,
    isVisible: null,
  }),
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  computed: {
    ...mapState('app', [
      'sector',
    ]),
    customClass() {
      return {
        'd-flex justify-content-center': this.windowWidth > 575,
      };
    },
  },
  methods: {
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
  },
};
</script>

<style scoped>
ul.navbar-nav a {
  color: rgba(255, 255, 255, 1) !important;
}
ul.navbar-nav a:hover {
  color: orangered !important;
}
</style>
