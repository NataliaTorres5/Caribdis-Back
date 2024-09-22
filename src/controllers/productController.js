import productServices from "../services/productServices.js";

const productController = {
  async getAllProducts(req, res) {
    try {
      let allProducts = await productServices.getAllProducts();
      res.status(200).json({ allProducts });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getOneById(req, res) {
    try {
      let product = await productServices.getOneById(req.params.id);
      res.stats(200).json({ product });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async createOneProduct(req, res) {
    try {
      let newProduct = await productServices.createOneProduct(req.body);
      res.status(201).json({ newProduct });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async deleteOneProduct(req, res) {
    try {
      let product = await productServices.deleteOneProduct(req.params.id);
      res.status(200).json({ product });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async updateOneProduct(req, res) {
    try {
      let product = await productServices.updateOneProduct(
        req.param.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ product });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default productController;
