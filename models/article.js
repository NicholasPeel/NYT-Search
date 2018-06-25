
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
    snippet: {
        type: String
    }
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;