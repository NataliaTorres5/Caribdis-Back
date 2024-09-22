import blogServices from "../services/blogServices.js";

const blogController = {
  async getAllBlogs(req, res) {
    try {
      let allBlogs = await blogServices.getAllBlogs();
      res.status(200).json({ allBlogs });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getOneById(req, res) {
    try {
      let blog = await blogServices.getOneById(req.params.id);
      res.status(200).json({ blog });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async createOneBlog(req, res) {
    try {
      let newBlog = await blogController.createOneBlog(req.body);
      res.status(201).json({ newBlog });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async deleteOneBlog (req, res) {
    try {
        let blog = await blogServices.deleteOneBlog(req.param.id);
        res.status(200).json({blog})
    } catch (error) {
        res.status(400).json({ error });
    }
  },

  async updateOneBlog (req, res){
    try {
        let blog = await blogServices.updateOneBlog(req.para.id, req.body, {new:true})
        res.status(200).json({blog})
    } catch (error) {
        res.status(400).json({ error });
    }
  }
};

export default blogController