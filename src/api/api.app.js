import axios from './axios';

const SENDGRID_API_KEY = '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';

export default {
  sendEmail({
    // name,
    email,
    subject,
    message,
  }) {
  //   return axios.post('/vcmiranda@outlook.com', {
  //     name,
  //     _replyto,
  //     email,
  //     _subject,
  //     message,
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // },

    return axios('/send', {
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json, text/plain',
      },
      data: {
        personalizations: [
          {
            to: [
              { email: 'vcmiranda@outlook.com' },
            ],
          },
        ],
        from: { email },
        subject,
        content: [
          { type: 'text/plain', value: message },
        ],
      },
    });
  },
};
