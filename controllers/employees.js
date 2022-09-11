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

module.exports = {
  findAllEmployees,
  findEmployeeById
}