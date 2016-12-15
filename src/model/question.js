"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    name: {type: String, trim: true, unique: true},
    text: {type: String, trim: true},
    first: {type: Boolean},
    answers: [{
        text: {type: String, trim: true},
        questionId: {type: String, trim: true}
    }]
});

QuestionSchema.path("name").required(true, "Question Id cannot be null");
QuestionSchema.path("text").required(true, "Text Id cannot be null");

mongoose.model("Question", QuestionSchema);