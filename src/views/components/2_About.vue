<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout row wrap fill-height class="mx-auto align-center" style="max-width: 1024px;">
      <v-flex xs3 class="text-xs-center">
        <v-avatar size="128">
          <img src="../../assets/img/pic.jpg" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs9>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat color="primary">
              <v-card-title class="white--text display-1 font-weight-bold">
                About Me
              </v-card-title>
              <v-card-text class="white--text title font-weight-regular py-2" style="line-height: 1.5 !important;">
                Full stack web developer, specializing in front end development (proficient in Vue.js). Solid project management background, being responsible or having participated of the deployment of solutions in a variety of domains. Provided in-company training to more than 1000 people in project management software. Responsible for the growth and mentoring of other team members (developing intern technical and management skills).
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card flat color="primary white--text ">
              <v-card-title class="display-1 font-weight-bold">
                Contact Details
              </v-card-title>
              <v-card-text class="headline font-weight-regular py-1">
                Vitor Miranda
              </v-card-text>
              <v-card-text class="headline font-weight-regular py-1">
                vcmiranda@outlook.com
              </v-card-text>
              <v-card-text class="headline font-weight-regular py-1">
                London, ON - Canada
              </v-card-text>
              <v-card-text class="headline font-weight-regular py-1">
                (647) 937-9470
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 class="text-xs-center d-flex align-center">
            <a href="/docs/VitorMiranda_Resume.pdf" style="text-decoration: none;" download>
              <v-btn flat dark style="border: 2px solid;">
                <v-icon left dark>cloud_download</v-icon>
                Download Resume
              </v-btn>
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    about: {
      title: 'About Me',
      description: 'Full stack web developer, specializing in front end development (proficient in Vue.js). Solid project management background, being responsible or having participated of the deployment of solutions in a variety of domains. Provided in-company training to more than 1000 people in project management software. Responsible for the growth and mentoring of other team members (developing intern technical and management skills).',
    },
    contact: {
      title: 'Contact Details',
      description: 'Vitor Miranda',
    },
  }),
};
</script>
