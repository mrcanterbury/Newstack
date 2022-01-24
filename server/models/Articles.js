const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    image: { type: String, required: false },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: false },
    date: { type: String, required: false },
});

const ArticleModel = mongoose.model("articles", ArticleSchema);
module.exports = ArticleModel;