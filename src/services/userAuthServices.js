import userAuthModel from '../models/userAuthModel.js'

const userServices = {
    async getAllUsers() {
        try {
            let allUsers = await userAuthModel.find()
            return allUsers
        } catch (error) {
            return error
        }

    },
    async getOneUserByID(id) {
        try {
            let user = await userAuthModel.findById({ id })
            if (!user) throw new Error(`The provided ID doesn't match any registered IDs`)
            return user
        } catch (error) {
            return error
        }
    },
    async getOneUserByName(data) {
        try {
            let user = await userAuthModel.findOne({ firstName: data.firstName })
            if (!user) throw new Error('No users found with the provided name')
            return user
        } catch (error) {
            return error
        }
    },
    async updateUser(id, data, ){
        try {
            let updatedUser = await userAuthModel.findByIdAndUpdate( {id}, data, {new:true} )
            if(!updatedUser) throw new Error( `The provided ID doesn't match any registered users, couldn't update` )
            return updatedUser
        } catch (error) {
            return error
        }
    },
    async deleteUser(){
        try {
            let user = await userAuthModel.findByIdAndDelete( {id} )
           if(!user) throw new Error( `The provided ID doesn't match any registered IDs, couldn't delete` )
            return user
        } catch (error) {
            return error
        }
    },
    async createOneUser( data ){
        try {
            let user = await userAuthModel.create( data )
            if(!user) throw new Error( `User couldn't be created` )
            return user
        } catch (error) {
            return error
        }
    }
}

export default userServices