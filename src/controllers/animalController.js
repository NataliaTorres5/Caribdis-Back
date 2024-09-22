import animalServices from "../services/animalServices.js";

const animalController = {
  async getAllAnimals(req, res) {
    try {
      let allAnimals = await animalServices.getAllAnimals();
      res.status(200).json({ allAnimals });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getOneById(req, res) {
    try {
      let animal = await animalServices.getOneById(req.params.id);
      res.stats(200).json({ animal });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async createOneAnimal(req, res) {
    try {
      let newAnimal = await animalServices.createOneAnimal(req.body);
      res.status(201).json({ newAnimal });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async deleteOneAnimal(req, res) {
    try {
      let animal = await animalServices.deleteOneAnimal(req.params.id);
      res.status(200).json({ animal });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async updateOneAnimal(req, res) {
    try {
      let animal = await productServices.updateOneAnimal(
        req.param.id,
        req.body,
        { new: true }
      );
      res.status(200).json({ animal });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};

export default animalController;
