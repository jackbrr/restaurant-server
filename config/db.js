const mongoose = require('mongoose');

function connect() {
    const username = 'cafebooking';
    const password = 'jackbarr216';

    return mongoose.connect(`mongodb://${username}:${password}@ds111012.mlab.com:11012/cafebookings`).then(() => {
        console.log("Connected to MongoDB...")
    });
}

exports.connect = connect;
