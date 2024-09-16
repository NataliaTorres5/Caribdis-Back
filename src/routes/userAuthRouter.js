import express from 'express'
import userAuthController from '../controllers/userAuthController.js'

const authRouter = express.Router()

authRouter.get( '/', userAuthController.getAllUsers )
authRouter.get( '/:id', userAuthController.getOneUserByID )
authRouter.get( '/', userAuthController.getOneUserByName )
authRouter.post( '/register', userAuthController.registerUser )
authRouter.delete( '/:id', userAuthController.deleteUser )
authRouter.put( '/:id', userAuthController.updateUser )

export default authRouter