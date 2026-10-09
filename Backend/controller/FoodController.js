import multer from "multer";
import path from "path";
import fs from "fs";
import FoodModel from "../model/FoodModel.js";

export const getFood = async (req, res) => {
  const data = await FoodModel.find({});
  res.status(200).send({ success: true, data });
};

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  const food = await FoodModel.findById(id);
  if (!food) {
    res.status(400).json({ success: false, message: "Food not found" });
  }
  res.status(200).json({ status: true, food });
};

//post part
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
export const upload = multer({ storage });
export const createFood = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

    if (!name || !category || !price || !req.file || !description) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, image, category, description and price",
      });
    }

    const data = await FoodModel.create({
      name,
      category,
      price,
      image: req.file.filename,
      description,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModel.findById(id);
    if (!food) {
      res.status(404).json({ success: false, message: "Food not found" });
    }

    const imagepath = path.join("uploads", food.image);
    if (fs.existsSync(imagepath)) {
      fs.unlinkSync(imagepath);
    }

    await FoodModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
