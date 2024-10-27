import { model, Schema } from "mongoose";

const  blogSchema = new Schema({
    date: {type: Date, default: Date.now},
    user: [{ type: Schema.Types.ObjectId, ref: 'admin' }],
    title: { type: String},
    text: { type: String, required: true },
    image:  { type: String },
})

const blogModel = model('Blog', blogSchema)
export default blogModel