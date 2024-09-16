import commentServices from "../services/commentServices.js";

const commentController = {
  async getAllComments(req, res) {
    try {
      let allComments = await commentServices.getAllComments();
      res.status().json({ allComments });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async getOneById(req, res) {
    try {
      let comment = await commentServices.getOneById(req.params.id);
      res.status(200).json({ comment });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async createOneComment(req, res){
    try {
        let newComment = await commentServices.createOneComment(req.body)
        res.status(201).json({newComment});
    } catch (error) {
        res.status(400).json({ error });
    }
        
    }, 
    async deleteOneComment (req, res){

        try {
            let comment = await commentServices.deleteOneComment(req.param.id)
            res.status(200).json({comment});
        } catch (error) {
            res.status(400).json({ error });
        }

    }, 
    async updateOneComment (req, res){

        try {
            
            let comment = await commentServices.updateOneComment(req.param.id, req.body, {new:true})
            res.status(200).json({comment});
        } catch (error) {
            res.status(400).json({ error });
        }
    }

  }


export default commentController