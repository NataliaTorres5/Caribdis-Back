
import passport from "passport";
import dotenv from "dotenv";
import userServices from "../../../services/userServices.js";
dotenv.config();
import {Strategy, ExtractJwt} from "passport-jwt"



const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}

const authenticate = async (payload, done) => { //parecido al concepto de next

    try {
        console.log(payload)
       const user = await  userServices.getByEmail(payload.email)
        if(!user) return done(null, false);
        return done(null, user);
   } catch (error) {
    return done(error, false);
   }

}


export default passport.use(new Strategy(options, authenticate));