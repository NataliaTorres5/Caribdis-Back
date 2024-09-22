import { model, Schema } from "mongoose";

const  animalSchema = new Schema({
    name: { type: String},
    description: { type: String, required: true },
    category: { type: String},
    image: { type: String},
})

const animalModel = model('Animal', animalSchema)
export default animalModel