<template>
  <v-container fluid class="ma-0 pa-0">
    <v-toolbar fixed :class="classToolbar" prominent>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-scroll-to="'#banner'" :ripple="false" class="white--text customBtn">Home</v-btn>
        <v-btn flat v-scroll-to="{el: '#about', offset: -64}" :ripple="false" class="white--text customBtn">About</v-btn>
        <v-btn flat v-scroll-to="'#resume'" :ripple="false" class="white--text customBtn">Resume</v-btn>
        <v-btn flat :ripple="false" class="white--text customBtn">Works</v-btn>
        <v-btn flat :ripple="false" class="white--text customBtn">Testimonials</v-btn>
        <v-btn flat v-scroll-to="'#contact'" :ripple="false" class="white--text customBtn">Contact</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: 'topbar',
  props: ['visible'],
  computed: {
    classToolbar() {
      return {
        'elevation-0 primary': !this.visible,
        'elevation-0 transparent': this.visible,
      };
    },
  },
};
</script>

<style scoped>
.primary {
  height: 64px;
  transition: 0.8s;
}
.transparent {
  height: 64px;
  transition: 0.8s;
}
</style>

<style lang="scss">
.customBtn {
  height: auto;
  width: auto;
  min-width: 0;
  > .v-btn__content {
    &:hover {
      color: #11ABB0;
    }
  }
  &:before {
    background-color: transparent !important;
    transition: none !important;
  }
}
</style>
