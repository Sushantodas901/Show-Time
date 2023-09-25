const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    poster: String,
    rating: Number,
    about: String,
    cast: Array,
    language: String,
    screentype: String,
    runtime: Number,
    slug: String
})
const Movies = new mongoose.model('movies', movieSchema);
module.exports = Movies;