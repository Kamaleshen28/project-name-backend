const services = require('../services/books')
const HttpError = require('../../src/errorHandler/httpError')
const {validator} = require('../middleware/validator')


const addBook = async (req, res) => {
    try{
        // const {error, value} = validator.validate({bookName:req.body.Name, authorName:req.body.Author})
        // if(error){
        //     throw new HttpError(error.message, 400)
        // }
        
        
        const book = await services.add(req.body);
        res.status(201).json({book:book})
    }catch(error){
        if(error instanceof HttpError){
            res.status(error.code).json({msg:error.message})
        }else{
            res.status(500).json({msg:'Something went wrong, try again later..'})
        }
    }
}

const getBookBasedOnAuthor = async (req, res) => {
    try{
        const {query} = req;
        const book = await services.get(query);
        res.status(200).json({book:book})
    }catch(error){
        if(error instanceof HttpError){
            res.status(error.code).json({msg:error.message})
        }else{
            res.status(500).json({msg:'Something went wrong, try again later..'})
        }
    }
}

const getLike = async (req, res) => {
    try{
        console.log("req.Q ", req.query)
        const {query} = req;
        const book = await services.getL(query);
        res.status(200).json({book:book})
    }catch(error){
        if(error instanceof HttpError){
            res.status(error.code).json({msg:error.message})
        }else{
            res.status(500).json({msg:'Something went wrong, try again later..'})
        }
    }
}


module.exports = {
    addBook,
    getBookBasedOnAuthor,
    getLike
}