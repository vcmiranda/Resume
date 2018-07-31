<template>
  <b-container fluid class="py-5" style="max-width: 1200px;">
    <b-row>
      <b-col sm="8">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-row class="p-3">
            <label for="name" class="text-white">Name*</label>
            <b-form-input id="name" type="text" size="lg" :value="name" @input="SET_NAME" required class="inputUI"></b-form-input>
          </b-row>
          <b-row class="p-3">
            <label for="email" class="text-white">Email*</label>
            <b-form-input id="email" type="email" size="lg" :value="email" @input="SET_EMAIL" required class="inputUI"></b-form-input>
          </b-row>
          <b-row class="p-3">
            <label for="subject" class="text-white">Subject</label>
            <b-form-input id="subject" type="text" size="lg" :value="subject" @input="SET_SUBJECT" class="inputUI"></b-form-input>
          </b-row>
          <b-row class="p-3">
            <label for="message" class="text-white">Message</label>
            <b-form-textarea id="message" type="text" :rows="6" :value="message" @input="SET_MESSAGE" class="inputUI"></b-form-textarea>
          </b-row>
          <b-row class="p-3 float-right">
            <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
            <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
          </b-row>
        </b-form>
      </b-col>
      <b-col>2 of 3</b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'resume',
  data: () => ({
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
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
    onSubmit(evt) {
      evt.preventDefault();
      this.SEND_EMAIL();
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = '';
      this.form.name = '';
      this.form.subject = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.inputUI {
  background-color: rgb(98, 97, 100);
  color: white;
}
.inputUI:focus {
  background-color: aquamarine;
  color: black;
}
</style>
