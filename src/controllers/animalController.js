import animalServices from "../services/animalServices.js";
import catched from "../utils/catched.js";
import customError from "../utils/customError.js";
import httpResponse from "../utils/httpResponse.js";

const animalController = {
  async getAllAnimals(req, res) {
   
      let allAnimals = await animalServices.getAllAnimals();
      httpResponse(res, 200, allAnimals )
     
  },

  async getOneById(req, res) {
    let animals = await animalServices.getOneById(req.params.id);
    httpResponse(res, 200, animals);
  },

  async createOneAnimal(req, res) {
    console.log("new animal data" ,req.body);
    let newAnimal = await animalServices.createOneAnimal(req.body);
    console.log(newAnimal, "animal created");
    httpResponse(res, 200, newAnimal );
  },

  async deleteOneAnimal(req, res) {
    console.log(req.params.id, "req params desde controller animal")
    let animal = await animalServices.deleteOneAnimal(req.params.id);
    httpResponse(res, 200, animal);
  },

  async updateOneAnimal(req, res) {
    let animal = await animalServices.updateOneAnimal(
      req.params.id,
      req.body,
      { new: true }
    );
    httpResponse(res, 200, animal);
  },
};

export default {
  getAllAnimals: catched(animalController.getAllAnimals), 
  getOneById: catched(animalController.getOneById),
  createOneAnimal: catched(animalController.createOneAnimal),
  deleteOneAnimal: catched(animalController.deleteOneAnimal),
  updateOneAnimal: catched(animalController.updateOneAnimal)

};
