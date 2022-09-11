const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const DepartmentModel = mongoose.model("Department", DepartmentSchema) // departments

module.exports = DepartmentModel