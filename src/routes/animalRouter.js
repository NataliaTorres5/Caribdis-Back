import animalController from "../controllers/animalController.js";
import express from "express";  
import passport from "passport";
import validator from "../middlewares/validator/validator.js";
import animalSchema from "../middlewares/validator/schemas/animalSchema.js"

const animalRouter = express.Router();

animalRouter.get("/", animalController.getAllAnimals)
animalRouter.get("/:id", animalController.getOneById)
animalRouter.post("/",  validator(animalSchema), animalController.createOneAnimal)
animalRouter.delete("/:id", animalController.deleteOneAnimal)
animalRouter.put("/:id", passport.authenticate("jwt", {session: false} ), validator(animalSchema), animalController.updateOneAnimal)

export default animalRouter