import blogModel from "../models/blogModel.js";


const blogServices = {

    async getAllBlogs(){
        try {
            let allBlogs = await blogModel.find()
            return allBlogs
            
        } catch (error) {
            return error
        }
        
    },

    async getOneById(id){
        try{
            let blog = await blogModel.find({id})
            if(!blog) throw new Error(`Blog does not exist`)
                return blog

        }catch (error) {
            return error

        }

    },
    async createOneBlog (data) {

        try {
            let newBlog = await blogModel.create({data})
            if(!newBlog) throw Error (`blog already exists`)

        } catch (error) {
            return error
        }

    }, 

    async deleteOneBlog (id) {
        try {
            let comment = await blogModel.findByIdAndDelete({id})
            if(!comment) throw new Error (`Couldn't delete the blog`)
                return comment
        } catch (error) {
    
            return (error)
        }
    },

    async updateOneBlog (id) {
        try {
            
            let blogt = await blogModel.findByIdAndUpdate({_id:id}, data, {new:newTrue})
            if (!blog) throw new error (`Could't find the blog, we couldn't update`)
        } catch (error) {
            return(error)
        }
    }


}

export default blogServices