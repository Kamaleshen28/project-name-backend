const { Op } = require("sequelize");
const {books} = require('../../database/models')
const HttpError = require('../../src/errorHandler/httpError')

const add = async (body) => {
    const book = await books.findOne({
        where:{Name:body.Name}
    })
    console.log("book: ", book)

    if(book!=null){
        throw new HttpError('Book already exists', 422);
    }
    return await books.create(body);
}

const get = async (query) => {
    const book =  await books.findAll({    //if null what shall i do?.
        where:{Author:query.Author}
    })
    if(book.length === 0){
        // console.log('qa')
        throw new HttpError('Not Found', 404);
    }
    return book;
}

const getL = async (query) => {
    const book =  await books.findAll({    
        where:{
            Name:{
                [Op.like]:'%'+query.Name+'%'
            }
        }
    })
    if(book==null){
        throw new HttpError('Not Found', 404);
    }
    return book;
}


module.exports = {
    add,
    get,
    getL
}