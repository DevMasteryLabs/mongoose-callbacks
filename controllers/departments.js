const Department = require('../models/Department')

function findAllDepartments(done) {
  Department.find({}, (err, data) => {
    if (err) {
      return done(err, null)
    } else {
      return done(null, data)
    }
  })
}

module.exports = {
  findAllDepartments
}