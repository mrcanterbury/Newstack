const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    categories: {
        type: Array,
        required: false,
    },
});

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;