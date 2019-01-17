const sgMail = require('@sendgrid/mail');
const Booking = require('./models/Booking');

sgMail.setApiKey('APIKEY');

function send(bookingInfo) {
    const msg = {
        to: bookingInfo.email,
        from: 'jackbarr123@googlemail.com',
        subject: 'Confirmation of your reservation',
        text: 'Hello, this email is to confirm the booking made for ' + bookingInfo.restaurant.name +  ' on the '  + bookingInfo.date + ' at ' + bookingInfo.time + ' for ' + bookingInfo.numPeople + ' people. Thank you for using Dining Room.',
        html: 'Hello,  this email is to confirm the booking made for ' + bookingInfo.restaurant.name +  ' on the '  + bookingInfo.date + ' at ' + bookingInfo.time + ' for ' + bookingInfo.numPeople + ' people. Thank you for using Dining Room.',
    };
    
    return sgMail.send(msg);
}

    function sendCancel(bookingInfo) {
     const msgCancel = {
        to: bookingInfo.email,
        from: 'jackbarr123@googlemail.com',
        subject: 'Cancellation of your reservation',
        text: 'Hello, ',
        html: 'Hello, ',
   };
    return sgMail.send(msgCancel);
}

module.exports = { send, sendCancel };
