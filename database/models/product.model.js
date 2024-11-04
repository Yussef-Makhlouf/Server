import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, ref: "Category" },
  image: { type: String, required: true },
  rate: { type: Number, required: true },
  highlights: { type: String },
});

export const Product = mongoose.model("Product", productSchema);