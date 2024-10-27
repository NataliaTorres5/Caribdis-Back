import productServices from "../services/productServices.js";

import catched from "../utils/catched.js";
import httpResponse from "../utils/httpResponse.js";

const productController = {
  async getAllProducts(req, res) {
   
      let allAnimals = await productServices.getAllProducts();
      httpResponse(res, 200, allAnimals )
     
  },

  async getOneById(req, res) {
    let animals = await productServices.getOneById(req.params.id);
    httpResponse(res, 200, animals);
  },

  async createOneProduct(req, res) {
    console.log("new animal data" ,req.body);
    let newAnimal = await productServices.createOneProduct(req.body);
    console.log(newAnimal, "producto created");
    httpResponse(res, 200, newAnimal );
  },

  async deleteOneProduct(req, res) {
    console.log(req.params.id, "req params desde controller producto")
    let animal = await productServices.deleteOneProduct(req.params.id);
    httpResponse(res, 200, animal);
  },

  async updateOneProduct(req, res) {
    let animal = await productServices.updateOneProduct(
      req.params.id,
      req.body,
      { new: true }
    );
    httpResponse(res, 200, animal);
  },
};

export default {
  getAllProducts: catched(productController.getAllProducts), 
  getOneById: catched(productController.getOneById),
  createOneProduct: catched(productController.createOneProduct),
  deleteOneProduct: catched(productController.deleteOneProduct),
  updateOneProduct: catched(productController.updateOneProduct)

};
