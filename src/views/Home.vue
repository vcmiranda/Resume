<template>
  <b-container fluid class="p-0 m-0">
    <b-navbar toggleable fixed="top" type="dark" :variant="!isVisible ? 'custom-primary': ''">
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse" :class="customClass">
        <b-navbar-nav id="navbar-scroll">
          <b-nav-item href="#" v-scroll-to="'#banner'" class="h5 text-yellow">Home</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#about'" class="h5">About</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#resume'" class="h5">Resume</b-nav-item>
          <b-nav-item href="#" class="h5">Works</b-nav-item>
          <b-nav-item href="#" class="h5">Testemonials</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#contact'" class="h5">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="p-0 m-0">
      <b-row style="height: 100vh;" class="m-0" id="banner" v-observe-visibility="visibilityChanged">
        <Banner></Banner>
      </b-row>
      <b-row style="height: 100vh;" class="m-0 py-5 bg-custom-primary" id="about">
        <About></About>
      </b-row>
      <b-row style="height: 100vh;" class="m-0 py-5 bg-danger" id="resume">
        <Resume></Resume>
      </b-row>
      <b-row style="height: 100vh;" class="m-0 py-5 bg-custom-primary" id="contact">
        <Contact></Contact>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Banner from './components/1_Banner.vue';
import About from './components/2_About.vue';
import Resume from './components/3_Resume.vue';
import Contact from './components/6_Contact.vue';

export default {
  name: 'home',
  components: {
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
