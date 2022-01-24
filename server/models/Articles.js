const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        maxLength: 200,
    },
    category: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
});

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;