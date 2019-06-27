const express = require('express')

// const routes = require('../routes/')

const server = express()
server.use(express.json())

//ROUTES
// server.use('/api/'. routes)

module.exports = server