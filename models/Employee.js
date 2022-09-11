const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  }, 
  lastName: String,
  email: String,
  birthYear: Number,
  firstJob: Boolean,
  department: {
    type: mongoose.Types.ObjectId,
    ref: 'Department'
  }
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema) // employees

module.exports = EmployeeModel