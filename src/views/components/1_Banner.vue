<template>
  <v-container fluid class="ma-0 pa-0">
    <v-img :src="getImg('img/background/banner.jpg')" class="customImage"></v-img>
  </v-container>
</template>

<script>
import imageMixin from '@/mixins/mixin.images'; // eslint-disable-line

export default {
  name: 'banner',
  mixins: [imageMixin],
};
</script>

<style scoped>
.customImage {
  width: 100%;
  height: 100vh;
}
</style>
