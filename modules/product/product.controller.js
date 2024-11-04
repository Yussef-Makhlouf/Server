import { Product } from "../../database/models/product.model.js";

const getAllProducts = async function (req, res) {
  const condition = {};
  const { category, keyword, page = 1, limit = 10 } = req.query;

  if (category) {
    condition.category = category;
  }

  if (keyword) {
    condition.title = { $regex: ".*" + keyword + ".*", $options: "i" };
  }

  const offset = (page - 1) * limit;
  const products = await Product.find(condition)
    // .populate("category")
    .limit(limit)
    .skip(offset);

  const total = await Product.countDocuments(condition);

  res.json({
    products,
    total,
    page,
    pages: Math.ceil(total / limit),
  });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).select(
    "title description price image rate highlight"
  );
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
};

export { getAllProducts, getProductById };
