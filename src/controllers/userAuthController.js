import userAuthServices from "../services/userAuthServices.js"
import userAuthModel from "../models/userAuthModel.js"
import bcrypt from 'bcrypt'

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
    async createOneUser(req, res) {
        console.log(req.body)
        try {
            let user = await userAuthServices.createOneUser( req.body )
            res.status(201).json({user})
        } catch (error) {
            res.status(400).json({ message: `Cant create user`})
        }
    },
    async logInUser( req, res ){
       
        try {
            const data=req.body
            const  emailInUse = await userAuthServices.findOne({email: data.email})
            let user = await userAuthModel.findOne( { email:req.body.email } )
            if(!user) throw new Error(`Email or password isn't registed`)
                bcrypt.compareSync(data.password, user.password)
            const validPassword = bcrypt.compareSync(data.password || '', user.password)
            if(!validPassword) throw new Error(`Email or password isn't registed`)
                res.status(200).json({error:false, response: newUser})
            user.logged = true
            res.status()
            res.status(200).json( {message: 'Log in successful', user} )
        } catch (error) {
            res.status(400).json({error})
        }
    },
    async signUpUser( req, res ){
       
        try {
            const data = req.body
            const emailInUse = await userAuthServices.findOne({email: data.email})
            if (emailInUse) throw new Error ("Email already exists")

                bcrypt.hashSync(data.password, 10)

                const passwordHash = bcrypt.hashSync(data.password || '', 10)

                data.password = passwordHash

                const newUser = await userServices.create( data )

                res.status(201).json( {message: 'Sign up successful', newUser} )
        } catch (error) {

            res.status(400).json({error:error.message})
            
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