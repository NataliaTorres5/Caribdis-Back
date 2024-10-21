import { isValidObjectId } from "mongoose";

function validateObjectId (id) {
    console.log("validator id passes through here", id) 
    return isValidObjectId(id);
}
export default validateObjectId