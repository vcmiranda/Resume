<template>
  <b-container fluid class="p-0 m-0">
    <b-navbar toggleable fixed="top" type="dark">
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse" class="d-flex justify-content-center">
        <b-navbar-nav id="navbar-scroll">
          <b-nav-item href="#" v-scroll-to="'#banner'">Home</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#about'">About</b-nav-item>
          <b-nav-item href="#" v-scroll-to="'#resume'">Resume</b-nav-item>
          <b-nav-item href="#">Works</b-nav-item>
          <b-nav-item href="#">Testemonials</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="p-0 m-0">
      <b-row style="height: 100vh;" class="m-0" id="banner">
        <Banner></Banner>
      </b-row>
      <b-row style="height: 100vh;" class="m-0" id="about">
        <About></About>
      </b-row>
      <b-row style="height: 100vh;" class="m-0" id="resume">
        <Resume></Resume>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Banner from './components/1_Banner.vue';
import About from './components/2_About.vue';
import Resume from './components/3_Resume.vue';

export default {
  name: 'home',
  components: {
    Banner,
    About,
    Resume,
  },
  computed: {
    ...mapState('app', [
      'sector',
    ]),
  },
};
</script>

<style scoped>
</style>
