import userAuthServices from "../services/userAuthServices.js"
import userAuthModel from "../models/userAuthModel.js"

const userAuthController = {
    async getAllUsers(req, res) {
        try {
            let allUsers = await userAuthServices.getAllUsers()
            res.status(200).json({allUsers})
        } catch (error) {
            res.status(400).json({ message: `Cant find users`})
        }
    },
    async getOneUserByID(req, res) {
        try {
            let user = await userAuthServices.getOneUserByID( req.params.id )
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ message: `Cant find user`})
        }
    },
    async getOneUserByName(req, res) {
        try {
            
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ message: `Cant find name`})
        }
    },

    async updateUser(req, res) {
        try {
            let updatedUser = await userAuthServices.updateUser({_id:req.params.id}, req.body, {new:true})
            res.status(200).json({updatedUser})
        } catch (error) {
            res.status(400).json({ message: `Cant update user`})
        }
    },
    async deleteUser(req, res) {
        try {
           let user = await userAuthServices.deleteUser( req.params.id)
            res.status(200).json({user})
        } catch (error) {
            res.status(400).json({ message: `Cant find user to delete`})
        }
    },
    async registerUser(req, res) {
        try {
            let user = await userAuthServices.registerUser( req.body ).save()
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({ message: `Cant create user`})
        }
    },
    async logInUser( req, res ){
        try {
            let user = await userAuthModel.findOne( { email:req.body.email } )
            if(!user) throw new Error(`Email isn't registed`)
            user.logged = true
            res.status()
            res.status(200).json( {message: 'Log in successful', user} )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async LogOutUser(req, res){
        try {
            let user = await userAuthModel.findOne( { email:req.body.email } )
            user.logged = false
            res.status(200).json( 'Log out successful' )
        } catch (error) {
            res.status(400).json({error})
        }
    }
}

export default userAuthController 