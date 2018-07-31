<template>
  <b-container fluid class="p-0">
    <b-img :src="getImg('img/background/banner.jpg')" alt="Banner" class="customImage"/>
  </b-container>
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
