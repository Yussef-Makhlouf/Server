import express from "express";
import { dbConeection } from "./database/dbConnection.js";
import productRouter from "./modules/product/product.router.js";
import categoryRouter from "./modules/category/category.router.js";
const app = express();
const port = 3000;
import cors from 'cors';

app.use(cors({
    origin: 'http://localhost:5173', 
  
  
    
  }));
dbConeection();

app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoryRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
