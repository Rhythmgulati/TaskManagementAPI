const { default: mongoose } = require("mongoose");

const taskschema = mongoose.Schema({
  title:String,
  description:String,
  dueDate:Date,
  status:String  
});

const task = mongoose.model("task",taskschema);

module.exports = task;