import { Category } from "../../database/models/category.model.js";

const getOneCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).json({ msg: "Category not found" });
  }
  res.json(category);
};

const getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json({message:"Success",categories});
};

export{
    getOneCategory,
    getAllCategories,
}