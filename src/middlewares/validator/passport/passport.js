import passport from "passport";
import dotenv from "dotenv"
import userServices from "../../../services/userAuthServices.js";
import { Strategy, ExtractJwt } from "passport-jwt";

dotenv.config()

const options = {
    jwtFromRequest: ExtractJwt-fromAuthHeaderAsBearenToken(),
    secretOrKey: process.env.SECRET_KEY,
}

const authenthicate = async (payload, done) =>{ //done parecido a concepto de next
    try {
        
        console.log(payload, "payload passport js")
        const user = await userServices.getByEmail(payload.email)
        if(!user) return done(null, false);
        return done(null, user);
    } catch (error) {

        return done(error, false);  
    }
}

export default passport.use(new Strategy(options, authenthicate));