import express from "express";
import blogRouter from "./blogRouter.js";
import productRouter from "./productRouter.js";
import userAuthRouter from "./userAuthRouter.js";
import cartRouter from "./cartRouter.js";
import commentRouter from "./commentRouter.js";

const indexRouter = express.Router();

indexRouter.use("/blog", blogRouter);
indexRouter.use("/product", productRouter);
indexRouter.use("/auth", userAuthRouter);
indexRouter.use("/cart", cartRouter);
indexRouter.use("/comment", commentRouter);

export default indexRouter