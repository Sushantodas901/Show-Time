const mongoose = require('mongoose');

const activitiesSchema = new mongoose.Schema({
    name: String,
    location: String,
    poster: String,
    rating: String,
    about: String,
    description: String,
    timedate: String,
    price: Number,
    terms: Array,
    mainposter: String,
    slug: String
})
const Activity = new mongoose.model('activities', activitiesSchema);
module.exports = Activity;