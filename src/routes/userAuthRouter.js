import express from 'express'
import userAuthController from '../controllers/userAuthController.js'
import validator from "../middlewares/validator/validator.js"
import logInSchema from '../middlewares/validator/schemas/logInSchema.js'
import registerUpSchema from '../middlewares/validator/schemas/registerUpSchema.js'
import passport from 'passport'

const authRouter = express.Router()

const consoleLog = (req, res, next) => {
    console.log("paso por aca");
    console.log("req", req);
    console.log("req.user", req.user)
    next();
};

authRouter.post("/login", validator(logInSchema), userAuthController.logInUser)

authRouter.post("/token", passport.authenticate("jwt", {session: false}), userAuthController.logInWithToken)

authRouter.post("/register", validator(registerUpSchema), userAuthController.registroUsuario)

authRouter.put("/:id", passport.authenticate("jwt", {session:false}), userAuthController.updateUser)

authRouter.get("/", userAuthController.getAllUsers)


authRouter.get("/:id", userAuthController.getOneUserById)

authRouter.get(":email", userAuthController.getByUserEmail)

authRouter.delete(":id", userAuthController.deleteUser)



/*
authRouter.get( '/', userAuthController.getAllUsers )
authRouter.post( '/', userAuthController.createOneUser )
authRouter.get( '/:id', userAuthController.getOneUserByID )
authRouter.get( '/', userAuthController.getOneUserByName )
authRouter.delete( '/:id', userAuthController.deleteUser )
authRouter.put( '/:id', userAuthController.updateUser )
*/

export default authRouter