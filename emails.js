const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

function send(email, message) {
  const msg = {
    to: 'martinmckeaveney@gmail.com',
    from: 'jackbarr94@hotmail.co.uk',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  return sgMail.send(msg);
}

module.exports = { send };

