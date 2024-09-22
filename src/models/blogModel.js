import { model, Schema } from "mongoose";

const  blogSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'admin' }],
    title: { type: String},
    text: { type: String, required: true },
    comments: { type: Schema.Types.ObjectId, ref: 'comment' }
})

const blogModel = model('Blog', blogSchema)
export default blogModel