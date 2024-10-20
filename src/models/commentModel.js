import { model, Schema } from "mongoose";

const  commentSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    title: { type: String},
    text: { type: String, required: true },
    blog: { type: Schema.Types.ObjectId, ref: 'blog' }
})

const commentModel = model('Comment', commentSchema)
export default commentModel