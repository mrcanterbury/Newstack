const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
});

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;