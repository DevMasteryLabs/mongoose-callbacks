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

module.exports = {
  findAllEmployees,
  findEmployeeById,
  createAndSaveEmployee
}