import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter.js";
import logger from "./middlewares/logger.js";

dotenv.config()
const server = express()
server.use(express.json())
server.use(cors())

server.use("/api", logger,indexRouter ) 
server.get("/", (request, response) => (response.send("hola")))


server.listen(process.env.PORT, ()=> console.log(`server is being listening in port ${process.env.PORT} `))
