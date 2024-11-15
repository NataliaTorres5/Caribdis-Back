import productServices from "../services/productServices.js";

import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";

const productController = {
  async getAllProducts(req, res) {
   
      let allproducts= await productServices.getAllProducts();
      httpResponse(res, 200, allproducts )
     
  },

  async getOneById(req, res) {
    let products = await productServices.getOneById(req.params.id);
    httpResponse(res, 200, products);
  },

  async createOneProduct(req, res) {
    console.log("new product added", req.body);
    let newProduct = await productServices.createOneProduct(req.body);
    console.log(newProduct, "producto created");
    httpResponse(res, 200, newProduct);
  },

  async deleteOneProduct(req, res) {
    console.log(req.params.id, "req params desde controller producto")
    let product = await productServices.deleteOneProduct(req.params.id);
    httpResponse(res, 200, product);
  },

  async updateOneProduct(req, res) {
    let product = await productServices.updateOneProduct(
      req.params.id,
      req.body,
      { new: true }
    );
    httpResponse(res, 200, product);
  },
};

export default {
  getAllProducts: catched(productController.getAllProducts), 
  getOneById: catched(productController.getOneById),
  createOneProduct: catched(productController.createOneProduct),
  deleteOneProduct: catched(productController.deleteOneProduct),
  updateOneProduct: catched(productController.updateOneProduct)

};
