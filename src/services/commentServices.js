import commentModel from '../models/commentModel.js'

const commentServices = {

    async getAllComments() {
        try {
            let allComments = await commentModel.find()
            return allComments
        } catch (error) {
            return error
        }
    },

    async getOneById(id){
        try{
            let comment = await commentModel.findById({id})
            if(!comment) throw new Error(`The Id does not match`)
            return comment
        }
        catch (error){
            return error

        }
    }, 

    async createOneComment (data) {
        try{
            let newComment = await commentModel.create({data})
            if(!newComment) throw new Error(`The comment couldn't be created`)
        }catch (error){
            return error 
        }
    },

    async deleteOneComment (id) {
    try {
        let comment = await commentModel.findByIdAndDelete({id})
        if(!comment) throw new Error(`couldn't find the comment,  we couldn't delete`)
        return comment
        
    } catch (error) {
        return(error)
        
    }
    },

    async updateOneComment (id, data, newTrue) {
        try {

            let comment = await commentModel.findByIdAndUpdate({_id:id}, data, {new:newTrue})
            if (!comment) throw new error (`Could't find the comment, we couldn't update`)
            
        } catch (error) {
            return(error)
            
        }
    }
    
}

export default commentServices