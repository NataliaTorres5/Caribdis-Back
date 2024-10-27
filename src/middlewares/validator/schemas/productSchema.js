import joi from "joi";

const productSchema = joi
  .object({
    //se usa object porque del body se saca un objeto
    date: joi.date(),
    name: joi.string().required(),
    description: joi.string().required(),
    category: joi.string().required(),
    image: joi.string(),
    price: joi.number(),

  })
  .messages({
    "any.required": "{#label} is required.",
  });

export default productSchema ;
