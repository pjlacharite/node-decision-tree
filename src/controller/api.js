const mongoose = require("mongoose");
require("../model/question");
const Question = mongoose.model("Question");
const nodemailer = require('nodemailer');


/**
 * GET /
 * Api for the First load
 */
exports.index = function (request, response) {
    Question.find({
        "first": true
    }, function (err, question) {
        if (err) {
            response.send(err);
        }
        response.json(question);
    });
    //var video = require("../../json/index.json");
    //response.json(video);
};

/**
 * GET /
 * Api for to find the next question.
 */
exports.findQuestion = function (request, response) {
    Question.find({
        "name": request.params.name
    }, function (err, question) {
        if (err) {
            console.log("error");
            response.send(err);
        }
        console.log(question);
        response.json(question);
    });
};

exports.submitTicket = function (request, response){
    console.log(request.body);
    //Send email to whoever.
    response.sendStatus(200);
}

/**
 * GET /
 * Api to populate demo content for dev purpose.
 */
exports.populateDemoData = function (request, response) {
    var firstQuestion = new Question({
        name: "firstQuestion",
        text: "What's YOUR problem?",
        first: true,
        answers: [{
            text: "Some Problem",
            questionId: "problemQuestion1"
        }, {
            text: "Some Other Problem",
            questionId: "otherProblemQuestion1"
        }]
    });
    firstQuestion.save(function (err, firstQuestion) {
        if (err) {
            console.log(err);
        } else {
            console.log(firstQuestion);
        }
    });

    var problemQuestion = new Question({
        name: "problemQuestion1",
        text: "Some question about your problem",
        first: false,
        answers: [{
            text: "Some answer about the question",
            questionId: "problemQuestion2"
        }, {
            text: "Some other answer about the question",
            questionId: "problemQuestion3"
        }]
    });
    problemQuestion.save(function (err, problemQuestion) {
        if (err) {
            console.log(err);
        } else {
            console.log(problemQuestion);
        }
    });

    var problemQuestion2 = new Question({
        name: "problemQuestion2",
        text: "Some other question about your problem",
        first: false,
        answers: [{
            text: "Some answer about the question",
        }, {
            text: "Some other answer about the question",
        }]
    });
    problemQuestion2.save(function (err, problemQuestion2) {
        if (err) {
            console.log(err);
        } else {
            console.log(problemQuestion2);
        }
    });

    var otherProblemQuestion1 = new Question({
        name: "otherProblemQuestion1",
        text: "Some other question about ads",
        first: false,
        answers: [{
            text: "Some answer about the question",
        }, {
            text: "Some other answer about the question",
        }]
    });
    otherProblemQuestion1.save(function (err, otherProblemQuestion1) {
        if (err) {
            console.log(err);
        } else {
            console.log(otherProblemQuestion1);
        }
    });

    response.sendStatus(200);
}