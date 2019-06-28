const request = require('supertest')
const server = require('./server')
const db = require('../config/db')
require('dotenv').config()

describe('server.js', () => {
    it('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})

describe('Get /', () => {
    it('should return 200', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    })
})