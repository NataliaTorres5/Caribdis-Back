import productModel from "../models/productModel.js";

const productServices = {
  async getAllProducts() {
    try {
      let allProducts = await productModel.find();
      return allProducts;
    } catch (error) {
      console.log(error, "no se encuentran producto")
      return error;
    }
  },

  async getOneById(id) {
    try {
      let product = await productModel.findOneById( id );
      if (!product) throw new Error(`The Id does not match`);
      return product;
    } catch (error) {
      console.log(error, "no se encuentran producto")
      return error;
    }
  },
   
  async createOneProduct(data){
    console.log(data, "datos de ceate")
    try {
        let newProduct = await productModel.create(data)
        if(!newProduct) throw new Error(`The product couldn't be created`)
    } catch (error) {
        return error;
    }
  },

  async deleteOneProduct(id) {
    try {
       let product = await productServices.findByIdAndDelete(id);
       if(!product) throw new Error(`Couldn't delete the product`); 
       return product
    } catch (error) {
        return(error)
    }
    },
    async updateOneProduct(id, data, newTrue) {
        try {
            let product = await productModel.findByIdAndUpdate({ _id: id }, data, {
              new: newTrue,
            })
            if (!product) throw new error (`Could't find the product, we couldn't update`)
        } catch (error) {
            return error
        }
      }
  }


export default productServices
