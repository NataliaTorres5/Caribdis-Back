import { model, Schema } from "mongoose";

const  productSchema = new Schema({
    name: { type: String},
    description: { type: String, required: true },
    category: { type: String},
    image: { type: String},
    date: {type: Date, default: Date.now},
    price: {type: Number, required:true, min:0.01, max:1000},
    stock: {type: Number, required: true, min:0}
})

const productModel = model('Product', productSchema)
export default productModel