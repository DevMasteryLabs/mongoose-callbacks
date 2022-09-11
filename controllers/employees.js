const Employee = require('../models/Employee')

const findAllEmployees = (done) => {
  Employee.find({}).populate('department').exec((err, data) => {
    if (err) {
      return done(err, null)
    }
    return done(null, data)
  })
}

const findEmployeeById = (employeeIdentifier, done) => {
  Employee.findOne({ _id: employeeIdentifier }).populate('department').exec((err, data) => {
    if (err) {
      return done(err, null)
    }
    if (!data) {
      const notFoundError = { error: 'Employee not found' }
      return done(notFoundError, null)
    }
    if (data) {
      return done(null, data)
    }
  })
}

const createAndSaveEmployee = (informations, done) => {
  const employee = new Employee({
    firstName: informations.firstName, 
    lastName: informations.lastName,
    email: informations.email,
    birthYear: informations.birthYear,
    firstJob: informations.firstJob,
    department: informations.department
  })
  employee.save((error, data) => {
    if (error) {
      return done(error, null)
    }
    return done(null, data)
  })
}

function deleteEmployee(employeeId, done) {
  Employee.findByIdAndDelete(employeeId, (error, data) => {
    if (error) {
      return done(error, null)
    } 
    if (!data) {
      const notFoundError = { error: 'Employee not found' }
      return done(notFoundError, null)
    }
    return done(null, {message: 'Employee deleted successfully'})
  })
}

function updateEmployee(employeeId, newInformations, done) {
  // Employee.updateOne({_id: employeeId}, { $set: newInformations }, (err, data) => {})
  Employee.findByIdAndUpdate(employeeId, { $set: newInformations }, { new: true }, (error, data) => {
    if (error) {
      return done(error, null)
    } 
    if (!data) {
      const notFoundError = { error: 'Employee not found' }
      return done(notFoundError, null)
    }
    return done(null, data)
  })
}



module.exports = {
  findAllEmployees,
  findEmployeeById,
  createAndSaveEmployee,
  deleteEmployee,
  updateEmployee
}