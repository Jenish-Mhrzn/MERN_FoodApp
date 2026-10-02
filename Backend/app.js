import express from "express";
import connectDB from "./config/db.js";
import FoodModel from "./model/FoodModel.js";
import multer from "multer";
import path from "path";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
await connectDB();

//get api
app.get("/food", async (req, res) => {
  const data = await FoodModel.find({});
  res.status(200).send({ success: true, data });
});

//get food by id
app.get("/food/:id", async (req, res) => {
  const { id } = req.params;
  const food = await FoodModel.findById(id);
  if (!food) {
    res.status(400).json({ success: false, message: "Food not found" });
  }
  res.status(200).json({ status: true, food });
});

//post api
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

// serve uploaded images
app.use("/images", express.static("uploads"));

app.post("/food", upload.single("image"), async (req, res) => {
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
});

