import Joi from "joi";

const registerUpSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    country: Joi.string().optional(),
    address:Joi.string().optional(),
    img: Joi.string().uri().optional(),
    password: Joi.string().min(4).max(25).required(),
    role: Joi.string().valid('admin', 'user').default('user'),
}).messages({
    'any.required': '{#label} is required.',
    'string.email': 'Email must contain a valid address.',
    'string.uri': 'Photo must contain a valid URL.',
    'any.min': `{#label} must be at least {#limit} characters.`
})

export default registerUpSchema


