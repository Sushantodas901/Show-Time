const mongoose = require('mongoose');

const playsSchema = new mongoose.Schema({
    name: String,
    location: String,
    poster: String,
    rating: String,
    about: String,
    artist: Array,
    description: String,
    timedate: String,
    price: Number,
    terms: Array,
    mainposter: String,
    slug: String
})
const Plays = new mongoose.model('plays', playsSchema);
module.exports = Plays;