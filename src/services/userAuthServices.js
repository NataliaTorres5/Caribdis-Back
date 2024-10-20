import userAuthModel from '../models/userAuthModel.js'
import bcrypt from "bcrypt"

const userServices = {
    // Crea usuarios y causa que la contraseña sea hasheada
    async create(data){
        const passwordHash = bcrypt.hashSync(data.password || "", 10);
        data.password = passwordHash;
        return await userAuthModel.create(data)
    },

    //chechea la contraseña
    checkPassword(password, passwordHash){
        return bcrypt.compareSync(password || "", passwordHash)
    },

    //Traer usuario por email 
    async getByEmail (data) {
        try {
            console.log(data, "data getbyEmail service")
            return await userAuthModel.findOne({email:data})
        } catch (error){
            console.log(error, "error catch from getByEmail service")
        }
    },

    // Trae un usuario por id
    async getUserById(id) {
        return await userAuthModel.findById({_id:id})
    },

    // trae a todos los usuarios JSON
    async getAllUsers (){
        return await userAuthModel.find()
    },

    //update usuario 
    async updateUser(id, data){
        let userUpdate = await userAuthModel.findByIdAndUpdate(id, data, {new:true})
        return userUpdate
    },

    //borrar usuario
    async deleteUser(id){
        return await userAuthModel.findByIdAndDelete({_id:id})
    }

}

export default userServices