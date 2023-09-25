const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
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
const Events = new mongoose.model('events', eventsSchema);
module.exports = Events;