import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import EmailModel from "./model/EmailModel.js";

import {
  createFood,
  deleteFoodById,
  getFood,
  getFoodById,
  upload,
} from "./controller/FoodController.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
await connectDB();

//get api
app.get("/food", getFood);

//get food by id
app.get("/food/:id", getFoodById);

//post api
// serve uploaded images
app.use("/images", express.static("uploads"));
app.post("/food", upload.single("image"), createFood);

//delete api
app.delete("/food/:id", deleteFoodById);

//get api for email
app.get("/email", async (req, res) => {
  const data = await EmailModel.find({});
  res.status(200).json({ success: true, data });
});

// GET email by ID
app.get("/email/:id", async (req, res) => {
  const data = await EmailModel.findById(req.params.id);

  res.status(200).json({
    success: true,
    data,
  });
});

// POST email
app.post("/email", async (req, res) => {
  const data = new EmailModel({
    email: req.body.email,
  });

  await data.save();

  res.status(201).json({
    success: true,
    data,
  });
});

// DELETE email by ID
app.delete("/email/:id", async (req, res) => {
  const data = await EmailModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data,
  });
});

app.listen(5000, () => {
  console.log("Server is listening on port:5000...");
});
