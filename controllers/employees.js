const Employee = require('../models/Employee')

const findAllEmployees = (done) => {
  Employee.find({}, (err, data) => {
    if (err) {
      return done(err, null)
    }
    return done(null, data)
  })
}

const findEmployeeById = (employeeIdentifier, done) => {
  Employee.findOne({ _id: employeeIdentifier }, (err, data) => {
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
    firstJob: informations.firstJobfirstJobfirstJobfirstJobfirstJob
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

module.exports = {
  findAllEmployees,
  findEmployeeById,
  createAndSaveEmployee,
  deleteEmployee
}