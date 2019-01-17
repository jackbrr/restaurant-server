const Booking = require('./models/Booking');
const mongoose = require('mongoose');

const availability = mongoose.model(
    'Availability',
    new mongoose.Schema({
            restaurantId: String,
            spacesUsed: String
    }),
'availability'
)

module.exports = availability;