import joi from "joi";

const cartSchema = joi
  .object({
    //se usa object porque del body se saca un objeto
  
    name: joi.string().required(),
    lastname: joi.string().required(),
    user: joi.string().required(),
    productName: joi.string().required(),
    state: joi.string().required(),
    shippingadress: joi.string().required(),
    mail: joi.string().required(),
    phone: joi.string().required(),
    image: joi.string(),
    price: joi.number().required(),
    stock: joi.number().required()


  })
  .messages({
    "any.required": "{#label} is required.",
  });

export default cartSchema ;
