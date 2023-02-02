const {books} = require('../../database/models')
const HttpError = require('../../src/errorHandler/httpError')
const services = require('../../src/services/books')

describe('services', () => {
    describe('add', () => {
        // it('should 11', async () => {
        //     jest.spyOn(books, 'findOne').mockResolvedValue({
        //         id: 5,
        //         Name: "Master of the Game of thornskjhgs",
        //         updatedAt: "2023-02-01T21:14:34.334Z",
        //         createdAt: "2023-02-01T21:14:34.334Z",
        //         Author: null
        //     })
            
        //     const body = {
        //         id: 5,
        //         Name: "Master of the Game of thornskjhgs",
        //         updatedAt: "2023-02-01T21:14:34.334Z",
        //         createdAt: "2023-02-01T21:14:34.334Z",
        //         Author: null
        //     }
        //     expect(() =>  services.add(body)).toThrow(new HttpError('Book already exists', 422));
        // })

        // it('should 22', async () => {
        //     jest.spyOn(books, 'findOne').mockResolvedValue(null)
        //     const body = {
        //         id: 5,
        //         Name: "Master of the Game of thornskjhgs",
        //         updatedAt: "2023-02-01T21:14:34.334Z",
        //         createdAt: "2023-02-01T21:14:34.334Z",
        //         Author: null
        //     }
        //     expect(await services.add(body)).toEqual({
        //         "id": 5,
        //         "Name": "Master of the Game of thornskjhgs",
        //         "updatedAt": "2023-02-01T21:14:34.334Z",
        //         "createdAt": "2023-02-01T21:14:34.334Z",
        //         "Author": null
        //     });
        // })
    })
    describe('get', () => {
        // it('should 11', async () => {
        //     jest.spyOn(books, 'findAll').mockResolvedValue([
        //         {
        //             "id": 12,
        //             "Author": "tantantann",
        //             "Name": "Master of the Game of",
        //             "createdAt": "2023-02-02T08:49:43.900Z",
        //             "updatedAt": "2023-02-02T08:49:43.900Z"
        //         }
        //     ])
            
        //     const query = {
        //         Author:"tantantann"
        //     }
        //     expect(await services.get(query)).toEqual([
        //         {
        //             "id": 12,
        //             "Author": "tantantann",
        //             "Name": "Master of the Game of",
        //             "createdAt": "2023-02-02T08:49:43.900Z",
        //             "updatedAt": "2023-02-02T08:49:43.900Z"
        //         }
        //     ]);
        // })

        it('should 22', async () => {
            jest.spyOn(books, 'findAll').mockResolvedValue([])
            const query = {
                Author:"tantannn"
            }
            
            expect(() => services.get(query)).toThrow(new HttpError('Not Found', 404));
        })
    })
})
