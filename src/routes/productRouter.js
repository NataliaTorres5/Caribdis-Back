import productController from "../controllers/productController.js";
import express from "express";

const productRouter = express.Router(); 

productRouter.get("/", productController.getAllProducts)
productRouter.get("/:id", productController.getOneById)
productRouter.post("/", productController.createOneProduct)
productRouter.delete("/:id", productController.deleteOneProduct)
productRouter.put("/:id", productController.updateOneProduct)

export default productRouter