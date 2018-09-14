<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <Topbar :visible="visibleToolbar"></Topbar>
      </v-flex>
      <v-flex xs12 v-observe-visibility="visibilityToolbar"></v-flex>
      <v-flex xs12>
        <Banner style="height: 100vh;" class="m-0" id="banner" @visible="visibilityButton"></Banner>
        <About style="height: 100vh;" class="ma-0 py-5 primary" id="about"></About>
        <Resume style="height: 100vh;" class="ma-0 py-5 error" id="resume"></Resume>
        <Contact style="height: 100vh;" class="ma-0 py-5 primary" id="contact"></Contact>
        <v-fab-transition>
          <v-btn
            fab
            fixed
            bottom
            right
            v-if="!visibleButton"
            :color="btnColor"
            v-scroll-to="'#banner'"
            @mouseover="btnColor = 'white'"
            @mouseout="btnColor = 'accent'"
          >
            <v-icon color="black">keyboard_arrow_up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>
    </v-layout>
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
    visibleToolbar: true,
    visibleButton: false,
    btnColor: 'accent',
  }),
  methods: {
    visibilityToolbar(isVisible) {
      this.visibleToolbar = isVisible;
    },
    visibilityButton(isVisible) {
      this.visibleButton = isVisible;
    },
  },
};
</script>
