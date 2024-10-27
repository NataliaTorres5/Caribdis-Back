import { model, Schema } from "mongoose";

const  productSchema = new Schema({
    name: { type: String},
    description: { type: String, required: true },
    category: { type: String},
    image: { type: String},
    date: {type: Date, default: Date.now},
    price: {type: Number}
})

const productModel = model('Product', productSchema)
export default productModel