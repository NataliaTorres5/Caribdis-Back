import commentServices from "../services/commentServices.js";
import catched from "../utils/catched.js"
import customError from "../utils/customError.js";
import httpResponse from "../utils/httpResponse.js";

const commentController = {
  async getAllComments(req, res) {
      let allComments = await commentServices.getAllComments();
      httpResponse(res, 200, allComments)
 
  },
  async getOneById(req, res) {
      let comment = await commentServices.getOneById(req.params.id);
      httpResponse(res, 200, comment)

  },
  async createOneComment(req, res) {
      let newComment = await commentServices.createOneComment(req.body);
      httpResponse(res, 200, newComment)

  },
  async deleteOneComment(req, res) {
  
      let comment = await commentServices.deleteOneComment(req.param.id);
      console.log(comment)
      if(!comment) throw new customError("the comment id does not match with the comment", 400)
      httpResponse(res, 200, comment, "deleted successfull")

  },
  async updateOneComment(req, res) {

      let comment = await commentServices.updateOneComment(
        req.param.id,
        req.body,
        { new: true });
        httpResponse(res, 200, comment)
 
  },    
  async getByProyect(req, res) {
    const proyectId = req.params.proyect;
    const proyect = await commentServices.getByProyect(proyectId);
    
    httpResponse(res, 200, proyect);
  
    },

    async getByBlogtId (req, res) {
      const proyectId = req.params.id; 
      const proyect = await commentServices.getByProyectId(proyectId); 
      if(!proyect) throw new customError("no comments found", 404);
 
      httpResponse(res, 200, proyect);
    }
};

export default {
  getAllComments: catched(commentController.getAllComments),
  getOneById: catched(commentController.getOneById),
  createOneComment: catched(commentController.createOneComment),
  deleteOneComment: catched(commentController.deleteOneComment),
  updateOneComment: catched(commentController.updateOneComment),
  getByProyect: catched(commentController.getByProyect),
  getByProyectId: catched(commentController.getByProyectId), 
} ;
