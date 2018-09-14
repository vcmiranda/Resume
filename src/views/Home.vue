<template>
  <v-container fluid class="ma-0 pa-0">
    <Topbar :visible="isVisible"></Topbar>
    <div v-observe-visibility="visibilityChanged"></div>
    <Banner style="height: 100vh;" class="m-0" id="banner"></Banner>
    <About style="height: 100vh;" class="ma-0 py-5 primary" id="about"></About>
    <Resume style="height: 100vh;" class="ma-0 py-5 error" id="resume"></Resume>
    <Contact style="height: 100vh;" class="ma-0 py-5 primary" id="contact"></Contact>
  </v-container>
</template>

<script>
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
    isVisible: true,
  }),
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    },
  },
  watch: {
    isVisible(value) {
      console.log(value);
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
