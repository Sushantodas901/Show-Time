const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ShowTime').then(() => {
    console.log('DB Connnected 👍');
}).catch((err) => {
    console.log(err);
})