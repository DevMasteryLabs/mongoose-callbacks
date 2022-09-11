const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const Employee = require('./models/Employee')
const { 
  findEmployeeById, 
  findAllEmployees, 
  createAndSaveEmployee, 
  deleteEmployee,
  updateEmployee 
} = require('./controllers/employees')

const { findAllDepartments } = require('./controllers/departments')

dotenv.config()

// CRUD: Create Read Update Delete

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Welcome to our API !'})
})

app.get('/employees', (req, res) => {
  findAllEmployees((error, data) => {
    if (error) {
      return res.status(500).json(error)
    }
    return res.json(data)
  })
})

app.get('/employees/:id', (req, res) => {
  const employeeId = req.params.id // { id: '631c7bd09c89e79615d7e482' }
  findEmployeeById(employeeId, (error, data) => {
    if (error) {
      return res.json(error)
    }
    return res.json(data)
  })
})

app.post('/employees', (req, res) => {
  const employeeInformations = req.body
  console.log(employeeInformations)
  createAndSaveEmployee(employeeInformations, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.delete('/employees/:id', (req, res) => {
  deleteEmployee(req.params.id, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.put('/employees/:id', (req, res) => {
  updateEmployee(req.params.id, req.body, (err, data) => {
    if (err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.get('/departments', (req, res) => {
  findAllDepartments((err, data) => {
    if (err) {
      return req.json(err)
    } else {
      return res.json(data)
    }
  })
})

const port = process.env.PORT


mongoose.connect(process.env.DB_CONNECTION, (error) => {
  if (error) {
    console.log(error.message)
    return
  }
  console.log('Connection with database established')
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
})