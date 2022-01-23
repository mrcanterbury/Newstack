const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ArticleModel = require('./models/Articles');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:newstack@nscluster.jusn4.mongodb.net/nsblog?retryWrites=true&w=majority");

app.get("/getArticles", (req, res) => {
    ArticleModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createArticle", async (req, res) => {
    const article = req.body;
    const newArticle = new ArticleModel(article);
    await newArticle.save();

    res.json(article);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Test server running on Port ${port}`)
});