import { model, Schema, mongoose } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    country:  { type: String },
    address: { type: String},
    img:  { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },

})

const userModel = model('user', userSchema)
export default userModel