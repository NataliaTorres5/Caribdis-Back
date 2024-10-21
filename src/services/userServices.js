import mongoose from 'mongoose'; 
import userModel from '../models/userModel.js'
import bcrypt from "bcrypt";
import customError from '../utils/customError.js';

const userServices = {

   async getAllUsers() {
    return await userModel.find()

   },

   async getOneUserById(id) {

    /*
    const idss = "6e8c7d90480ffc252a76f42";
   const isValidHex = /^[0-9a-fA-F]{24}$/.test(idss);
   console.log("El ID tiene caracteres hexadecimales válidos:", isValidHex);

    console.log(id, "pasa por findid")
    console.log(mongoose.Types.ObjectId.isValid("6e8c7d90480ffc252a76f42"));
    
    
    if (!mongoose.Types.ObjectId.isValid({_id:id})) {
        throw new Error("Invalid ID format");
  
    }
  
    // Si es válido, proceder a buscar el usuario
    return await userModel.findById(id);*/

    let user = await userModel.findById(id)
    return user

    
   },

    async getByEmail (data) {
        try {
            console.log(data, "data")
            return await userModel.findOne({ email:data})
            
        } catch (error) {
            console.log(error, "error catch")
            
        }
    },

    async deleteUser(id){
        let user = await userModel.findByIdAndDelete({_id: id})
        return user;
    },

    async create(data){
        const passwordHash = bcrypt.hashSync(data.password || "", 10);
      data.password = passwordHash;
      return  await userModel.create(data);

    },
    checkPassword(password, passwordHash){
        return bcrypt.compareSync(password || "", passwordHash);

    },
    async updateUser(id, data){
        let user = await userModel.findByIdAndUpdate(id, data, {
            new: true
        });
        return user
    }
}

export default userServices