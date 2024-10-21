import animalModel from "../models/animalModel.js";


const animalServices = {
  async getAllAnimals() {

    try {
      return await animalModel.find()
    } catch (error) {
      console.log(error, "no se encuentran animales")
      
    }
   
  },

  async getOneById(id) {
    try {
      let animal = await animalModel.findById(id)
      return animal
    } catch (error) {
      console.log(error, "no se puede traer animal por id")
    }
   
  },

  async createOneAnimal(data) {
    try {
      let newAnimal = await animalModel.create(data);
      if (!newAnimal) throw new Error(` No se pudo crear el animal`);
      return newAnimal
    } catch (error) {
      console.log(error, "error no se pudo crear animal")
    }
  },

  async deleteOneAnimal(id) {
    console.log(id, "id que se pasa a deleteone en servicios")

    try {
      let animal = await animalModel.findByIdAndDelete(id);
      if (!animal)
        throw new Error(`couldn't find the animal,  we couldn't delete`);
      return animal;
    } catch (error) {
      return error;
    }
  },

  async updateOneAnimal(id, data, newTrue) {
    try {
      let animal = await animalModel.findByIdAndUpdate({ _id: id }, data, {
        new: newTrue,
      });
      if (!animal)
        throw new error(`Could't find the animal, we couldn't update`);
    } catch (error) {
      return error;
    }
  },
};

export default animalServices;
