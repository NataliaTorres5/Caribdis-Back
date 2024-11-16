import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter.js";
import logger from "./middlewares/logger.js";
import connectDB from "./config/database.js";

const server = express();
dotenv.config();
server.use(express.json());
server.use(cors());

server.use("/api", logger, indexRouter);

connectDB();

server.get("/", (request, response) => response.send("hola"));

server.listen(process.env.PORT, () =>
  console.log(`server is being listening in port ${process.env.PORT} `)
);


/*const allowedOrigins = ['http://localhost:5173,']

server.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) { const msg = 'The CORS policy for this site does not allow access from the specified Origin.'; return callback(new Error(msg), false); }
    return callback(null, true)
  },
  methods: 'GET,POST,PUT,DELETE, OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
}));

*/ 