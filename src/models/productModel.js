import { model, Schema } from "mongoose";

const  productSchema = new Schema({
    name: { type: String},
    description: { type: String, required: true },
    category: { type: String},
    image: { type: String},
})

const productModel = model('Product', productSchema)
export default productModel