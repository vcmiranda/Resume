export default {
  sendEmail(data) {
    return window.axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
  },
};

