import { isValidObjectId } from "mongoose";

function validateObjectId (id) {
    console.log("validator id", id) 
    return isValidObjectId(id);
}
export default validateObjectId