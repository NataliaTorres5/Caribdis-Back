import animalModel from "../models/animalModel.js";

const animalServices = {
    async getAllAnimals() {
      try {
        let allAnimals = await animalModel.find();
        return allAnimals;
      } catch (error) {
        return error;
      }
    },
  

    async getOneById(id) {
      try {
        let animal = await animalModel.findById({ id });
        if (!animal) throw new Error(`The Id does not match`);
        return animal;
      } catch (error) {
        return error;
      }
    },
  
    async createOneAnimal(data) {
      try {
        let newAnimal = await animalModel.create({ data });
        if (!newAnimal) throw new Error(`The animal couldn't be created`);
      } catch (error) {
        return error;
      }
    },
  
    async deleteOneAnimal(id) {
      try {
        let animal = await animalModel.findByIdAndDelete({ id });
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