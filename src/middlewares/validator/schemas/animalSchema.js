import joi from "joi";

const animalSchema = joi
  .object({
    //se usa object porque del body se saca un objeto
    date: joi.date(),
    name: joi.string().required(),
    description: joi.string().required(),
    commonName: joi.string().required(),
    image: joi.string(),
    category: joi.string()

  })
  .messages({
    "any.required": "{#label} is required.",
  });

export default animalSchema ;
