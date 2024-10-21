import { model, Schema } from "mongoose";

const  animalSchema = new Schema({
    name: { type: String, required:true},
    commonName: { type: String, required:true},
    description: { type: String, required: true },
    category: { type: String},
    image: { type: String},
    date: {type: Date, default: Date.now},
})

const animalModel = model('Animal', animalSchema)
export default animalModel