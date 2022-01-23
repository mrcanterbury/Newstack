const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:newstack@nscluster.jusn4.mongodb.net/nsblog?retryWrites=true&w=majority");

app.get

app.listen(3001, () => {
    console.log("Server is running!")
});