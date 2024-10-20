import customError from "../../utils/customError.js";

const validator = (schema) => {
    return(req, res, next) => {
        const validate = schema.validate(req.body, {abortEarly: true});
        if(validate.error) {
            throw new customError(validate.error.details[0].message, 409)
        }
        next()
    }
}

export default validator