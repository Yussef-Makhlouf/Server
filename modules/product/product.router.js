import express from "express";
import { getAllProducts, getProductById } from "./product.controller.js";

const productRouter = express.Router();

productRouter.get("/getallproducts", getAllProducts);
productRouter.get("/getoneproduct/:id", getProductById);

export default productRouter;
