<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-img :src="getImg('img/background/banner.jpg')" class="customImage"></v-img>
    <v-layout row wrap class="align-center align-content-center">
      <v-flex xs12 class="visible">
        <v-flex xs10 sm8 md7 class="text-xs-center mx-auto visible py-2">
          <span :class="className">{{name}}</span>
        </v-flex>
        <v-flex xs10 sm8 md7 class="text-xs-center mx-auto visible py-2">
          <span :class="classDesc">{{description}}</span>
        </v-flex>
      </v-flex>
      <v-flex xs12 class="visible">
        <v-flex xs10 sm8 md7 class="text-xs-center mx-auto visible py-2">
          <v-divider dark class="line"></v-divider>
        </v-flex>
        <v-flex xs10 sm8 md6 class="text-xs-center mx-auto visible py-2">
          <v-icon
              v-for="icon in icons"
              size="36"
              :color="icon.color"
              class="px-3"
              @click="sendToLink(icon.link)"
              @mouseover="hoverOverIconColor(icon.service)"
              @mouseout="hoverOutIconColor(icon.service)"
              :key="icon.service"
          >{{icon.symbol}}</v-icon>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-btn
        fab
        class="visible scrollBtn"
        :color="btnColor"
        v-scroll-to="{el: '#about', offset: -64}"
        @mouseover="btnColor = 'accent'"
        @mouseout="btnColor = 'white'"
    >
      <v-icon color="black">keyboard_arrow_down</v-icon>
    </v-btn>
    <span class="showBtn" v-observe-visibility="visibilityButton"></span>
  </v-container>
</template>

<script>
/* eslint-disable object-curly-newline */
import imageMixin from '@/mixins/mixin.images';

export default {
  name: 'banner',
  mixins: [imageMixin],
  data: () => ({
    name: 'I\'m Vitor Miranda',
    description: 'I\'m a Canada based full-stack web developer, creating awesome and effective websites for companies of all sizes around the globe. Let\'s start scrolling and learn more about me.',
    icons: [
      { service: 'github', link: 'www.github.com/vcmiranda', symbol: 'fab fa-github', color: 'white' },
      { service: 'linkedin', link: 'www.linkedin.com/in/vcmiranda/', symbol: 'fab fa-linkedin', color: 'white' },
      { service: 'facebook', link: 'www.facebook.com/vitor.correa.miranda', symbol: 'fab fa-facebook', color: 'white' },
      { service: 'twitter', link: 'www.twitter.com/vicormi', symbol: 'fab fa-twitter', color: 'white' },
    ],
    btnColor: 'white',
  }),
  computed: {
    className() {
      return {
        'white--text display-4 font-weight-medium': this.$vuetify.breakpoint.lgAndUp,
        'white--text display-3 font-weight-medium': this.$vuetify.breakpoint.smAndUp && this.$vuetify.breakpoint.mdAndDown,
        'white--text display-1 font-weight-medium': this.$vuetify.breakpoint.xsOnly,
      };
    },
    classDesc() {
      return {
        'white--text headline font-weight-regular': this.$vuetify.breakpoint.lgAndUp,
        'white--text title font-weight-regular': this.$vuetify.breakpoint.smAndUp && this.$vuetify.breakpoint.mdAndDown,
        'white--text subheading font-weight-regular': this.$vuetify.breakpoint.xsOnly,
      };
    },
  },
  methods: {
    sendToLink(link) {
      if (link) {
        const rules = /^(http:\/\/|https:\/\/)/;
        if (rules.test(link)) {
          window.open(link);
        } else {
          window.open(`http://${link}`);
        }
      }
    },
    hoverOverIconColor(service) {
      this.icons[this.icons.findIndex(icon => icon.service === service)].color = 'accent';
    },
    hoverOutIconColor(service) {
      this.icons[this.icons.findIndex(icon => icon.service === service)].color = 'white';
    },
    visibilityButton(isVisible) {
      this.$emit('visible', isVisible);
    },
  },
};
</script>

<style scoped>
.customImage {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}
.visible {
  z-index: 1;
}
.line{
  border: 1px solid white;
}
.scrollBtn {
  position: absolute;
  top: 95vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style lang="less">
.showBtn{
  position: absolute;
  top: calc(~"95vh - 64px");
}
</style>
