const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  }, 
  lastName: String,
  email: String,
  birthYear: Number,
  firstJob: Boolean
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema) // employees

module.exports = EmployeeModel