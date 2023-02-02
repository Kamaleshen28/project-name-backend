const controllers = require('../../src/controllers/books')
const services = require('../../src/services/books')
const HttpError = require('../../src/errorHandler/httpError')

describe('controllers', () => {
    describe('addBook', () => {
        it('should 1', async () => {
            jest.spyOn(services, 'add').mockResolvedValue({
                "id": 4,    "Name": "Master of the Game of thorns",
                "updatedAt": "2023-02-01T19:45:16.038Z",
                "createdAt": "2023-02-01T19:45:16.038Z", "Author": null
            })
            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.addBook(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(201)
            expect(mockRes.json).toBeCalledWith({book:{
                "id": 4,    "Name": "Master of the Game of thorns",
                "updatedAt": "2023-02-01T19:45:16.038Z",
                "createdAt": "2023-02-01T19:45:16.038Z", "Author": null
            }})
        })
        //----
        it('should 2', async () => {
            jest.spyOn(services, 'add').mockRejectedValue(new HttpError('Book already exists', 422));

            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.addBook(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(422)
            expect(mockRes.json).toBeCalledWith({msg:'Book already exists'})
        })
    })
    //-------
    describe('getBookBasedOnAuthor', () => {
        it('should 11', async () => {
            jest.spyOn(services, 'get').mockResolvedValue([
                {
                    "id": 80,
                    "Author": "Sidney Sheldon",
                    "Name": "If Tomorrow Comes (Tracy Whitney Series, #1)",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 100,
                    "Author": "Sidney Sheldon",
                    "Name": "Tell Me Your Dreams",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 90,
                    "Author": "Sidney Sheldon",
                    "Name": "Master of the Game",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 110,
                    "Author": "Sidney Sheldon",
                    "Name": "The Other Side of Midnight (Midnight #1)",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 120,
                    "Author": "Sidney Sheldon",
                    "Name": "Rage of Angels",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                }
            ])
            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.getBookBasedOnAuthor(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(200)
            expect(mockRes.json).toBeCalledWith({book:[
                {
                    "id": 80,
                    "Author": "Sidney Sheldon",
                    "Name": "If Tomorrow Comes (Tracy Whitney Series, #1)",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 100,
                    "Author": "Sidney Sheldon",
                    "Name": "Tell Me Your Dreams",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 90,
                    "Author": "Sidney Sheldon",
                    "Name": "Master of the Game",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 110,
                    "Author": "Sidney Sheldon",
                    "Name": "The Other Side of Midnight (Midnight #1)",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                },
                {
                    "id": 120,
                    "Author": "Sidney Sheldon",
                    "Name": "Rage of Angels",
                    "createdAt": "2023-02-01T17:42:53.866Z",
                    "updatedAt": "2023-02-01T17:42:53.866Z"
                }
            ]})
        })
        //----
        it('should 22', async () => {
            jest.spyOn(services, 'get').mockRejectedValue(new HttpError('Not Found', 404));

            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.getBookBasedOnAuthor(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(404)
            expect(mockRes.json).toBeCalledWith({msg:'Not Found'})
        })
    })

    //----

    describe('getLike', () => {
        it('should -11', async () => {
            jest.spyOn(services, 'getL').mockResolvedValue({
                "id": 4,    "Name": "Master of the Game of thorns",
                "updatedAt": "2023-02-01T19:45:16.038Z",
                "createdAt": "2023-02-01T19:45:16.038Z", "Author": null
            })
            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.getLike(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(200)
            expect(mockRes.json).toBeCalledWith({book:{
                "id": 4,    "Name": "Master of the Game of thorns",
                "updatedAt": "2023-02-01T19:45:16.038Z",
                "createdAt": "2023-02-01T19:45:16.038Z", "Author": null
            }})
        })
        //----
        it('should 222', async () => {
            jest.spyOn(services, 'getL').mockRejectedValue(new HttpError('Not Found', 404));

            const mockReq = {
            }
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            }
            await controllers.getLike(mockReq, mockRes)
            expect(mockRes.status).toBeCalledWith(404)
            expect(mockRes.json).toBeCalledWith({msg:'Not Found'})
        })
    })
})