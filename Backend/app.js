import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";

import {
  createEmail,
  deleteEmailById,
  getEmail,
  getEmailById,
} from "./controller/EmailController.js";
import food from "./routes/FoodRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
await connectDB();

app.use("/food", food);

//post api
// serve uploaded images
app.use("/images", express.static("uploads"));

//get api for email
app.get("/email", getEmail);

// GET email by ID
app.get("/email/:id", getEmailById);

// POST email
app.post("/email", createEmail);

// DELETE email by ID
app.delete("/email/:id", deleteEmailById);

app.listen(5000, () => {
  console.log("Server is listening on port:5000...");
});
