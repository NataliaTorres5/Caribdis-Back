import Joi from "joi";

const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
}).messages({
    "any.required": "{#label} is required.",
    }) 
    

export default logInSchema