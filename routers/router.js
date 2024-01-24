const express = require("express");
const router = new express.Router();
const task = require("../models/task");

router.post("/",async (req,res)=>{
    try {
        const newtask = await  new task(req.body);
    newtask.save();
    res.send(newtask);
    } catch (error) {
        res.status(501).send(error);
    }
});
router.get("/",async (req,res)=>{
    try {
        const data = await task.find();
        res.send(data); 
    } catch (error) {
        res.status(501).send(error);
    }
    
});

router.delete("/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const deleteddata = await task.findByIdAndDelete(_id);
        res.send(deleteddata);
    } catch (error) {
        res.status(501).send(error);
    }
})
router.patch("/:id",async (req,res)=>{
    try {
        const _id = req.params.id;
        const updated = await task.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updated);
    } catch (error) {
        res.status(501).send(error);
    }
})

module.exports = router;