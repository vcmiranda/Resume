<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout wrap row class="mx-auto">
      <v-flex xs12 class="ma-2">
        <transition name="fade1" appear>
          <v-layout wrap row>
            <v-flex xs10 offset-xs1 sm3 offset-sm1 xl3 offset-xl2 class="text-xs-center" :class="{'pb-5': $vuetify.breakpoint.smAndDown}">
              <span :class="classSection">{{ texts.experience.title }}</span>
            </v-flex>
            <v-flex xs10 offset-xs1 sm7 offset-sm0 xl5 class="py-2">
              <v-layout wrap row>
                <transition-group name="fade2" appear>
                  <template v-for="(item, i) in texts.experience.items">
                    <v-flex xs12 :key="`${item.id}-Company`" :class="classTitle">
                      <span v-html="item.company"></span>
                    </v-flex>
                    <template v-if="$vuetify.breakpoint.smAndUp">
                      <v-flex xs12 :key="`${item.id}-Position`" :class="classSubTitle">
                        <span v-html="item.position"></span>
                        <span> - </span>
                        <span v-html="item.dates"></span>
                      </v-flex>
                    </template>
                    <template v-else>
                      <v-flex xs12 :key="`${item.id}-Position`" :class="classSubTitle">
                        <span v-html="item.position"></span>
                      </v-flex>
                      <v-flex xs12 :key="`${item.id}-Dates`" :class="classSubTitle">
                        <span v-html="item.dates"></span>
                      </v-flex>
                    </template>
                    <v-flex xs12 :key="`${item.id}-Location`" :class="classSubTitle">
                      <span v-html="item.location"></span>
                    </v-flex>
                    <v-flex xs12 :key="`${item.id}-Description`" :class="{'pb-4': texts.experience.items.length - i > 1}">
                      <v-layout wrap row>
                        <v-flex xs12 v-for="desc in item.description" :class="classDescription" :key="desc">
                          <span v-html="desc">desc</span>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </template>
               </transition-group>
              </v-layout>
            </v-flex>
          </v-layout>
        </transition>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <v-layout wrap row>
          <v-flex xs10 offset-xs1 sm3 offset-sm1 xl3 offset-xl2 class="text-xs-center" :class="{'pb-5': $vuetify.breakpoint.smAndDown}">
            <span :class="classSection">{{ texts.education.title }}</span>
          </v-flex>
          <v-flex xs10 offset-xs1 sm7 offset-sm0 xl5>
            <v-layout wrap row>
              <template v-for="item in texts.education.items">
                <v-flex xs12 :key="`${item.id}-Institution`" :class="classTitle" class="py-2">
                  {{ item.institution }}
                </v-flex>
                <template v-if="$vuetify.breakpoint.smAndUp">
                  <v-flex xs12 :key="`${item.id}-Program`" :class="classSubTitle">
                    {{ item.program }} - {{ item.graduation }}
                  </v-flex>
                </template>
                <template v-else>
                  <v-flex xs12 :key="`${item.id}-Program`" :class="classSubTitle">
                    {{ item.program }}
                  </v-flex>
                  <v-flex xs12 :key="`${item.id}-Graduation`" :class="classSubTitle">
                    {{ item.graduation }}
                  </v-flex>
                </template>
                <v-flex xs12 :key="`${item.id}-Location`" :class="classSubTitle">
                  {{ item.location }}
                </v-flex>
              </template>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 class="ma-4">
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 sm3 offset-sm1 xl3 offset-xl2 class="text-xs-center" :class="{'pb-5': $vuetify.breakpoint.smAndDown}">
            <span :class="classSection">{{ texts.skills.title }}</span>
          </v-flex>
          <v-flex xs10 offset-xs1 sm7 offset-sm0 xl5>
            <v-layout wrap row>
              <template v-for="item in texts.skills.items">
                <v-flex xs12 :key="`${item.id}-Institution`" :class="classSkills">
                  {{ item.name }}
                </v-flex>
                <v-progress-linear color="accent" height="20" :value="item.level" :key="`${item.id}-Level`"/>
              </template>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import textsJson from '../../texts';

export default {
  name: 'resume',
  data: () => ({
    texts: textsJson['3_resume'],
  }),
  computed: {
    classSection() {
      return {
        'display-2 font-weight-bold customBorder': this.$vuetify.breakpoint.lgAndUp,
        'display-1 font-weight-bold customBorder': this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.xsOnly,
        'headline font-weight-bold customBorder': this.$vuetify.breakpoint.smOnly,
      };
    },
    classTitle() {
      return {
        'display-1 font-weight-bold': this.$vuetify.breakpoint.lgAndUp,
        'headline font-weight-bold': this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.xsOnly,
        'title font-weight-bold': this.$vuetify.breakpoint.smOnly,
      };
    },
    classSubTitle() {
      return {
        'headline accent--text font-weight-regular': this.$vuetify.breakpoint.lgAndUp,
        'title accent--text font-weight-regular': this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.xsOnly,
        'subheading accent--text font-weight-regular': this.$vuetify.breakpoint.smOnly,
      };
    },
    classDescription() {
      return {
        'title font-weight-regular py-2': this.$vuetify.breakpoint.mdAndUp,
        'subheading font-weight-regular py-2': this.$vuetify.breakpoint.smAndDown,
      };
    },
    classSkills() {
      return {
        'headline font-weight-regular': this.$vuetify.breakpoint.lgAndUp,
        'title font-weight-regular': this.$vuetify.breakpoint.mdOnly,
        'subheading font-weight-regular': this.$vuetify.breakpoint.smAndDown,
      };
    },
  },
};
</script>

<style>
.customBorder{
  border-bottom: 4px solid #11ABB0;
}
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 2s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 4s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
