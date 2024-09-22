import animalController from "../controllers/animalController.js";
import express from "express";  

const animalRouter = express.Router();

animalRouter.get("/", animalController.getAllAnimals)
animalRouter.get("/:id", animalController.getOneById)
animalRouter.post("/", animalController.createOneAnimal)
animalRouter.delete("/:id", animalController.deleteOneAnimal)
animalRouter.put("/:id", animalController.updateOneAnimal)

export default animalRouter