import commentModel from "../models/commentModel.js";
import customError from "../utils/customError.js";
import validateObjectId from "../utils/validateObjectId.js";

const commentServices = {
  async getAllComments() {
    try {
      let allComments = await commentModel.find();
      return allComments;
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },

  async getOneById(id) {
    try {
      let comment = await commentModel.findById({ _id:id });
      if (!comment) throw new Error(`The Id does not match`);
      return comment;
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },

  async createOneComment(data) {
    try {
      let newComment = await commentModel.create(data);
      if (!newComment) throw new Error(`The comment couldn't be created`);
      return newComment;
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },

  async deleteOneComment(id) {
    try {
      let comment = await commentModel.findByIdAndDelete(id);
      console.log(comment)
      if (!comment)
        throw new Error(`couldn't find the comment,  we couldn't delete`);
      return comment;
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },

  async updateOneComment(id, data, newTrue) {
    try {
      let comment = await commentModel.findByIdAndUpdate({ _id: id }, data, {
        new: newTrue,
      });
      if (!comment)
        throw new error(`Could't find the comment, we couldn't update`);
      return comment
    } catch (error) {
      throw new customError(error.message, 400);
    }
  },
  async getByProyect(proyectId) {

    try {
       const validated = validateObjectId(proyectId)
       if(!validated) throw new customError("invalid Id");
        return await commentModel.find({ proyect: proyectId });
        
    } catch (error) {
        throw new customError(error.message, 400);
    }
},
async getByProyectId (proyectId){
    const validated = validateObjectId(proyectId)
    if(!validated)  throw new customError("invalid id",400);
    return await commentModel.find({proyect: proyectId}).populate({path: "user", select: "-_id"}) 
  

}
};

export default commentServices;
