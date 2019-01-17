const sgMail = require('@sendgrid/mail');
const Booking = require('./models/Booking');

sgMail.setApiKey('API KEY');

function send(bookingInfo) {
    const msg = {
        to: bookingInfo.email,
        from: 'confirmation@diningroom.com',
        subject: 'Confirmation of your reservation',
        text: 'Hello, this email is to confirm the booking made for ' + bookingInfo.restaurant.name +  ' on the '  + bookingInfo.date + ' at ' + bookingInfo.time + ' for ' + bookingInfo.numPeople + ' people. Thank you for using Dining Room.',
        html: 'Hello,  this email is to confirm the booking made for ' + bookingInfo.restaurant.name +  ' on the '  + bookingInfo.date + ' at ' + bookingInfo.time + ' for ' + bookingInfo.numPeople + ' people. Thank you for using Dining Room.',
    };
    
    return sgMail.send(msg);
}

    function sendCancel(bookingInfo) {
     const msgCancel = {
        to: bookingInfo.email,
        from: 'cancellation@diningroom.com',
        subject: 'Cancellation of your reservation',
        text: 'Hello, this email is to confirm the cancellation of your booking at  ' + bookingInfo.restaurant.name + ' on the ' + bookingInfo.date + ' at ' + bookingInfo.time + '. Thank you for using Dining Room. ',
        html: 'Hello, this email is to confirm the cancellation of your booking at  ' + bookingInfo.restaurant.name + ' on the ' + bookingInfo.date + ' at ' + bookingInfo.time + '. Thank you for using Dining Room. ',
   };
    return sgMail.send(msgCancel);
}

module.exports = { send, sendCancel };
