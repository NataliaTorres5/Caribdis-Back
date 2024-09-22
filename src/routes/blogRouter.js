import blogController from "../controllers/blogController.js";
import express from "express"; 

const blogRouter = express.Router();

blogRouter.get("/", blogController.getAllBlogs)
blogRouter.get("/:id", blogController.getOneById)
blogRouter.post("/", blogController.createOneBlog)
blogRouter.delete("/:id", blogController.deleteOneBlog)
blogRouter.put("/:id", blogController.updateOneBlog)

export default blogRouter