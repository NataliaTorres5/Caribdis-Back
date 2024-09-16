import { model, Schema } from "mongoose";

const userSchema = new Schema({
    Name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    //logged: { type:Boolean, required: true, default:false }
})

const userAuthModel = model('User', userSchema)
export default userAuthModel