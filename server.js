//  a back-end web framework for building web app in JS
const express = require('express')

// access app Object
const app = express()
const port = 300 

//  start the web server
app.listen(port, 
  () => console.log(`listening on port ${port}`)
)

// middlewares
const logger = require('./middlewares/logger') 
const sessions = require('./middlewares/sessions')

// controllers
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


// (middleware)  log request 
app.use(logger)

// enable sessions
app.use(sessions)

// (middleware) (Single-Page Application)
app.use(express.static('client'))


// parse json body in a POST, PUT or DELETE request, and it assigns the data to req.body
app.use(express.json())


// API routes - controller files
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)


// retrieving random question data from API and assigning the required variables

// const axios = require('axios')
// axios
//   .get('https://jservice.io/api/random')
//   .then(res => {
//     let apiData = res.data[0]
//     let questionId = apiData.id 
//     let question = apiData.question
//     let answer = apiData.answer
//     let value = apiData.value
//     let categoryId = apiData.category
//   })

