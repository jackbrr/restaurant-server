const sgMail = require('@sendgrid/mail');
const Booking = require('./models/Booking');
let to = 'email';
let usersName = 'username';
let restaurant = 'restaurant';
let date = 'date';
let time = 'time';


sgMail.setApiKey('*API KEY HERE*');

function send(email, message) {
    const msg = {
        to,
        from: 'Dining Room Confirmation',
        subject: 'Confirmation of your reservation',
        text: 'Hello, ' + usersName + ". This is a confirmation for your reservation at " + restaurant + " on the " + date + " at " +
            time + " Thank you for using Dining Room. ",
        html: '' 
    };
    return sgMail.send(msg);
}


sgMail.setApiKey('*API KEY HERE*');

function sendCancel(email, message) {
    const msg = {
        to,
        from: 'Dining Room Restaurant Cancelation',
        subject: 'URGENT! Sorry but the restaurant has cancelled',
        text: 'Hello, ' + usersName + ". This email is to notify you that your booking for " + restauraunt + " on the " + date + " at " +
            time + "has been Cancelled. Thank you for using Dining Room. ",
        html: '',
    };
    return sgMail.sendCancel(msg);
}

module.exports = { send, sendCancel };
