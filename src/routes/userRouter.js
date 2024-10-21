import express from "express";
import userController from "../controllers/userController.js";
import validator from "../middlewares/validator/validator.js";
import logInSchema from "../middlewares/validator/schemas/logInSchema.js"
import registerUpSchema from "../middlewares/validator/schemas/registerUpSchema.js"
import patchUserSchema from "../middlewares/validator/schemas/patchUserSchema.js";
import passport from "../middlewares/validator/passport/passport.js";


const userRouter = express.Router();

const consoleLog = (req, res, next) => {
    console.log("paso por aca");
    console.log("req", req);
    console.log("req.user", req.user);
    next();
  };
/*userRouter.get("/", userController.getAllUsers ) //endpoint
userRouter.post("/", userController.createOneUser )

userRouter.get( '/', userController.getOneUserByName )
userRouter.delete( '/:id', userController.deleteUser )
userRouter.put( '/:id', userController.updateUser )*/

userRouter.post("/signup",validator(registerUpSchema), userController.registroUsuario)
userRouter.post("/token", passport.authenticate("jwt", {session: false} ),  userController.signInwithToken)
userRouter.post("/signin",validator(logInSchema), userController.signInUser)
userRouter.get("/", userController.getAllUsers)
userRouter.get("/:id",  userController.getOneUserById)
userRouter.get(":email", userController.getUserByEmail)
userRouter.delete("/:id", userController.deleteUser)
userRouter.patch("/:id", validator(patchUserSchema ), userController.updateUser)



export default userRouter 