const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: String,
    pic: String
})
const Cast = new mongoose.model('casts', castSchema);
module.exports = Cast;