import productController from "../controllers/productController.js";
import express from "express";  
import passport from "passport";
import validator from "../middlewares/validator/validator.js";
import productSchema from "../middlewares/validator/schemas/productSchema.js";

const productRouter = express.Router(); 

productRouter.get("/", productController.getAllProducts)
productRouter.get("/:id", productController.getOneById)
productRouter.post("/",validator(productSchema), productController.createOneProduct)
productRouter.delete("/:id", productController.deleteOneProduct)
productRouter.put("/:id", passport.authenticate("jwt", {session: false} ), productController.updateOneProduct)

export default productRouter