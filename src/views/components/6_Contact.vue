<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout wrap row class="mx-auto" style="max-width: 1200px;">
      <v-flex xs12 class="">
          <v-avatar tile size="128">
          <img src="~@/assets/img/letter.png" alt="avatar">
        </v-avatar>
      </v-flex>
      <v-flex xs12 sm8>
        <v-card flat color="primary">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-text-field dark solo-inverted :value="name" @input="SET_NAME" label="Name" required></v-text-field>
              <v-text-field dark solo-inverted :value="email" @input="SET_EMAIL" label="Email" required></v-text-field>
              <v-text-field dark solo-inverted :value="subject" @input="SET_SUBJECT" label="Subject" required></v-text-field>
              <v-textarea dark solo-inverted :value="message" @input="SET_MESSAGE" label="Message" :rows="6" auto-grow required></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" @click="SEND_EMAIL">Submit</v-btn>
              <v-btn @click="clear" class="text-xs-right">Clear</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 class="white--text">
        <v-card flat color="primary">
          <v-card-title class="white--text headline font-weight-bold">
            Email, Location and Phone
          </v-card-title>
          <v-card-text class="white--text title py-2">
            Vitor Miranda
          </v-card-text>
          <v-card-text class="white--text title py-2">
            vcmiranda@outlook.com
          </v-card-text>
          <v-card-text class="white--text title py-2">
            London, ON - Canada
          </v-card-text>
          <v-card-text class="white--text title py-2">
            (647) 937-9470
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'resume',
  data: () => ({
    valid: false,
  }),
  computed: {
    ...mapState('app', [
      'name',
      'email',
      'subject',
      'message',
    ]),
  },
  methods: {
    ...mapMutations('app', [
      'SET_NAME',
      'SET_EMAIL',
      'SET_SUBJECT',
      'SET_MESSAGE',
    ]),
    ...mapActions('app', [
      'SEND_EMAIL',
    ]),
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
