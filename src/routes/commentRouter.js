import commentController from "../controllers/commentController.js";
import express from "express";

const commentsRouter = express.Router();

commentsRouter.get("/", commentController.getAllComments)
commentsRouter.get("/:id", commentController.getOneById)
commentsRouter.post("/", commentController.createOneComment)
commentsRouter.put("/:id", commentController.updateOneComment) 
commentsRouter.delete("/:id", commentController.deleteOneComment)

export default commentsRouter 