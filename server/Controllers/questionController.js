const express = require('express');
const Question = require('../Models/Question');
const isLoggedIn = require("../middleware/userAuth");

const router = express.Router();

//route to create new question
router.post('/',isLoggedIn,async(req,res) => {
    try{
        const {question,answers,eventCode,type,options} = req.body;
        const newQuestion = await Question.create({type,question,answers,eventCode,options});
        res.status(201).json(newQuestion);
    }catch(err){
        res.status(422).json(err.message);
    }
})

//route to fetch all questions by event code
router.get('/code/:eventCode', isLoggedIn , async(req,res) => {
    try{
        const {eventCode} = req.params;
        const questions = await Question.find({eventCode});
        res.status(200).json(questions);
    }catch(err){
        res.status(500).json(err.message);
    }
})

//route to fetch question details by id
router.get("/:questId",isLoggedIn, async(req,res) => {
    try{
        const {questId} = req.params;
        const question = await Question.findById(questId);
        res.status(200).json(question);
    }
    catch(err){
        res.status(500).json(err.message);
    }
})

//route to update existing question
router.put('/', isLoggedIn ,async(req,res) => {
    try{
        const {id,question,answers,eventCode,type,options} = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(id , {
            question,answers,eventCode,type,options,
        })
        res.status(201).json(updatedQuestion);
    }catch(err){
        res.status(422).json(err.message);
    }
})

//route to delete question by id
router.delete('/:questId',isLoggedIn , async(req,res) => {
    try{
        const {questId} = req.params;
        await Question.findByIdAndDelete(questId);
        res.status(200).json("Question Deleted Successfully")
    }catch(err){
        res.status(500).json(err.message);
    }
})
module.exports = router;