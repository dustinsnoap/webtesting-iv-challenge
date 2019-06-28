const db = require('../config/db')
const {get_all, insert, find_by} = require('./model')

describe('testing model', () => {
    describe('get_all()', () => {
        afterEach(async () => {
            await db('testing').truncate()
        })
        it('should return an empty array', async() => {
            const res = await get_all()
            expect(res).toEqual([])
        })
    })
    describe('insert(benson)', () => {
        afterEach(async () => {
            await db('testing').truncate()
        })
        it('should insert bensons into the db', async () => {
            await insert({benson: 'this'})
            await insert({benson: 'that'})

            const bensons = await get_all()

            expect(bensons).toHaveLength(2)
        })
        it('should return the correct benson on insert', async () => {
            const benson = await insert({benson: 'this'})
            expect(benson.benson).toBe('this')
        })
    })
    describe('find_by()', () => {
        afterEach(async () => {
            await db('testing').truncate()
        })
        it('should return undefined on invalid id', async () => {
            const benson = await find_by({id: 200})
            expect(benson).toBeUndefined()
        })
    })
})