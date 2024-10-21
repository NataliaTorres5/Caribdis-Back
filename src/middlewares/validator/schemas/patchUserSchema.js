import Joi from "joi";

const patchUserSchema = Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    country: Joi.string().optional(),
    address:Joi.string().optional(),
    img: Joi.string().uri().optional(),
}).messages({
    'any.required': '{#label} is required.',
    'string.email': 'Email must contain a valid address.',
    'string.uri': 'Photo must contain a valid URL.',
    'any.min': `{#label} must be at least {#limit} characters.`
})

export default patchUserSchema

