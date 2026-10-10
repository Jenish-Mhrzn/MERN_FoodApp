import express from "express";
import {
  createFood,
  deleteFoodById,
  getFood,
  getFoodById,
  upload,
} from "../controller/FoodController.js";

const router = express.Router();

//get api
router.get("/", getFood);

//get food by id
router.get("/:id", getFoodById);

//post api
router.post("/", upload.single("image"), createFood);

//delete api
router.delete("/:id", deleteFoodById);

export default router;
