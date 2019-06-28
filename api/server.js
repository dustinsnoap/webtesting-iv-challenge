const express = require('express')
const server = express()

const routes = require('../routes/model')

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: 'working :)'})
})

//ROUTES
// server.use('/api/'. routes)

module.exports = server