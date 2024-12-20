import express from "express";

import blogRouter from "./blogRouter.js";
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";
import cartRouter from "./cartRouter.js";
import commentRouter from "./commentRouter.js";
import animalRouter from "./animalRouter.js";

const indexRouter = express.Router();

indexRouter.use("/blog", blogRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/user", userRouter );
indexRouter.use("/cart", cartRouter);
indexRouter.use("/comment", commentRouter);
indexRouter.use("/animal", animalRouter);

export default indexRouter