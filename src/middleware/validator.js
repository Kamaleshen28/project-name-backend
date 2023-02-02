const joi = require('joi')
const HttpError = require('../../src/errorHandler/httpError')


const validator = (req, res, next) => {
    const schema = joi.object({
        authorName: joi.string()
                       .min(5)
                       .alphanum()
                       .required(),
        bookName: joi.string()
                    .min(5)
                    .alphanum()
                    .required()
        
    })
    const {error, value} = schema.validate({bookName:req.body.Name, authorName:req.body.Author})
    if(error){
        // console.log("error thrown: ",error )
        throw new HttpError(error.message, 400)
    }
    next();
}



module.exports = {validator}