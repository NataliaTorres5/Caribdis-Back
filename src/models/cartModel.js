import { model, Schema } from "mongoose";

const cartSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 100,
  },
  lastname: {
    type: String,
    required: true,
    min: 4,
    max: 100,
  },
  user: {
     type: Schema.Types.ObjectId, ref: 'user',
    ref: "users",
    required: true,
  },
  productName: {
    type: Array,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  state: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  shippingadress: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  mail: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    min: 6,
    max: 20,
  },
});
const cartModel = model('Cart', cartSchema)
export default cartModel