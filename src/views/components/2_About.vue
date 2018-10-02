<template>
  <v-container fluid class="ma-0 pa-0">
    <transition name="fade" appear>
      <v-layout row wrap fill-height class="mx-auto align-center">
        <v-flex xs12 sm3 md3 offset-md1 xl3 offset-xl2 class="text-xs-center">
          <v-avatar :size="picSize">
            <img src="../../assets/img/pic.jpg" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm9 md7 xl5>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat color="primary">
                <v-card-title :class="classTitle">
                  {{ texts.about.title }}
                </v-card-title>
                <v-card-text :class="classText" style="line-height: 1.5 !important;">
                  {{ texts.about.description }}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card flat color="primary">
                <v-card-title :class="classTitle">
                  {{ texts.contact.title }}
                </v-card-title>
                <v-card-text :class="classContact">
                  {{ texts.contact.name }}
                </v-card-text>
                <v-card-text :class="classContact">
                  {{ texts.contact.email }}
                </v-card-text>
                <v-card-text :class="classContact">
                  {{ texts.contact.location }}
                </v-card-text>
                <v-card-text :class="classContact">
                  {{ texts.contact.phone }}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6 class="text-xs-center d-flex align-center" :class="{'pt-4': $vuetify.breakpoint.smAndDown}">
              <a href="/docs/VitorMiranda_Resume.pdf" style="text-decoration: none;" download>
                <v-btn flat dark style="border: 2px solid;">
                  <v-icon left dark>cloud_download</v-icon>
                  {{ texts.resume }}
                </v-btn>
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </transition>
  </v-container>
</template>

<script>
import textsJson from '../../texts';

export default {
  name: 'about',
  data: () => ({
    texts: textsJson['2_about'],
  }),
  computed: {
    picSize() {
      return this.$vuetify.breakpoint.mdAndUp ? 192 : 128;
    },
    classTitle() {
      return {
        'white--text display-2 font-weight-bold': this.$vuetify.breakpoint.lgAndUp,
        'white--text display-1 font-weight-bold': this.$vuetify.breakpoint.mdAndDown,
      };
    },
    classText() {
      return {
        'white--text headline font-weight-regular py-2': this.$vuetify.breakpoint.lgAndUp,
        'white--text title font-weight-regular py-2': this.$vuetify.breakpoint.smAndUp && this.$vuetify.breakpoint.mdAndDown,
        'white--text subheading font-weight-regular py-2': this.$vuetify.breakpoint.xsOnly,
      };
    },
    classContact() {
      return {
        'white--text headline font-weight-regular py-1': this.$vuetify.breakpoint.lgAndUp,
        'white--text title font-weight-regular py-1': this.$vuetify.breakpoint.smAndUp && this.$vuetify.breakpoint.mdAndDown,
        'white--text subheading font-weight-regular py-1': this.$vuetify.breakpoint.xsOnly,
      };
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
